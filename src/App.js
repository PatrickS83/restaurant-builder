import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LandingPage />
      </React.Fragment>
    );
  }
}

export default App;
