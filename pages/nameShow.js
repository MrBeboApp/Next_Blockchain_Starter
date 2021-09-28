import React, { Component } from 'react'
import factory from '../Helpers/factory'
import 'bootstrap/dist/css/bootstrap.css'
import web3 from '../Helpers/web3';






class NameShow extends Component {
    async componentWillMount() {
        await this.loadName()
      }

      
      async loadName (){

        const name =  await factory.methods.name().call();

        this.setState({name:name})

       try {
        var accounts = await web3.eth.accounts;
        this.setState({ account: accounts[0] })
        console.log(web3.eth.accounts);

       }catch(e){
           console.log(e)
       }


      }

      constructor(props) {
        super(props)
        this.state = {
            name : "",
            account:"",
         
        }
        
    }


        render() {
            return (
          <div>
            <h3  >Fetch The Site Name {this.state.name}</h3>
            <h3  >My Wallet Address {this.state.account}</h3>





          </div>
            );
          }

}
 export  default NameShow; 