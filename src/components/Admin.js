import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import Specialities from "./Specialities";
import MenuContainer from "./MenuContainer";
import Footer from "./Footer";
import base from "../base";

class Admin extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  state = {
    isAdmin: false,
    component: {}
  };

  componentDidMount() {
    if (this.props.history.location.pathname === "/admin") {
      this.setState({ isAdmin: true });
    } else {
      this.setState({ isAdmin: false });
    }

    // the ref is from firebase. Not react ref
    this.ref = base.syncState(`/component`, {
      context: this,
      state: "component" // which state you want to sync
    });
  }

  handleTextChange = (e, compName, compProperty, optProp = null) => {
    const componentCopy = { ...this.state.component };
    const element = e.currentTarget;
    if (!optProp) {
      componentCopy[compName][compProperty] = element.innerHTML;
    } else {
      componentCopy[compName][compProperty][element.dataset.index][optProp] = element.innerHTML;
    }
    this.setState({ component: componentCopy });
  };

  addMenuItem = (menuItem, activeMenu) => {
    const componentCopy = { ...this.state.component };
    let menuArray = componentCopy.Menu[activeMenu];
    //firebase erases the property if menuArray.length === 0, so we set a new array for this case
    menuArray ? menuArray.push(menuItem) : (menuArray = []);
    this.setState({ component: componentCopy });
  };

  removeMenuItem = (activeMenu, index) => {
    const componentCopy = { ...this.state.component };
    componentCopy.Menu[activeMenu].splice(index, 1);
    this.setState({ component: componentCopy });
  };

  moveMenuItem = (activeMenu, index, direction) => {
    const componentCopy = { ...this.state.component };
    const menuArray = componentCopy.Menu[activeMenu];

    // checking if item can't be moved any further
    const stopFirstItem = index === 0 && direction === "moveLeft";
    const stopLastItem = index === menuArray.length - 1 && direction === "moveRight";
    if (stopFirstItem || stopLastItem) return;

    // move item in specified direction after previous check is passed
    const removedItem = menuArray.splice(index, 1);
    if (direction === "moveLeft") {
      menuArray.splice(index - 1, 0, ...removedItem);
    } else if (direction === "moveRight") {
      menuArray.splice(index + 1, 0, ...removedItem);
    }

    this.setState({ component: componentCopy });
  };

  render() {
    return this.state.component.LandingPage ? (
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
        <Specialities isAdmin={this.state.isAdmin} />
        <MenuContainer
          isAdmin={this.state.isAdmin}
          data={{ ...this.state.component.Menu, ...this.state.component.MenuHeader }}
          handleTextChange={this.handleTextChange}
          addMenuItem={this.addMenuItem}
          removeMenuItem={this.removeMenuItem}
          moveMenuItem={this.moveMenuItem}
        />
        <Footer />
      </React.Fragment>
    ) : null;
  }
}

export default Admin;
