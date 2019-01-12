import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";

const MyMapComponent = compose(
  withProps({
    /**
    * Note: create and replace your own key in the Google console.
    * https://console.developers.google.com/apis/dashboard
    * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
    */
    googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAox3QKvH-cDvAtzjyclobeTCj2yuKvO2s&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
  {props.isMarkerShown && (
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  )}
  </GoogleMap>
));

class MapComponent extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div onClick={this.props.onDisplayDetail}>
      <MyMapComponent isMarkerShown />
      </div>
    );
  }
}

export default MapComponent;
