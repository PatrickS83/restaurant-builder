import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="">
          <img src="" width="30" height="30" className="d-inline-block align-top" alt="" />
          Restaurant
        </a>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Link</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;