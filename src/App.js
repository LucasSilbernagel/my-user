import React from "react";
import Modal from "./Components/Modal";
import "./App.scss";

import Persona from "./Components/Persona"
import firebase from "firebase"
class App extends React.Component {
  state = {
    show: false
  };

  // Show or hide modal on click
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  constructor() {
    super()
    this.state = {
      personas: [],
      userInput: ""
    }
  }

  // grab the list of personas from database
  componentDidMount() {
    // set up listener to firebase database
    const dbRef = firebase.database().ref();
    // inside .ref() could put specific database key

    // Put new data into the data variable
    dbRef.on('value', (result) => {
      const data = result.val();
      // Turn data from an object into an array
      const personasArray = []
      for (let key in data) {
        personasArray.push({persona: data[key], personaId: key})
      }
      this.setState({
        personas: personasArray
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        < Modal onClose={this.showModal} show={this.state.show} />
        <header>
          <div className="wrapper">
            <h1>MyUser</h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <p>User personas are semi-fictional characters that represent your customers or product users, ideally based on real research and data. Create a user persona for one or more of your users, and look at others that have been created below! This will help you to think about the unique needs of your users and build or improve products to meet those needs.</p>
            
            {/* Button to show modal */}
            <button
              onClick={e => {
                this.showModal(e);
              }}
            >
              Create User Persona
            </button>

            <ul>
              {/* Saved user personas go here */}
              {/* Map over the personas array and add the new persona */}
              {this.state.personas.map((savedPersona) => {
              return (
                <Persona key={savedPersona.personaId} personaId={savedPersona.personaId} user={savedPersona.persona} />
              )
              })}
            </ul>
          </div>
        </main>
        <footer>
          <div className="wrapper">
            <p>Built by <a href="https://lucassilbernagel.com/" target="_blank" rel="noopener noreferrer">Lucas Silbernagel</a></p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
