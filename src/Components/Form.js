import React from "react";
import firebase from "firebase"

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  // On form submit
  handleSubmit = (event) => {
    // Prevent page from reloading
    event.preventDefault()
    // push user input value to firebase
    const dbRef = firebase.database().ref()
      dbRef.push(this.state)
      this.setState({
        name: this.state.name,
        age: this.state.age,
        region: this.state.region,
        occupation: this.state.occupation,
        education: this.state.education,
        tech: this.state.tech,
        wants: this.state.wants,
        problems: this.state.problems,
        other: this.state.other
      })
    // Reload page
    window.location.reload();
  }

  handleUserInput = (event) => {
    // Take event.target.value (what the user inputs)
    // Put it into this.state
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          {/* The form that renders inside the modal */}
          <form action="#" onSubmit={this.handleSubmit}>
            <fieldset>
              <label htmlFor="name">Name:</label>
              <input type="text" autoFocus name="name" id="name" value={this.state.name} onChange={this.handleUserInput} placeholder="Alex Smith" required />
              <label htmlFor="age">Age:</label>
              <select name="age" id="age" required value={this.state.age} onChange={this.handleUserInput}>
                <option value="">Please choose an option</option>
                <option value="0 to 8">0 to 8</option>
                <option value="9 to 12">9 to 12</option>
                <option value="13 to 19">13 to 19</option>
                <option value="20 to 35">20 to 35</option>
                <option value="36 to 55">36 to 55</option>
                <option value="56 and older">56 and older</option>
              </select>
              <label htmlFor="region">Region:</label>
              <input type="text" name="region" id="region" placeholder="Ontario" required value={this.state.region} onChange={this.handleUserInput} />
              <label htmlFor="occupation">Occupation:</label>
              <input type="text" name="occupation" id="occupation" placeholder="Student" required value={this.state.occupation} onChange={this.handleUserInput} />
              <label htmlFor="education">Education:</label>
              <select name="education" id="education" required value={this.state.education} onChange={this.handleUserInput}>
                <option value="">Please choose an option</option>
                <option value="Less than high school">Less than high school</option>
                <option value="High school">High school</option>
                <option value="College or vocational school">College or vocational school</option>
                <option value="University degree">University degree</option>
                <option value="Master's degree or other graduate school degree">Master's degree or other graduate school degree</option>
                <option value="PhD, M.D., or other doctoral degree">PhD, M.D., or other doctoral degree</option>
              </select>
              <label htmlFor="tech">Comfort level with modern technology (internet, computers, mobile devices, etc.):</label>
              <select name="tech" id="tech" required value={this.state.tech} onChange={this.handleUserInput}>
                <option value="">Please choose an option</option>
                <option value="Not at all comfortable">Not at all comfortable</option>
                <option value="A little bit comfortable">A little bit comfortable</option>
                <option value="Somewhat comfortable">Somewhat comfortable</option>
                <option value="Very comfortable">Very comfortable</option>
              </select>
              <label htmlFor="wants">Wants:</label>
              <textarea name="wants" id="wants" placeholder="To learn how to code" value={this.state.wants} onChange={this.handleUserInput} />
              <label htmlFor="problems">Problems:</label>
              <textarea name="problems" id="problems" placeholder="Has trouble finding resources on how to code" value={this.state.problems} onChange={this.handleUserInput} />
              <label htmlFor="other">Other information:</label>
              <textarea name="other" id="other" placeholder="Social networks, preferred method of communication, favourite colour, etc." value={this.state.other} onChange={this.handleUserInput} />
              <button type="submit" name="submit">Save</button>
            </fieldset>
          </form>
        </div>
      </React.Fragment>
    );
  }
}