import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
const axios = require('axios');
let binance_api  = require('../../config/cxns');
let UserInfo = require("../../config/UserInfo.js");



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
        binance:{
          conversion:[],
          balance_gtz:[],
          subtotal:''
        }
      }
    }
  }


  componentDidMount(){
      this.networkRequest()
  }

  networkRequest(){
     // Remove setTimeout and replace with a networkRequest
     setInterval(() =>{
       this.getPriceInBTC()
     }, 10000)


    setTimeout(() => {
      this.getInfo()
      this.setState({
        loading: false
      })
    }, 3000)
  }


  getPriceInBTC = () => {
    axios.get(("https://api.nomics.com/v1/prices?key=")+UserInfo.UserInfo.Nomics.key)
      .then((res) => {
        var priceInBTC=[];
        for (var x in res.data){
          priceInBTC[res.data[x].currency] = res.data[x].price
        }
        this.setState(
          {data:{
            ...this.state.data,
            binance:{
              ...this.state.data.binance,
              conversion:priceInBTC
            }
          }}
        );
    })
  }

  getInfo = () => {
    binance_api.cxns.Binance2.accountInfo()
    .then((res) => {
      this.setState(
        {data:{
        ...this.state.data,
        binance:{
          ...this.state.data.binance,
          accountInfo:res}
     }});
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
            binance:{
              ...this.state.data.binance,
              balance_gtz:gtz}
         }});
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
