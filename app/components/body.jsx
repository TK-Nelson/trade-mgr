import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import AccountSummary from './accountSummary';


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
      <div className="body__container u-push-md u-width-full" id="body" data-tid="container">
        <AccountSummary className="card u-fill-primary u-width-full u-flex "/>

      </div>
    );
  }
}
