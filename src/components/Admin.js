import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import Specialities from "./Specialities";
import MenuContainer from "./MenuContainer";
import Footer from "./Footer";
import base from "../base";

class Admin extends Component {
  state = {
    isAdmin: true,
    content: {}
  };

  componentDidMount() {
    // the ref is from firebase. Not react ref
    this.ref = base.syncState(`/content`, {
      context: this,
      state: "content" // which state you want to sync
    });
  }

  handleTextChange = (e, compName, compProperty) => {
    const copy = { ...this.state.content };

    copy[compName][compProperty] = e.currentTarget.innerHTML;
    this.setState({ content: copy });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LandingPage
          isAdmin={this.state.isAdmin}
          data={{ ...this.state.content.LandingPage }}
          handleTextChange={this.handleTextChange}
        />
        <AboutUs
          isAdmin={this.state.isAdmin}
          data={{ ...this.state.content.AboutUs }}
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
