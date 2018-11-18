import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import AccountSummaryBalances from './accountSummaryBallances';
import TopLine from './topLine';
import TopLineWrapper from './top-line-wrapper';
import TotalAllocation from './total-allocation';


export default class AccountSummary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: 1,
      accountInfo:[],
      balances: []
    }
  }


  componentDidMount(){
    this.getInfo();
  }




  getInfo = () => {
    this.props.cxns.Binance2.accountInfo()
    .then((res) => {this.setState({accountInfo:res});})
    .then(async (error) => {
      this.props.cxns.binance.balance((error, balances) => {

        if ( error ) return console.error(error);
        var gtz=[];
        for (var x in balances){
          if (balances[x].available > 0){
            gtz[x] =parseFloat(balances[x].available) + parseFloat(balances[x].onOrder);
          }
        }
        console.log(gtz);
        this.setState({balances:gtz});
        // console.log('Balances Keys', Object.keys(balances));
        // console.log(balances.keysObject.keys(balances).available);
        return gtz;
      });
    })
    .then((gtz) => {

    });
  }



  renderBalances(){

   //  var gtz = this.state.balances.available.filter(function(x){
   //    return x>0;
   //  })
  }

  handleSelect = (selectedKey) => {
    //alert(`selected ${selectedKey}`);
    this.setState({activeKey:selectedKey});
  }


  render() {
    const balances = this.state.balances;

    return (
      <div className="account__summary u-width-full card u-width-full u-flex u-flex-col" >
        <div className="u-pad-md u-flex-row">
          <TopLineWrapper />
          <TotalAllocation />
        </div>
      </div>
    )
  }
}
