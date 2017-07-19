// @flow

import React from 'react'

class Navbar extends React.Component {

  scroll = (e) => {
    // code
  }

  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top" role="navigation" id="myNavbar">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a href="/" className="navbar-brand">My Blog</a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a onClick={this.scroll} href="#header">Home</a></li>
              <li><a onClick={this.scroll} href="#portfolio">Portfolio</a></li>
              <li><a onClick={this.scroll} href="#blog">Blog List</a></li>
              <li><a onClick={this.scroll} href="#publication">Publications</a></li>
              <li><a onClick={this.scroll} href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
