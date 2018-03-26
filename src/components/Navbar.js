import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="">
          <img src="" width="30" height="30" className="d-inline-block align-top" alt="" />
          Restaurant
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Link</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;