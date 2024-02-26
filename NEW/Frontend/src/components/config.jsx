import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x9208A3a0Ab1d2E447E313EABF7aD7C68e3D35852";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/8njhGN6qswB5toQ7Izs7VNO1DYCi_sJv",
  },
};
