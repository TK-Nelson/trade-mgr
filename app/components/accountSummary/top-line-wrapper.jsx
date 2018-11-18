import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import TopLine from './TopLine';
import ExchangeBalancesWrapper from './exchange-balances-wrapper';

export default class TopLineWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: 1,
      accountInfo:[],
      balances: []
    }
  }


render() {

  return (
    <div className="topline__wrapper u-flex-2">
      <TopLine />
      <ExchangeBalancesWrapper />
    </div>
    )
  }
}
