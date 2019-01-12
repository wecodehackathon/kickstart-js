import React, { Component } from 'react';

class AddProduceForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        ProduceForm
        <div onClick={this.props.onAddProduceForm}>
        X - close
        </div>
      </div>
    );
  }
}

export default AddProduceForm;
