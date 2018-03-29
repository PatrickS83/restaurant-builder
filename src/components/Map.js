import React, { Component } from "react";

class Map extends Component {
  state = {};

  render() {
    return (
      <section className="menu-container container">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Address
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Latitude
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Longitude
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <button className="btn btn-primary">Save Address</button>
        </div>
      </section>
    );
  }
}

export default Map;
