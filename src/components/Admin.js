import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import Specialities from "./Specialities";
import MenuContainer from "./MenuContainer";
import Footer from "./Footer";

class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LandingPage />
        <AboutUs />
        <Specialities />
        <MenuContainer />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Admin;
