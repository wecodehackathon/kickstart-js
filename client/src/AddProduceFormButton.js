import React, { Component } from 'react';

class AddProduceFormButton extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <button className="addButton" onClick={this.props.onAddProduceForm}>(produce icon) +</button>
      </div>
    );
  }
}

export default AddProduceFormButton;
