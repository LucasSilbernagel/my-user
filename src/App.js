import React from "react";
import Modal from "./Components/Modal";
import "./App.scss";

import Persona from "./Components/Persona"
import firebase from "firebase"
class App extends React.Component {
  state = {
    show: false
  };
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
            <p>User personas are semi-fictional characters that represent your customers or product users, ideally based on real research and data. Create a user persona for one or more of your users, and look at other examples that have been created below! This will help you to think about the unique needs of your users and build or improve products to meet those needs.</p>
            <button
              className="toggle-button"
              onClick={e => {
                this.showModal(e);
              }}
            >
              Create User Persona
            </button>


            {/* <form action="#" onSubmit={this.handleSubmit}>
              <input type="text" id="name" value={this.state.userInput} onChange={this.handleUserInput}/>
              <button type="submit">Save</button>
            </form> */}


            <ul>
              {/* Saved user personas go here */}
              {this.state.personas.map((persona) => {
              return (
                <Persona key={persona.personaId} personaId={persona.personaId} personaTitle={persona.persona} />
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
