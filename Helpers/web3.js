   
import Web3 from "web3";

let web3 = new Web3;
if(typeof window !=="undefined" && typeof window.ethereum !=="undefined"){
    window.ethereum.request({method:"eth_requestAccounts"});
    web3= new Web3(window.ethereum);


} else{

    const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/51a14778daab4573a110aa9a352ac330");
    web3 = new Web3(provider)

    }


export default web3;