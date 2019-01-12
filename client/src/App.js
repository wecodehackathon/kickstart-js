import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';
import Header from './Header';
import Complete from './Complete';

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
      <Header />
      {!this.state.showThankYou && <TextNotifierForm setThankYou={this.setThankYou} />}
      {this.state.showThankyou && <div>
        thansk you
        </div>}
     </div>)
  }
}

export default App;
