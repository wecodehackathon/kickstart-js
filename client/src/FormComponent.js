import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'

const divStyle = {
  height: '150px'
};

export class FormComponent extends Component {
  render () {
    return (
      <div
        style={divStyle}
        >
        <div>
          <TextField
            label="Produce 🥕"
          />
        </div>
        <div>
          <TextField
            label="Location 🏠"
          />
        </div>
        <div>
          <TextField
            label="Amount 🔟"
          />
        </div>
      </div>

    )
  }
}

export default FormComponent;
