require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan repeat noble hole just arctic slot gift'; 
let testAccounts = [
"0x154addfa7ab52af3a4833cbac6cbc0a65b8d079f47f1c6b11c23e774c7dace4e",
"0x261c0985445b03744d0e7cc5f5811004f77d02bfad1def28baac161561f9ef4a",
"0xcf1dc66dae9da3fba148e46ea6e186fcb52714dddb22f8dbeeedd1b1a2afb37c",
"0xb1acc0e9fa994cc6918f217018306584d57e874c4b9450971335d97b33c7277e",
"0x6f094884c1abb0d3ee2b9030e3f021915aa69d59b6e1b328554d75a42b52833c",
"0x69838868091f27b5b61d2c61a5d082cb860335839673dadeb7c3ede54f73d962",
"0x47ccdb7b2f57abe1841a366e1ef102d01e70cedd65fab87b3461ae6660d1ed2e",
"0xe1d505029dcd56e01542e78cd9658020b5e3a4ccfc6772b23dd0969bc164b50b",
"0x8292b41a3bead6a49d693ee89506d4c0ecff1853023a13fb1ff94aa9efafd85e",
"0xd59df0a2c03f602bc2eca8cb20a56e2a73b0e90b99f89d8c1a064ac685d1f566"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


