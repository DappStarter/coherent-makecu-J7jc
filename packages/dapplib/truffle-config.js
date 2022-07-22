require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember promote hidden climb tail gesture'; 
let testAccounts = [
"0x5db6b48564c89f6e3711ba2ea09248b1a87d8b61585e74789e1b30591b06a05d",
"0xd2eedd605c7b97f90ae1d512b3f77f7780b6931c93234391ce65cdf23290363c",
"0xb354ce95113ad938e7a227081a13db900423d30fa9e2988a083bccd425bf03c9",
"0x3447cfbae9b9d4a3299d458a628b3d24ad358bd4d51cd5524587641cf293f880",
"0x0cd335ea54efdc51e3241ad93d45d13b937deb531bee640d3c625f724d9dc7b4",
"0x757ef5e0c337cabfac25d782054b14722c1d85690b67f2b78ecd9d9b2e04dc6e",
"0x456f4d453487d05dc4d116f80b33d0566e7fd0c6fdd2f446ac019ab6b80a6183",
"0xa2d92e8335b89776f8f91091938d488bd576d3c4be81ae0468b8abe9eceeabbe",
"0xa1af1ee4be4a63d48f21551f869766c53d50e3919fa221bda24c625e0dba3845",
"0x4e2cd58a8f7c1e6c163b43998ad6f6667a0d66df982193f09317d1f47e03f067"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

