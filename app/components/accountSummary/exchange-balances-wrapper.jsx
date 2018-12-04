import React from 'react';
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
