import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

export const GlobalContext = React.createContext()

export class GlobalInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInfo:'',


    }
  }

  getBTCValue = () =>{
    return 'btc value';
  }

  UserInfo = () =>{

  }


  render() {

    return (

      <GlobalContext.Provider value={{
        }} >
        {this.state}
      </GlobalContext.Provider>
    )
  }
}
