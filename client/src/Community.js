import React, { Component } from 'react';
import Tags from './Tags.js'
class Community extends Component {

  state = {
    title: '',
    textBody: '',
    tags: ''
  }

  goToForm() {
    window.location.href = '/form';
  }


  render() {
    return (
        <div>
        <img src="img/Donatephoto.jpg" className="mypic" />
        <h2>Community Page</h2>
    <p>Here is a paragraph about what this page does</p>
    <div >
        <h3>Recent Posts</h3>
      <input type="button" className="submit-btn" value="New Post" onClick={this.goToForm}/>
        </div>
        <div className="communityChat">
        <div className="communityPost">
        <p className= "postTitle">Wanted: Shovels</p>
    <p className= "postDate">12/03/18</p>
        <p>We have some small group of kids looking for gardening shovels. Maybe around 20?</p>
    <p >*This post has been translated</p>
    <p >12 Comments</p>
    </div>
    <div className="communityPost">
        <p className= "postTitle">Looking for tomatoes</p>
                                          <p className= "postDate">10/23/18</p>
        <p>Hi, we are looking for extra tomatoes for the neighborhood spaghetti feed happening next wednesday. </p>
    <p >2 Comments</p>
    </div>
    <div className="communityPost">
        <p className= "postTitle">Beets!</p>
    <p className= "postDate">10/22/18</p>
        <img src="img/beets.jpg" className="mypic" />
        <p>Check out our new beets that we have pulled!</p>
    <p >0 Comments</p>
    </div>
    </div>
    </div>
    )
  }
}

export default Community;