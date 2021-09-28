import web3 from "../Helpers/web3";

import NameContractABI  from "../build/contracts/Name.json";
const factoryContractAdress = "0x6afa8200f0c308b1a3e5749077a4258bc98357f2";

const abi = NameContractABI.abi;
const factory = new web3.eth.Contract(abi,factoryContractAdress)



export default factory;