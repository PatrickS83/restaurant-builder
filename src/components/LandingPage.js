import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

class LandingPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      message: PropTypes.string,
      button: PropTypes.string
    }),
    isAdmin: PropTypes.bool,
    handleTextChange: PropTypes.func
  };

  render() {
    const backgroundTheme = {
      backgroundImage: `url("../img/hero-2.jpg")`
    };
    return (
      <header className="masthead text-center text-white d-flex" style={backgroundTheme}>
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {this.props.isAdmin ? (
                <div className="alert alert-success align-self-start mb-5" role="alert">
                  Login successfull! You can now edit this webpage. Try it out!
                </div>
              ) : null}
              <ContentEditable
                className="text-uppercase"
                html={this.props.data.title} // innerHTML of the editable div
                disabled={!this.props.isAdmin} // use true to disable edition
                onChange={e => this.props.handleTextChange(e, "LandingPage", "title")} // handle innerHTML change
                tagName={"h1"}
              />
              <hr />
            </div>
            <div className="col-lg-8 mx-auto">
              <ContentEditable
                className="text-faded mb-5"
                html={this.props.data.message} // innerHTML of the editable div
                disabled={!this.props.isAdmin} // use true to disable edition
                onChange={e => this.props.handleTextChange(e, "LandingPage", "message")} // handle innerHTML change
                tagName={"p"}
              />

              <ContentEditable
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
                html={this.props.data.button} // innerHTML of the editable div
                disabled={!this.props.isAdmin} // use true to disable edition
                onChange={e => this.props.handleTextChange(e, "LandingPage", "button")} // handle innerHTML change
                tagName={"a"}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default LandingPage;
