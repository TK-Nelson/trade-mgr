import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import ExchangeBalance from './exchange-balance';

export default class ExchangeBalancesWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


render() {

  return (

      <div className="exchange-wrapper u-flex u-flex-col">
        <ExchangeBalance />
        <ExchangeBalance />
        <ExchangeBalance />
        <ExchangeBalance />
        <ExchangeBalance />
        <ExchangeBalance />

      </div>

    )
  }
}
