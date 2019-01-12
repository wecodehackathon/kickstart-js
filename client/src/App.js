
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import React, { Component } from 'react';
import './App.css';
import MapComponent from './MapComponent';
import LandingPage from './LandingPage';

class App extends Component {
  state = {
    displayDetail: false;
  };


  render() {

    return (
      <div className="App">
        <LandingPage />
        <MapComponent />
      </div>
    );
  }
}

export default App;
