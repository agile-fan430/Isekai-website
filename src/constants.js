import WalletConnectProvider from "@walletconnect/web3-provider";

const GRAPH = {
  Graph_Api: process.env.GRAPH_API
    ? process.env.GRAPH_API
    : "https://api.thegraph.com/subgraphs/name/sananbintahir/ecchi-coin-official-marketplace",
};

const ECCHICOIN_CONTRACT_ADDRESS = {
  Ecchicoin_Contract_Address: "0x5609366c91d87e6aad1f880999825da4875c2054",
};

const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
});

export { GRAPH, ECCHICOIN_CONTRACT_ADDRESS, provider };
