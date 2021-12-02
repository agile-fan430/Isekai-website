const onSaleItems = `
  query fixedPriceSales($tokenID: String){
    fixedPriceSales(where: {tokenID: $tokenID, status: Active}) {
        saleId
        tokenID
        fixedPrice
        status
        fixedArtworkSale {
          amountOnSale
          nft {
            id
            isOnSale
            isERC721
            tokenMetadataUri
          }
        }
      }
}
`;

const ownedNFts = `
query collectors($id: String){
  collectors (where: {id: $id}){
   nfts {
      nft {
        tokenID
        tokenMetadataUri
      }
      amount
    }
  }
}
`;

const totalMinted = `
  query nfts($tokenID: String){
    nfts(where: {tokenID: $tokenID}) {
        amountMinted
    }
  }
  `;

export { onSaleItems, totalMinted, ownedNFts };
