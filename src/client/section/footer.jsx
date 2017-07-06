// @flow

import React from 'react'

const Footer = () => (
  <div className="footer" id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <h4 className="wow fadeInUp">Contact Us</h4>
          <p><span className="icon-home"></span>111 Main Street, Washington DC, 22222</p>
          <p><span className="icon-envelope"></span>info@media.com</p>
          <p><span className="icon-phone"></span>+1 222 222 2222</p>
          <p><span className="icon-globe"></span>www.media.com</p>
        </div>
        <div className="col-lg-4 col-md-4">
  		<img src="https://s3.amazonaws.com/clarityfm-production/attachments/1916/default/logo_blog.png?1406761370" alt="" className="about" />
        </div>



        <div className="col-lg-4 col-md-4">
          <h4>Stay in touch</h4>
          <i className="social fa fa-facebook" aria-hidden="true"></i>
          <i className="social fa fa-twitter" aria-hidden="true"></i>
          <i className="social fa fa-linkedin" aria-hidden="true"></i>
          <i className="social fa fa-pinterest" aria-hidden="true"></i>
          <i className="social fa fa-youtube" aria-hidden="true"></i>
          <i className="social fa fa-github" aria-hidden="true"></i>
          <input type="email" placeholder="Subscribe For Updates" />
          <button type="button" className="btn btn-success" name="button">Subscribe </button>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
