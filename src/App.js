import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>MyUser</h1>
        </header>
        <main></main>
        <footer>
          <p>Built by <a href="https://lucassilbernagel.com/" target="_blank" rel="noopener noreferrer">Lucas Silbernagel</a></p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
