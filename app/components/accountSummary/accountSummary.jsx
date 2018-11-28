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
