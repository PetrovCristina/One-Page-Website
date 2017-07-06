// @flow

import React from 'react'

const Contact = () => (
  <div className="contact" id="contact">

    <div className="container">

      <div className="row">
        <h2 className="wow fadeInUp">Contact</h2>
        <p className="wow fadeInUp" data-wow-delay="0.4s">You can contact me right now!</p>

        <div className="col-lg-6 col-md-6">

          <div className="input-group input-group-lg wow fadeInUp" data-wow-delay="0.8s">
            <span className="input-group-addon" id="sizing-addon1">
              <span className="icon-user"></span>
            </span>
            <input className="form-control" type="text" aria-describedby="sizing-addon1" placeholder="Full Name" />
          </div>

          <div className="input-group input-group-lg wow fadeInUp" data-wow-delay="1.2s">
            <span className="input-group-addon" id="sizing-addon1">
              <span className="icon-envelope"></span>
            </span>
            <input className="form-control" type="text" aria-describedby="sizing-addon1" placeholder="Email Address" />
          </div>

          <div className="input-group input-group-lg wow fadeInUp" data-wow-delay="1.6s">
            <span className="input-group-addon" id="sizing-addon1">
              <span className="icon-phone"></span>
            </span>
            <input className="form-control" type="text" aria-describedby="sizing-addon1" placeholder="Phone Number" />
          </div>

        </div>

        <div className="col-lg-6 col-md-6">

            <div className="input-group wow fadeInUp" data-wow-delay="2s">
              <textarea className="form-control" rows="6" cols="80" id="" name="">
              </textarea>
            </div>

            <button className="btn btn-lg-wow fadeInUp" data-wow-delay="2.4s">Submit Your Message</button>

        </div>

      </div>

    </div>

  </div>
)

export default Contact
