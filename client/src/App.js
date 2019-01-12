
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import React, { Component } from 'react';
import './App.css';
import MapComponent from './MapComponent';
import FormComponent from './FormComponent';
import LandingPage from './LandingPage';
import ProduceDetail from './ProduceDetail';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    displayDetail: false,
  };


  render() {

    return (
      <div className="App">
        <LandingPage />
        <MapComponent displayDetail={this.state.displayDetail}/>
      <FormComponent />
        <Switch>
         <Route path='/' render={()=> <ProduceDetail />} />
       </Switch>
      </div>
    );
  }
}

export default App;
