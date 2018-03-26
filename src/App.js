import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Specialities from "./components/Specialities";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LandingPage />
        <AboutUs />
        <Specialities />
      </React.Fragment>
    );
  }
}

export default App;
