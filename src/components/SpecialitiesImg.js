import React, { Component } from "react";
import PropTypes from "prop-types";

class SpecialitiesImg extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="col-lg-4 col-sm-6">
        <a className="portfolio-box" href="">
          <img className="img-fluid" src={this.props.src} alt="" />
          <div className="portfolio-box-caption">
            <div className="portfolio-box-caption-content">
              <div className="project-category text-faded">{this.props.title}</div>
              <div className="project-name">{this.props.subtitle}</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default SpecialitiesImg;
