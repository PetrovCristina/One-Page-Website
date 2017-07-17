// @flow

import React from 'react'

const headerText = 'Hello! My name is Gala Darling, and I’m a New Zealander living in New York City. I moved here in 2008 with one suitcase, and I’ve never looked back. Writing, dancing, travelling, and daydreaming keeps me going.  My apartment is full of sequins and rainbows. I’m really into eccentric icons (like Liberace), false eyelashes, and dressing up at every opportunity. I believe that playing with our appearance is one of the myriad ways we can transform ourselves into the people we want to be. I believe that we have the ability to define everything on our own terms, and that we should rigorously question what society tell us is normal or desirable.'

const Header = () => (
  <div id="header" className="header">
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-6 wow bounceInLeft">
          <h1>Who am I?</h1>
          <p>{headerText}</p>
          <a href="#contact"><button className="btn btn-lg btn-primary">Contact</button></a>
        </div>
        <div className="col-xs-6 col-md-6 wow bounceInRight ">
          <img src="public/images/allow.jpg" alt="" className="img-circle img-responsive" />
        </div>
      </div>
    </div>
  </div>
)

export default Header
