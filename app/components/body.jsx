import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';



export default class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      icon: this.props.icon,
      value: this.props.value,
      link: this.props.link,
    }
  }

  render() {
    return (
      <div className="body" id="body" data-tid="container">
        
      </div>
    );
  }
}
