import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form>
          <p>
            <fieldset>
              <legend>Title<abbr title="This field is mandatory">*</abbr></legend>
              <input type="radio" required name="title" id="r1" value="Mr"/><label for="r1">Mr.</label>
              <input type="radio" required name="title" id="r2" value="Ms"/><label for="r2">Ms.</label>
            </fieldset>
          </p>
          <p>
            <label for="n1">How old are you?</label>
            <input type="number" min="12" max="120" step="1" id="n1" name="age" pattern="\d+"/>
          </p>
          <p>
            <label for="t1">What's your favorite fruit?<abbr title="This field is mandatory">*</abbr></label>
            <input type="text" id="t1" name="fruit" list="l1" required
                  pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range"/>
            <datalist id="l1">
              <option>Banana</option>
              <option>Cherry</option>
              <option>Apple</option>
              <option>Strawberry</option>
              <option>Lemon</option>
              <option>Orange</option>
            </datalist>
          </p>
          <p>
            <label for="t2">What's your e-mail?</label>
            <input type="email" id="t2" name="email"/>>
          </p>
          <p>
            <label for="t3">Leave a short message</label>
            <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
          </p>
          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;

/*
<form>
          <p>
            <fieldset>
              <legend>Title<abbr title="This field is mandatory">*</abbr></legend>
              <input type="radio" required name="title" id="r1" value="Mr"><label for="r1">Mr.</label>
              <input type="radio" required name="title" id="r2" value="Ms"><label for="r2">Ms.</label>
            </fieldset>
          </p>
          <p>
            <label for="n1">How old are you?</label>

            <input type="number" min="12" max="120" step="1" id="n1" name="age"
                  pattern="\d+">
          </p>
          <p>
            <label for="t1">What's your favorite fruit?<abbr title="This field is mandatory">*</abbr></label>
            <input type="text" id="t1" name="fruit" list="l1" required
                  pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range">
            <datalist id="l1">
              <option>Banana</option>
              <option>Cherry</option>
              <option>Apple</option>
              <option>Strawberry</option>
              <option>Lemon</option>
              <option>Orange</option>
            </datalist>
          </p>
          <p>
            <label for="t2">What's your e-mail?</label>
            <input type="email" id="t2" name="email">
          </p>
          <p>
            <label for="t3">Leave a short message</label>
            <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
          </p>
          <p>
            <button>Submit</button>
          </p>
</form>
*/