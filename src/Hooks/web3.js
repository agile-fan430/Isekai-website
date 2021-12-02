import Web3 from "web3";
import OFFICIALMARKET_ABI from "../ABI/officialmarket.json";
import BUSD_ABI from "../ABI/busd.json";

// import ERC1155COLLECTIBLE_ABI from '../ABI/erc1155collectible.json';

const OFFICIALMARKET_ADDR = "0x96dF6bacD04F397340fe56D5EFadD7c743Cf0861";
const BUSD_ADDR = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";

// const ERC1155COLLECTIBLE_ADDR = "0xD6913355fE32FC7F5Da5818996aD97481CcA7C8f";

export const checkApproved = async () => {
  const web3 = new Web3(window?.web3?.currentProvider);
};

export const buyNFT = async (price, saleID) => {
  // console.log(BigInt(price/1000000000000000000));
  const web3 = new Web3(window?.web3?.currentProvider);
  const officialMarketContract = new web3.eth.Contract(
    OFFICIALMARKET_ABI.abi,
    OFFICIALMARKET_ADDR
  );
  const ERC20Contract = new web3.eth.Contract(BUSD_ABI.abi, BUSD_ADDR);
  // const erc1155CollectibleContract = new web3.eth.Contract(ERC1155COLLECTIBLE_ABI, ERC1155COLLECTIBLE_ADDR);

  const addressArray = await window.ethereum.request({
    method: "eth_accounts",
  });
  if (addressArray.length === 0) {
    alert("Wallet is not connected. Please connect Wallet first!");
    return;
  } else {
    const address = addressArray[0];
    // await officialMarketContract.methods.getIsEcchiMarketplace().send({ from: address });
    await ERC20Contract.methods
      .approve(OFFICIALMARKET_ADDR, price)
      .send({ from: address });
    await officialMarketContract.methods
      .buy(saleID)
      .send({ from: address })
      .on("sending", (e) => {})
      .on("sent", (e) => {})
      .on("transactionHash", (e) => {})
      .on("receipt", (e) => {
        window.location.reload();
      })
      .on("confirmation", (e) => {})
      .on("error", (e) => {});
    // await erc1155CollectibleContract.methods.mint (address).send({ from: address });
  }
};
