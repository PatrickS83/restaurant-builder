import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import Specialities from "./Specialities";
import MenuContainer from "./MenuContainer";


class Admin extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LandingPage />
        <AboutUs />
        <Specialities />
        <MenuContainer />
      </React.Fragment>
    );
  }
}

export default Admin;