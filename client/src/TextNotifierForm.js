import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import schoolProgramData from './classes.json';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

function getData (schoolProgramData) {
    const schoolData = {};
    schoolProgramData.forEach(schoolProgram => {
        const school = Object.keys(schoolProgram)[0];
        schoolData[school] = schoolProgram[school]
    });
    return schoolData
}
class TextNotifierForm extends Component {
    constructor(props) {
        super(props);
        this.schoolData = getData(schoolProgramData);
    } 
    state = {
        phone: '',
        school: '',
        programs: [],
        formIsInvalid: true,
    };

    schools = schoolProgramData.map(schoolProgram => Object.keys(schoolProgram)[0]);

  showThankYouPage = () => {
      alert('go to the thank you page.')
  }
  handleSubmit = async e => {
      e.preventDefault();
    console.log('this is the state of things when we submit: ', this.state)
    const response = await fetch('https://dbasak1sjk.execute-api.us-west-2.amazonaws.com/development/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          phone: this.state.phone,
          school: this.state.school,
          programs: this.state.programs,
      })
    });

    const body = await response.text()
     .then(this.props.showThankYouPage());
  }
  renderSubmitButton = () => {
    return (
    <div>
        {/* <Button disabled={this.state.formIsInvalid} onClick={this.handleSubmit}>Sign Me Up!</Button> */}
        <Button onClick={this.handleSubmit}>Sign Me Up!</Button>
    </div>)
  }

  handlePhoneNumber = phoneNumber => {
      this.setState({ phone: this.textInput.value });
  }
  handleSchoolSelection = e => {
      this.setState({ school: e.target.value })
  }
  handleProgramSelection = program => {
      const selectedPrograms = this.state.programs;
      selectedPrograms.push(program);
      this.setState({ programs: selectedPrograms });
  }
  renderPrograms = () => {
      if (this.state.school !== '') {
        return (
            <div>
                <ControlLabel>Choose your program:</ControlLabel>
                <FormGroup>
                    {this.schoolData[this.state.school].map(program => (
                        <Checkbox onChange={() => this.handleProgramSelection(program.name)}>{program.name}</Checkbox>
                    ))}
                </FormGroup>
            </div>
        )
      }
      return null;
  }
  renderFormElements = () => {
      const formInstance = (
        <form>
          <FieldGroup
            id="phoneNumber"
            type="text"
            label="Enter your phone number:"
            placeholder="Enter your phone number"
            inputRef={input => this.textInput = input}
            onChange={this.handlePhoneNumber}
          />
           <FormGroup controlId="schoolSelect">
            <ControlLabel>Choose your school:</ControlLabel>
            <FormControl componentClass="select" placeholder="select" onChange={this.handleSchoolSelection}>
                <option value="">[ Select School ]</option>
                {this.schools.map(school => (
                    <option value={school}>{school}</option>
                ))}
            </FormControl>
            </FormGroup>

            {this.renderPrograms()}
          </form>
        );
        return formInstance;
  }

  render() {
   return (
   <div >
       {this.renderFormElements()}
       {this.renderSubmitButton()}

    </div>);
  }
}
TextNotifierForm.propTypes = {
    showThankYouPage: PropTypes.func
  };


export default TextNotifierForm;
