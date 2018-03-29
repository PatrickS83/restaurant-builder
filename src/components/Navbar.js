import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

class Navbar extends Component {
  static propTypes = {
    data: PropTypes.shape({
      logoText: PropTypes.string,
      link1: PropTypes.string,
      link2: PropTypes.string,
      link3: PropTypes.string,
      link4: PropTypes.string
    }),
    isAdmin: PropTypes.bool,
    handleTextChange: PropTypes.func
  };

  state = {
    loggingIn: false
  };

  mockLogin = () => {
    this.setState({ loggingIn: true });
    // mock authorization wait
    setTimeout(() => {
      //this.setState({ loggingIn: false });
      this.props.isAdmin ? window.location.replace("/") : window.location.replace("/admin");
    }, 1000);
  };

  render() {
    const mockLoginButton = !this.state.loggingIn ? (
      <button className={"nav-item btn btn-primary ml-5"} onClick={this.mockLogin}>
        {this.props.isAdmin ? "Log off as Admin" : "Log in as Admin"}
      </button>
    ) : (
      <li className={"nav-link ml-5 text-primary"}>
        <i className="fas fa-spinner" />{" "}
        <span>{this.props.isAdmin ? "Logging off ..." : "Logging in ..."}</span>
      </li>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <ContentEditable
            className="navbar-brand js-scroll-trigger"
            href="#page-top"
            html={this.props.data.logoText}
            disabled={!this.props.isAdmin}
            onChange={e => this.props.handleTextChange(e, "Navbar", "logoText")}
            tagName={"a"}
          />
          {/* {!this.props.isAdmin ? mockLoginButton : null} */}
          {mockLoginButton}
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <ContentEditable
                  className="nav-link js-scroll-trigger"
                  href="#about"
                  html={this.props.data.link1}
                  disabled={!this.props.isAdmin}
                  onChange={e => this.props.handleTextChange(e, "Navbar", "link1")}
                  tagName={"a"}
                />
              </li>
              <li className="nav-item">
                <ContentEditable
                  className="nav-link js-scroll-trigger"
                  href="#services"
                  html={this.props.data.link2}
                  disabled={!this.props.isAdmin}
                  onChange={e => this.props.handleTextChange(e, "Navbar", "link2")}
                  tagName={"a"}
                />
              </li>
              <li className="nav-item">
                <ContentEditable
                  className="nav-link js-scroll-trigger"
                  href="#menu"
                  html={this.props.data.link3}
                  disabled={!this.props.isAdmin}
                  onChange={e => this.props.handleTextChange(e, "Navbar", "link3")}
                  tagName={"a"}
                />
              </li>
              <li className="nav-item">
                <ContentEditable
                  className="nav-link js-scroll-trigger"
                  href="#contact"
                  html={this.props.data.link4}
                  disabled={!this.props.isAdmin}
                  onChange={e => this.props.handleTextChange(e, "Navbar", "link4")}
                  tagName={"a"}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
