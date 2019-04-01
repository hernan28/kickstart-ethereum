const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'involve oak indicate mail sponsor super wear damp man mosquito clog art',
    'https://rinkeby.infura.io/v3/a31735769da34f3d8a57844ca324508b'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: '0x' + compiledFactory.bytecode})
        .send({from: accounts[0]});

    console.log('Contract deployed to ', result.options.address);
}; 
deploy();



// address deployed contract Factory = 0x6F9f3Cc52b4A4c67E7E68a3C4bdB4af751F1c3EA