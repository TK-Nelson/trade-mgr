// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import LeftNav from './leftNav.jsx';
import Body from './body.jsx';
type Props = {};

export default class Home extends Component<Props> {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  render() {
    return (
      <div className="flex-container">
        <LeftNav />
        <Body cxns={this.props.cxns} />
      </div>
    );
  }
}
