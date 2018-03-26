import React, { Component } from 'react';

class SpecialitiesImg extends Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-6">
        <a className="portfolio-box" href="">
          <img className="img-fluid" src={this.props.src} alt="" />
          <div className="portfolio-box-caption">
            <div className="portfolio-box-caption-content">
              <div className="project-category text-faded">
                {this.props.title}
              </div>
              <div className="project-name">
                {this.props.subtitle}
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default SpecialitiesImg;