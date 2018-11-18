import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

export default class ExchangeBalance extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


render() {

  return (
        <div className="exchange-balance u-width-third">

          <div className="exchange-balance__header u-flex u-flex-row">
            <h5 className="u-flex-1">Binance</h5>
            <span className="u-flex-last">$15,000</span>
            <span className="u-flex-last u-push-sm-left">15%</span>
          </div>

          <div className="exchange-balance__body u-flex u-flex-row ">
            <div className="u-flex-2">
              <div className="exchange-balance__item u-flex u-flex-row">
              <div className="exchange-balance__indicator"></div>
                <h5 className="u-flex-1">BTC</h5>
                <span className="">75%</span>
              </div>
              <div className="exchange-balance__item u-flex u-flex-row">
              <div className="exchange-balance__indicator"></div>
                <h5 className="u-flex-1">BTC</h5>
                <span className="">75%</span>
              </div>
              <div className="exchange-balance__item u-flex u-flex-row">
              <div className="exchange-balance__indicator"></div>
                <h5 className="u-flex-1">BTC</h5>
                <span className="">75%</span>
              </div>
            </div>

            <div className="exchange-piechart u-flex-1">

            </div>
          </div>

        </div>


    )
  }
}
