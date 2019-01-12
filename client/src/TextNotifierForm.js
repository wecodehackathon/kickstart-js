import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Checkbox from 'react-bootstrap/lib/Checkbox';

// import './App.css';


function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }


class TextNotifierForm extends Component {

  state = { 
      phone: '',
      school: '',
      programs: [],
      isPhoneValid:false,
      isSchoolValid: false,
  };

  renderPhoneTextField = () => {
    return (<div>enter phone#</div>)
  }
  renderSchoolDropdown = () => {
    return (<div>choose your school: </div>)
  }
  renderPrograms = () => {
    return (<div>choose your program: </div>)
  }
  showThankYouPage = () => {
      alert('go to the thank you page.')
  }
  handleSubmit = (e) => {
    console.log('e', e)
    console.log('this is the state of things when we submit: ', this.state)
    console.log("this.phoneno", this.textInput)
    if (this.state.isPhoneValid && this.state.isSchoolValid){
        alert('it workks')
    }else{
        alert('Invalid phone number or school')
    }
    // const response = await fetch('https://dbasak1sjk.execute-api.us-west-2.amazonaws.com/development/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(this.state)
    // });

    // const body = await response.text()
    //  .then(this.showThankYouPage());
  }
  renderSubmitButton = () => {
    return (
    <div>
        <Button onClick={this.handleSubmit}>Sign Me Up!</Button>
    </div>)
  }

  handlePhoneNumber = phoneNumber => {
      console.log("pn???", this.textInput.value)
      if (/^\d{10}$/.test(this.textInput.value)){
          this.setState({ phone: this.textInput.value });
          this.setState({isPhoneValid: true});
      }
  }
  handleSchoolSelection = e => {
      console.log('yes this is school seleciton change!!!!', e.target.value)
      if (e.target.value){
          this.setState({ school: e.target.value });
          this.setState({ isSchoolValid: true})
      }
  }
  handleProgramSelection = program => {
      const selectedPrograms = this.state.programs;
      selectedPrograms.push(program);
      this.setState({ programs: selectedPrograms });
      console.log('this is the state of thigns; ', this.state)
  }
  renderPrograms = () => {
    const programs = [{
        name: 'program 1',
    }, {
        name: 'program 2',
    }];

      if (this.state.school !== '') {
        return (
            <div>
                <ControlLabel>Choose your program:</ControlLabel>
                <FormGroup>
                    {programs.map(program => (
                        <Checkbox onChange={() => this.handleProgramSelection(program.name)}>{program.name}</Checkbox>
                    ))}
                </FormGroup>
            </div>
        )
      }
      return null;
  }
  renderFormElements = () => {
      const schools = { 'school1': [], 'school2': [], 'school3': [] };
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
                {Object.keys(schools).map(school => (
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

export default TextNotifierForm;
