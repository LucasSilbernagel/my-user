import React from "react";
import firebase from "firebase"

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      personas: [],
      userInput: ""
    }
  }

  // On form submit
  handleSubmit = (event) => {
    // Prevent page from reloading
    event.preventDefault()
    // push user input value to firebase
    const dbRef = firebase.database().ref()
      dbRef.push(this.state.userInput)
      this.setState({
        userInput: ""
      })
    // Reload page
    window.location.reload();
  }

  handleUserInput = (event) => {
    // Take event.target.value (what the user is typing)
    // Put it into this.state.userInput
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          {/* The form that renders inside the modal */}
          <form action="#" onSubmit={this.handleSubmit}>
            <fieldset>
              <label htmlFor="name">Name</label>
              <input type="text" autoFocus name="name" id="name" value={this.state.userInput} onChange={this.handleUserInput} placeholder="Alex Smith" required />
              {/* <label htmlFor="age">Age</label>
              <select name="age" id="age" required>
                <option value="0 to 8">0 to 8</option>
                <option value="9 to 12">9 to 12</option>
                <option value="13 to 19">13 to 19</option>
                <option value="20 to 35">20 to 35</option>
                <option value="36 to 55">36 to 55</option>
                <option value="56 and older">56 and older</option>
              </select>
              <label htmlFor="region">Region</label>
              <input type="text" name="region" id="region" placeholder="Ontario" required />
              <label htmlFor="occupation">Occupation</label>
              <input type="text" name="occupation" id="occupation" placeholder="Student" required />
              <label htmlFor="education">Education</label>
              <select name="education" id="education" required>
                <option value="below-high-school">Less than high school</option>
                <option value="high-school">High school</option>
                <option value="college">College or vocational school</option>
                <option value="university">University degree</option>
                <option value="masters">Master's degree or other graduate school degree</option>
                <option value="doctorate">PhD, M.D., or other doctoral degree</option>
              </select>
              <label htmlFor="tech">Comfort level with modern technology (internet, computers, mobile devices, etc.</label>
              <select name="tech" id="tech" required>
                <option value="none">Not at all comfortable</option>
                <option value="little">A little bit comfortable</option>
                <option value="somewhat">Somewhat comfortable</option>
                <option value="very">Very comfortable</option>
              </select>
              <label htmlFor="wants">Wants</label>
              <input type="text" name="wants" id="wants" placeholder="To learn how to code" />
              <label htmlFor="problems">Problems</label>
              <input type="text" name="problems" id="problems" placeholder="Has trouble finding resources on how to code" /> */}
              <button type="submit" name="submit">Save</button>
            </fieldset>
          </form>
        </div>
      </React.Fragment>
    );
  }
}