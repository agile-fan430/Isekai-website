import { client } from "./graphql/index";
import { totalMinted, ownedNFts } from "./graphql/queries";
import axios from "axios";

async function getOwnedItems(walletAddress) {
  let data = await client
    .query(ownedNFts, {
      id: walletAddress,
    })
    .toPromise();

  if (data?.data?.collectors?.length > 0) {
    return await Promise.all(
      data?.data?.collectors[0]?.nfts?.map(async (artwork) => {
        if (artwork?.amount < 0) return;
        let metadata;
        try {
          metadata = await axios.get(artwork.nft.tokenMetadataUri);
        } catch (err) {
          console.log("ERROR: " + err);
        }
        if (!metadata.data) return;
        artwork.contentURI = metadata?.data?.image;
        artwork.amount = parseInt(artwork?.amount);
        return artwork;
      })
    );
  } else {
    return [];
  }
}

async function getOnSaleItems(tokenID) {
  const res = await axios.get(
    `https://marketplace.ecchicoin.com/activeSales/${tokenID}`
    //`http://127.0.0.1:5000/activeSales/${tokenID}`
  );
  return res.data;
  // let data = await client
  //   .query(onSaleItems, {
  //     tokenID: tokenID,
  //   })
  //   .toPromise();
  //
  // if (data?.data?.fixedPriceSales?.length > 0) {
  //   return {
  //     onSaleItems: data?.data?.fixedPriceSales,
  //   };
  // } else {
  //   return [];
  // }
}

async function getTotalMinted(tokenId) {
  const res = await axios.get(
    `https://marketplace.ecchicoin.com/totalMinted/${tokenId}`
    //`http://127.0.0.1:5000/activeSales/${tokenID}`
  );
  return res.data;
  // let data = await client
  //   .query(totalMinted, {
  //     tokenID: tokenId,
  //   })
  //   .toPromise();
  // if (data?.data?.nfts?.length > 0) {
  //   return {
  //     totalMinted: data.data.nfts[0].amountMinted,
  //   };
  // } else return { totalMinted: 0 };
}

export { getOnSaleItems, getTotalMinted, getOwnedItems };
