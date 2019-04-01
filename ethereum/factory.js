import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6F9f3Cc52b4A4c67E7E68a3C4bdB4af751F1c3EA'
);

export default instance;