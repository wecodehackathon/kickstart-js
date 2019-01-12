import React, { Component } from 'react';

class AddProduceForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="produceForm">
        ProduceForm
        <div className="closeIconContainer">
          <div onClick={this.props.onAddProduceForm}>
            X - close
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduceForm;
