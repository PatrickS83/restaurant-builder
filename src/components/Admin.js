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
    console.log(componentCopy.Menu);

    this.setState({ component: componentCopy });
  };

  moveMenuItem = (activeMenu, index, direction) => {
    const componentCopy = { ...this.state.component };
    const menuArray = componentCopy.Menu[activeMenu];

    if (direction === "moveLeft") {
      if (index === 0) return;
      const removedItem = menuArray.splice(index, 1);
      menuArray.splice(index - 1, 0, ...removedItem);
    } else if (direction === "moveRight") {
      if (index === menuArray.length - 1) return;
      const removedItem = menuArray.splice(index, 1);
      menuArray.splice(index + 1, 0, ...removedItem);
    }

    this.setState({ component: componentCopy });
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
          data={{ ...this.state.component.Menu, ...this.state.component.MenuHeader }}
          handleTextChange={this.handleTextChange}
          addMenuItem={this.addMenuItem}
          removeMenuItem={this.removeMenuItem}
          moveMenuItem={this.moveMenuItem}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Admin;
