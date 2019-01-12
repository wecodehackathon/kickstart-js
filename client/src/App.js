import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SubmitForm from './SubmitForm.js';
import Header from './Header.js';
import Community from './Community.js';
import SignIn from './SignIn';
import RecipePage from './RecipePage';


class App extends Component {
  state = {
    list: '',
    post: '',
    responseToPost: ''
  };

  componentDidMount() {
    this.updateTodoList();
  }

  updateTodoList() {
    this.callApi()
      .then(res => this.setState({ list: res.toDoList }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/addItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text()
     .then(this.updateTodoList());

    this.setState({ responseToPost: body, post: '' });
  };

  render() {
    console.log(this.state.response);
    return (
      <Router>
      <div className="App">

        <Switch>
        <Route exact path="/form" component={SubmitForm}/>
        <Route exact path="/" component={Community}/>
        <Route exact path="/signin" component={SignIn}/>

        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
