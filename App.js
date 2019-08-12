// RNRF logic here
import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "./src/screens/Home";
import ViewList from './src/screens/ViewList';
import Details from './src/screens/Details';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene key="Home" component={Home} hideNavBar={true} />
          <Scene key="ViewList" component={ViewList} hideNavBar={true} />
          <Scene key="Details" component={Details} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}
