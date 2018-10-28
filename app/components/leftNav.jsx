// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import NavElem from './navElem.jsx';

type Props = {};

export default class LeftNav extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="nav__left" id="nav-left" data-tid="container">
        <NavElem icon="fa-home" value="Home" link="#"/>
        <NavElem icon="fa-home" value="History" link="#"/>
        <NavElem icon="fa-home" value="Trade Mgr" link="#"/>
      </div>
    );
  }
}
