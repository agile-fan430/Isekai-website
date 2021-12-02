import { Decimal128 } from "mongodb";
const { MongoClient } = require("mongodb");
const Web3 = require("web3");
const erc1155_ABI = require("./abis/ERC1155Collectible.json");
const official_ABI = require("./abis/OfficialMarketUpgradeable.json");
const erc1155_addr = "0x6C2Be9D7fd7bAcE51EB296FE2Ee192A721e1A85B";
const erc1155_start_block = "12662562";
const official_addr = "0x96dF6bacD04F397340fe56D5EFadD7c743Cf0861";
const official_start_block = "12662795"; //"12662795"; //"9646247"; //"12583933";
const zero_addr = "0x0000000000000000000000000000000000000000";

const WSS = //"wss://bsc-ws-node.nariox.org:443";
  "wss://aged-sparkling-grass.bsc.quiknode.pro/89781294386c781ca5dde485a163721e87975f2e/";
//"wss://speedy-nodes-nyc.moralis.io/e3ebf2a5d660ff8632e8acf4/bsc/mainnet/archive/ws";
//"wss://speedy-nodes-nyc.moralis.io/e3ebf2a5d660ff8632e8acf4/eth/rinkeby/archive/ws";

let options = {
  reconnect: {
    auto: true,
    delay: 5000, // ms
    maxAttempts: 5,
    onTimeout: false,
  },
};

let provider = new Web3.providers.WebsocketProvider(WSS, options);
const web3 = new Web3(provider);

const uri = process.env.URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const createSaleCounter = async () => {
  await client.connect();

  await client
    .db("official-market")
    .collection("fixed-sales")
    .updateOne(
      { salesInfo: true },
      {
        $set: { salesInfo: true, totalSales: 0, totalEarnings: 0 },
      },
      { upsert: true }
    );
};

export const handleOfficialMarketEvents = async () => {
  await client.connect();

  const contractInstance = new web3.eth.Contract(
    official_ABI.abi,
    official_addr
  );

  contractInstance.events.allEvents().on("data", async (e) => {
    if (e.event === "FixedSaleCreated") {
      console.log(`Sale ID ${e.returnValues.saleId} created`);
      await client
        .db("official-market")
        .collection("fixed-sales")
        .updateOne(
          { saleId: e.returnValues.saleId },
          {
            $set: {
              price: e.returnValues.fixedPrice,
              saleId: e.returnValues.saleId,
              tokenId: e.returnValues.tokenId,
              startingTime: e.returnValues.startingTime,
              isERC721: e.returnValues.isERC721,
              nftContract: e.returnValues.nftContract,
              amount: e.returnValues.amount,
              seller: e.returnValues.seller,
              saleActive: true,
              saleSuccessful: false,
            },
          },
          { upsert: true }
        );
    } else if (e.event === "FixedSaleSuccessful") {
      await completeSale(client, e, true);
    } else if (e.event === "FixedSaleFinished") {
      await completeSale(client, e, false);
    }
  });
};

export const getPastEvents = async () => {
  await client.connect();

  const contractInstance = new web3.eth.Contract(
    official_ABI.abi,
    official_addr
  );

  let currentBlock = await web3.eth.getBlockNumber();
  let blockDifference = currentBlock - parseInt(official_start_block);
  let runs = Math.floor(blockDifference / 10000) + 1;
  let startBlock = parseInt(official_start_block);
  let endBlock;

  for (let i = 0; i < runs; i++) {
    endBlock = startBlock + 10000;
    endBlock = endBlock > currentBlock ? "latest" : endBlock;
    console.log(startBlock, endBlock);
    // all previously created fixed sales
    let events = await contractInstance.getPastEvents("FixedSaleCreated", {
      fromBlock: startBlock,
      toBlock: endBlock,
    });
    for (let i = 0; i < events.length; i++) {
      console.log(`Sale ${events[i].returnValues.saleId} created`);
      await client
        .db("official-market")
        .collection("fixed-sales")
        .updateOne(
          { saleId: events[i].returnValues.saleId },
          {
            $set: {
              price: events[i].returnValues.fixedPrice,
              saleId: events[i].returnValues.saleId,
              tokenId: events[i].returnValues.tokenId,
              startingTime: events[i].returnValues.startingTime,
              isERC721: events[i].returnValues.isERC721,
              nftContract: events[i].returnValues.nftContract,
              amount: events[i].returnValues.amount,
              seller: events[i].returnValues.seller,
              saleActive: true,
              saleSuccessful: false,
            },
          },
          { upsert: true }
        );
    }

    events = await contractInstance.getPastEvents("FixedSaleSuccessful", {
      fromBlock: startBlock,
      toBlock: endBlock,
    });
    for (let i = 0; i < events.length; i++) {
      await completeSale(client, events[i], true);
    }

    // all previously finished sales
    events = await contractInstance.getPastEvents("FixedSaleFinished", {
      fromBlock: startBlock,
      toBlock: endBlock,
    });
    for (let i = 0; i < events.length; i++) {
      await completeSale(client, events[i], false);
    }

    startBlock = endBlock;
  }
};

async function completeSale(client, event, successful) {
  console.log(`Sale ID ${event.returnValues.saleId} completed`);

  if (successful) {
    await client
      .db("official-market")
      .collection("fixed-sales")
      .updateOne(
        { salesInfo: true },
        {
          $inc: {
            totalEarnings: Decimal128(event.returnValues.totalPrice),
            totalSales: 1,
          },
        },
        { upsert: true }
      );
  }

  await client
    .db("official-market")
    .collection("fixed-sales")
    .updateOne(
      { saleId: event.returnValues.saleId },
      {
        $set: {
          saleActive: false,
          saleSuccessful: successful,
        },
      },
      { upsert: true }
    );
}
