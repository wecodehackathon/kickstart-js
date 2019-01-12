import React, { Component } from 'react';
import './App.css';
import TextNotifierForm from './TextNotifierForm';

class App extends Component {
  state = {
    showThankyou: false,
  };
  setThankYou = () => {
    this.setState({ showThankYou: true })
  }
  render() {
   return (
    <div>
      {!this.state.showThankYou && <TextNotifierForm setThankYou={this.setThankYou} />}
      {this.state.showThankyou && <div>
        thansk you
        </div>}
     </div>)
  }
}

export default App;
