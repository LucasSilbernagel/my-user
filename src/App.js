import React from "react";
import Modal from "./Components/Modal";
import "./App.scss";
class App extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <React.Fragment>
        <Modal onClose={this.showModal} show={this.state.show} />
        <header>
          <div className="wrapper">
            <h1>MyUser</h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <p>User personas are semi-fictional characters that represent your customers or product users, ideally based on real research and data. Create a user persona for one or more of your users, and look at other examples that have been created below! This will help you to think about the unique needs of your users and build or improve products to meet those needs.</p>
            <button
              class="toggle-button"
              onClick={e => {
                this.showModal(e);
              }}
            >
              Create User Persona
            </button>
            <ul>
              {/* Saved user personas go here */}
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
