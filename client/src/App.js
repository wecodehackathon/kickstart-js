import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Complete from './Complete';
import Footer from './Footer';

import TextNotifierForm from './TextNotifierForm';

class App extends Component {
  state = {
    showThankYou: false
  };

  setThankYou = (showThankYou) => {
    this.setState({ showThankYou })
  }

  render() {
   return (
    <div>
      <Header />
      {!this.state.showThankYou && <TextNotifierForm setThankYou={this.setThankYou} />}
      {this.state.showThankYou && <Complete />}
      <Footer />
    </div>)
  }
}

export default App;
