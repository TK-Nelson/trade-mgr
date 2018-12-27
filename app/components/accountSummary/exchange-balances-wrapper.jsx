import React from 'react';
import ExchangeBalance from './exchange-balance';
import { Consumer } from '../globalInfo/prices';


export default class ExchangeBalancesWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

render() {

  return (
    <Consumer>
      {(data) => (
      <div className="exchange-wrapper u-flex u-flex-col">
        {console.log("data in EBWrapper: ",Object.entries(data))}
        <ExchangeBalance name ="Binance" total="$15000"/>

      </div>
    )}
  </Consumer>
    )
  }
}
