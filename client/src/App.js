
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import React, { Component } from 'react';
import './App.css';
import MapComponent from './MapComponent';
import LandingPage from './LandingPage';
import ProduceDetail from './ProduceDetail';
import AddProduceFormButton from './AddProduceFormButton';
import AddProduceForm from './AddProduceForm';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDetail: false,
      displayAddProduceForm: false,
    };
    this.handleDisplayDetail = this.handleDisplayDetail.bind(this);
    this.handleAddProduceForm = this.handleAddProduceForm.bind(this);
  }

  handleDisplayDetail(){
    this.setState({
      displayDetail: !this.state.displayDetail,
    })
  }

  handleAddProduceForm(){
    this.setState({
      displayAddProduceForm: !this.state.displayAddProduceForm,
    })
  }

  render() {

    return (
      <div className="App">
        <LandingPage />
        <MapComponent onDisplayDetail={this.handleDisplayDetail}/>
        {this.state.displayDetail && <ProduceDetail onDisplayDetail={this.handleDisplayDetail} />}
        <AddProduceFormButton onAddProduceForm={this.handleAddProduceForm}/>
        {this.state.displayAddProduceForm && <AddProduceForm onAddProduceForm={this.handleAddProduceForm}/>}
      </div>
    );
  }
}

export default App;
