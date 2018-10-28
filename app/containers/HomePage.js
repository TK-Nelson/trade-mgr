// @flow
import React, { Component } from 'react';
import Home from '../components/Home';

type Props = {};
let cxns  = require('../config/cxns');

export default class HomePage extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      Binance:cxns.cxns.client2,
    }
  }
  props: Props;

  render() {
    return <Home cxns= {this.state}/>;
  }
}
