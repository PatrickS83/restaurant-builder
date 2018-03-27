import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import Specialities from "./Specialities";
import MenuContainer from "./MenuContainer";
import Footer from "./Footer";

class Admin extends Component {
  state = {
    isAdmin: true,
    AboutUs: {
      title: "This is a title",
      message: "This is the messages text. This restaurant is very nice! Please buy more!"
    }
  };

  handleTextChange = (e, compName, compProperty) => {
    const copy = { ...this.state[compName] };
    copy[compProperty] = e.currentTarget.innerHTML;
    console.log(copy);
    this.setState({ [compName]: copy });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LandingPage />
        <AboutUs
          isAdmin={this.state.isAdmin}
          data={{ ...this.state.AboutUs }}
          handleTextChange={this.handleTextChange}
        />
        <Specialities />
        <MenuContainer />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Admin;
