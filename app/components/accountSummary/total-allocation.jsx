import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import { Consumer } from '../globalInfo/prices';


var DoughnutChart = require('react-chartjs').Doughnut;

export default class TotalAllocation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: [],
      chartOptions:[]
    }
  }

    data3 = () => {
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
    <Consumer>
      {(data) => (

        <div className="u-flex-1 u-flex-col u-push-md-left">
          <div className="u-flex-1">
            <h5>Testing</h5>
          </div>
          <div className="u-flex-2">
            <h5>Pie Chart</h5>
            {console.log('data: ', data)}
            <DoughnutChart data={this.data3()} options={this.state.chartOptions}/>
          </div>
        </div>

      )}
    </Consumer>



    )
  }
}
