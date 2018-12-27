import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

const DoughnutChart = require('react-chartjs').Doughnut;

export default class ExchangeBalance extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      total: this.props.total,
      chartOptions:{
        responsive: true,

      }
    }
  }


  pieData = () => {
        return [
        {
            value: 24,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 12,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 76,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 5,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 16,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }
        ];
      }

render() {

  return (
        <div className="exchange-balance u-width-third">

          <div className="exchange-balance__header u-flex u-flex-row">
            <h5 className="u-flex-1">{this.state.name}</h5>
            <span className="u-flex-last">{this.state.total}</span>
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
              <DoughnutChart data={this.pieData()} options={this.state.chartOptions}/>
            </div>
          </div>

        </div>


    )
  }
}
