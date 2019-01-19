import React, { Component } from 'react';

class ProduceDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="produceDetail" onClick={this.props.onDisplayDetail}>
        <img className="produceDetailImage"
      src="https://www.growing-gardens.org/wp-content/uploads/2013/03/Angelina15101213600_1316-624x550.jpg"
      alt="new"
      />
        <div className="message">
        Hola, me and my children would love to share our tomatoes with you, our neighbors.  Please come by and say hello.
        </div>
        <div>
        </div>
        <div className="address">
        📍7400 NE Frederickson Dr.
        </div>
      </div>
    );
  }
}

export default ProduceDetail;
