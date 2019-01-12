import React, { Component } from 'react';

class AddProduceFormButton extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div onClick={this.props.onAddProduceForm}>(produce icon) +</div>
      </div>
    );
  }
}

export default AddProduceFormButton;
