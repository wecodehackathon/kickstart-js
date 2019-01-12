import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'; 
import logo from './logo.jpg'

class Header extends Component {

  render() {

    return(
      <nav>
        <Link className="logo-link" to="/"><img className="logo" src={logo}/></Link>
        <Link to="/form">Forum</Link>
      </nav>
    );
  }
}

export default Header;