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
    price: 55,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 85,
    maxMintAmountPerTx: 15,
  },
  publicSale: {
    price: 110,
    maxMintAmountPerTx: 50,
  },
  contractAddress: '0x23Ea9194AB09f8E6511bd77481AD6C6F892Bc3D2',
  marketplaceIdentifier: 'JDW420',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
