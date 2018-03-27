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
    component: {}
  };

  componentDidMount() {
    // the ref is from firebase. Not react ref
    this.ref = base.syncState(`/component`, {
      context: this,
      state: "component" // which state you want to sync
    });
  }

  handleTextChange = (e, compName, compProperty, optProp = null) => {
    const copy = { ...this.state.component };
    if (!optProp) {
      copy[compName][compProperty] = e.currentTarget.innerHTML;
    } else {
      copy[compName][compProperty][e.currentTarget.id][optProp] = e.currentTarget.innerHTML;
    }
    this.setState({ component: copy });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          isAdmin={this.state.isAdmin}
          data={{ ...this.state.component.Navbar }}
          handleTextChange={this.handleTextChange}
        />
        <LandingPage
          isAdmin={this.state.isAdmin}
          data={{ ...this.state.component.LandingPage }}
          handleTextChange={this.handleTextChange}
        />
        <AboutUs
          isAdmin={this.state.isAdmin}
          data={{ ...this.state.component.AboutUs }}
          handleTextChange={this.handleTextChange}
        />
        <Specialities />
        <MenuContainer
          isAdmin={this.state.isAdmin}
          data={{ ...this.state.component.Menu }}
          handleTextChange={this.handleTextChange}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Admin;
