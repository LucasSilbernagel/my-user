import React from "react";
import Header from "./Components/Header"
import Main from "./Components/Main"
import "./App.scss";
import Footer from "./Components/Footer"
class App extends React.Component {

  render() {

    return (
      <React.Fragment>

        {/* Header */}
        <Header />

        {/* Main section */}
        <Main />

        {/* Footer */}
        <Footer />

      </React.Fragment>
    );
  }
}

export default App;