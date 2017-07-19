// @flow

import React from 'react'

class Navbar extends React.Component {

  /*scroll = (e) => {
    if (
     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
     &&
     location.hostname == this.hostname
   ) {
     // Figure out element to scroll to
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     // Does a scroll target exist?
     if (target.length) {
       // Only prevent default if animation is actually gonna happen
       event.preventDefault();
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000, function() {
         // Callback after animation
         // Must change focus!
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) { // Checking if the target was focused
           return false;
         } else {
           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
           $target.focus(); // Set focus again
         };
       });
     }
   }
  }
*/
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
