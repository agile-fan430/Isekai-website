require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const Web3 = require("web3");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 5000;
const erc1155_ABI = require("./abis/ERC1155Collectible.json");
const erc1155_addr = "0x6C2Be9D7fd7bAcE51EB296FE2Ee192A721e1A85B";
const ecchi_ABI = require("./abis/EcchiCoin.json");
const ecchiAddress = "0x5609366c91D87e6aAd1f880999825Da4875C2054";

const {
  handleOfficialMarketEvents,
  getPastEvents,
  createSaleCounter,
} = require("./event-listener");

const uri = process.env.URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.get("/", function (req, res) {
  res.send("Marketplace indexer");
});

app.get("/activeSales/:id", async function (req, res) {
  await client.connect();
  const cursor = client.db("official-market").collection("fixed-sales").find({
    saleActive: true,
    tokenId: req.params.id,
  });

  // Store the results in an array
  const results = await cursor.toArray();
  res.json(results);
});

app.get("/salesInfo", async function (req, res) {
  await client.connect();
  const result = await client
    .db("official-market")
    .collection("fixed-sales")
    .findOne({
      salesInfo: true,
    });
  res.json(result);
});

app.get("/totalSupply", async function (req, res) {
  const web3 = new Web3(
    "https://aged-sparkling-grass.bsc.quiknode.pro/89781294386c781ca5dde485a163721e87975f2e/"
  );

  const contractInstance = new web3.eth.Contract(ecchi_ABI.abi, ecchiAddress);

  let result = await contractInstance.methods.totalSupply().call();
  result = parseInt(result) / 1000000000;
  res.json(result);
});

app.get("/totalMinted/:id", async function (req, res) {
  const web3 = new Web3(
    "https://aged-sparkling-grass.bsc.quiknode.pro/89781294386c781ca5dde485a163721e87975f2e/"
  );

  const contractInstance = new web3.eth.Contract(erc1155_ABI.abi, erc1155_addr);

  const result = await contractInstance.methods
    .totalSupply(req.params.id)
    .call();
  res.json(result);
});

//createSaleCounter();
//getPastEvents();
handleOfficialMarketEvents();

let server = app.listen(port, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
