import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { Nav, NavItem } from 'react-bootstrap';


export default class AccountSummary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: 1,
      accountInfo:[]
    }

  }

  componentDidMount(){
    this.getAccountInfo();
  }

  componentWillMount = () => {

  }

  getAccountInfo = () => {
    this.props.cxns.Binance2.accountInfo()
    .then((res) => {
      this.setState({accountInfo:res});
    });
  }

  handleSelect = (selectedKey) => {
    //alert(`selected ${selectedKey}`);
    this.state.activeKey= selectedKey;
  }


  render() {
    return (
      <div className="u-width-full card u-width-full u-flex" >

        <Nav
             bsStyle="tabs"
             activeKey={(this.state.activeKey)}
             onSelect={this.handleSelect}>

          <NavItem eventKey={1}
                   href="#">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey={2} title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey={3}>
            NavItem 3 content
          </NavItem>
        </Nav>

      </div>
    );
  }
}
