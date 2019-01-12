import React, { Component } from 'react';
import Tags from './Tags.js'
class RecipePage extends Component {

  state = {
    title: '',
    textBody: '',
    tags: ''
  }
  render() {
    return (
        <div>
          <h2>Search for Recipes</h2>
        </div>
  )
  }
}

export default RecipePage;