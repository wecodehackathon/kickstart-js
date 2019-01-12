import React, { Component } from 'react';
// import Tags from './Tags.js'
class SubmitForm extends Component {

  state = {
    title: '',
    textBody: '',
    tags: ''
  }
  render() {
    return (
      <div>
        <h2>Create a post</h2>
        <form onSubmit={this.handleSubmit}>
        <label>
          <h4>Title</h4>
          <input type="text"/>
        </label>
        <label>
          <h4>Body</h4>
          <textarea></textarea>
        </label>
        <label>
          <h4>Tags</h4>
          {/* <Tags/> */}
          {/* Tags component here */}
        </label>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default SubmitForm;