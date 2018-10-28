// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';


type Props = {};

export default class NavElem extends React.Component{
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
      <div className="nav__left--elem" id="" >
        <a href={this.state.link}>
          <i className={"fa " + this.state.icon} />
          <h3>{this.state.value}</h3>
        </a>
      </div>
    );
  }
}
