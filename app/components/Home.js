// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import LeftNav from './leftNav.jsx';
import Body from './body.jsx';
type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="flex-container">
        <LeftNav />
        <Body />
        <div className={styles.container} data-tid="container">

        </div>
      </div>
    );
  }
}
