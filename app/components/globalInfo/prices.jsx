import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
let binance_api  = require('../../config/cxns');


export const GlobalContext = React.createContext()
export const Consumer = GlobalContext.Consumer
const Provider = GlobalContext.Provider

export default class GlobalInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInfo:'',
      loading: true,
      data: {
        accountInfo:'',
        balance_gtz:[]
      }
    }
  }

  networkRequest(){
     // Remove setTimeout and replace with a networkRequest
    setTimeout(() => {
      this.getInfo()
      this.setState({
        loading: false
      })
    }, 3000)
  }

  componentDidMount(){
      this.networkRequest()
  }

  getInfo = () => {
    binance_api.cxns.Binance2.accountInfo()
    .then((res) => {
      this.setState({data:{
        ...this.state.data,
        accountInfo:res}
      });
    })
    .then(async (error) => {
      binance_api.cxns.binance.balance((error, balances) => {

        if ( error ) return console.error(error);
        var gtz=[];
        for (var x in balances){
          if (balances[x].available > 0){
            gtz[x] = parseFloat(balances[x].available) + parseFloat(balances[x].onOrder);
          }
        }

        this.setState(
          {data:{
            ...this.state.data,
           balance_gtz:gtz}
         });

      });
    })
  }



  render() {
    return (
      <Provider value={this.state.data} >
        {this.state.loading ? "Loading..." : this.props.children}
      </Provider>
    )
  }
}
