// RNRF logic here
import React, { Component } from "react";
import { BackHandler, Alert } from "react-native";
import { Router, Scene, Actions } from "react-native-router-flux";

import Home from "./src/screens/Home";
import ViewList from './src/screens/ViewList';
import Details from './src/screens/Details';



export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true" 
              backAndroidHandler={() => {
                if (Actions.currentScene == "Home") {
                  BackHandler.exitApp();
                  return false;
                }}
              }>
        <Scene key="root">
          <Scene key="Home" component={Home} hideNavBar={true} initial={true} />
          <Scene key="ViewList" component={ViewList} hideNavBar={true} />
          <Scene key="Details" component={Details} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}
