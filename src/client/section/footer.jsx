// @flow

import React from 'react'

const Footer = () => (
  <div className="footer" id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <h4 className="wow fadeInUp">Contact Us</h4>
          <p><span className="icon-home" /> 111 Main Street, Washington DC, 22222</p>
          <p><span className="icon-envelope" /> info@media.com</p>
          <p><span className="icon-phone" /> +1 222 222 2222</p>
          <p><span className="icon-globe" /> www.media.com</p>
        </div>
        <div className="col-lg-4 col-md-4">
          <img src="https://s3.amazonaws.com/clarityfm-production/attachments/1916/default/logo_blog.png?1406761370" alt="" className="about" />
        </div>

        <div className="col-lg-4 col-md-4">
          <h4>Stay in touch</h4>
          <span className="social icon-twitter-square" />
          <span className="social icon-facebook-square" />
          <span className="social icon-linkedin-square" />
          <span className="social icon-pinterest-square" />
          <span className="social icon-youtube-square" />
          <span className="social icon-git-square" />
          <input type="email" placeholder="Subscribe For Updates" />
          <button type="button" className="btn btn-success" name="button">Subscribe </button>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
