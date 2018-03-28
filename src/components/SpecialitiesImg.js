import React, { Component } from "react";
import PropTypes from "prop-types";

class SpecialitiesImg extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    imgIsEditable: PropTypes.func
  };

  handleClick = () => {
    this.props.imgIsEditable(this.props.index);
  };

  render() {
    return (
      <div className="col-lg-4 col-sm-6">
        <div className="portfolio-box">
          <img className="img-fluid" src={this.props.src} alt="" />
          <div className="portfolio-box-caption">
            <button className="btn btn-secondary" onClick={this.handleClick}>
              Edit Image
            </button>
            <div className="portfolio-box-caption-content">
              <div className="project-category text-faded">{this.props.title}</div>
              <div className="project-name">{this.props.subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialitiesImg;
