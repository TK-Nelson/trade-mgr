import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

export default class TopLine extends React.Component{
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

      <div className="top__stats u-flex u-flex-row u-push-xl-bottom">
        <div className="u-flex-1">
          <h5>Total Portfolio Value</h5>
          <h1>25,000</h1>
        </div>

        <div className="u-flex-2">
          <h5>Total P/L</h5>
          <h1>250%</h1>
        </div>

        <div className="u-flex-row__last">
          <h5>Average Weekly P/L</h5>
          <h1>1.5%</h1>
        </div>
      </div>

    )
  }
}
