// @flow

import React from 'react'

const Navbar = () => (
  <div className="navbar navbar-default navbar-fixed-top" role="navigation" id="myNavbar">
    <div className="container">
      <div className="navbar-header">
        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <a href="#" className="navbar-brand">My Blog</a>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#header">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog List</a></li>
          <li><a href="#publication">Publications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default Navbar
