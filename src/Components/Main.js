import React from "react";
import Modal from "./Modal";
import Persona from "./Persona"
import firebase from "firebase"

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      open: false,
      personas: [],
      userInput: ""
    }
  }

  // Function to open/close modal
  toggleModal = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  componentDidMount() {

    // grab the list of personas from database
    // set up listener to firebase database
    const dbRef = firebase.database().ref();

    // Put new data into the data variable
    dbRef.on('value', (result) => {
      const data = result.val();
      // Turn data from an object into an array
      const personasArray = []
      for (let key in data) {
        personasArray.push({persona: data[key], personaId: key})
      }
      // Set the state of personas
      this.setState({
        personas: personasArray
      })
    })
  }

  render() {

    // Modal constants
    const { open } = this.state;
    const { toggleModal } = this;

    return (
      <main>
          <div className="wrapper">
            <p>User personas are semi-fictional characters that represent your customers or product users, ideally based on real research and data. Create a user persona for one or more of your users, or look at others that have been created below! This will help you to think about the unique needs of your users and build or improve products to meet those needs.</p>
            
            {/* Button to show modal */}
            <button
              className="landing-button"
              onClick={toggleModal}
            >
              Create User Persona
            </button>
            {open && <Modal toggleModal={toggleModal} />}

            <ul>
              {/* Saved user personas go here */}
              {/* Map over the personas array and add the new persona */}
              {this.state.personas.map((savedPersona) => {
              return (
                <Persona key={savedPersona.personaId} personaId={savedPersona.personaId} user={savedPersona.persona} />
              )
              })}
            </ul>

            {/* Button to print or download */}
            <button className="landing-button" onClick={window.print}>Print or Download</button>

          </div>
        </main>
    )
  }
}

export default Main;