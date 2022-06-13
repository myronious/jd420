import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'JDW420',
  tokenName: 'JDW420',
  tokenSymbol: 'JDW420',
  hiddenMetadataUri: 'ipfs://QmeRVVDzSeRTcXPuV2gNFCqyXcKFaNX9zUnjPvyRNMJ1Uh/JDhidden.json',
  maxSupply: 420,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.03,
    maxMintAmountPerTx: 15,
  },
  publicSale: {
    price: 0.04,
    maxMintAmountPerTx: 50,
  },
  contractAddress: '0xC7Ba20B2e87d59aD40538Dd47EAC6950007A5a0b',
  marketplaceIdentifier: 'JDW420',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
