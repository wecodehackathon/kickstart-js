import React, { Component } from 'react';
import { connect } from 'react-redux';
import ggLogo from '../assets/gg_logo.jpg';
import Map from '../components/Map';
import './MapView.css';

//import { UpdateText } from './_redux/actions/test'

class MapView extends Component {
  state = {
  };

  componentDidMount() {
  }


  render() {
    const mapDescription = 'Map map map map';

    return (
      <div id="map-view">
        <header className="map-header">
          <img src={ggLogo} alt="Growing Gardens"/>
          <h3>{mapDescription}</h3>
        </header>
        <Map/>
      </div>
    );
  }
}

const mapStateToProps = ({ Test }) => {
  return {
    hmm: Test.text,
  }
}

export default connect(mapStateToProps)(MapView)
