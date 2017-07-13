// @flow

import React from 'react'

const Publications = () => (
  <div className="publication" id="publication">
    <div className="container">
      <div className="row">

        <h2 className="wow fadeInUp">My publications</h2>
        <p className="wow fadeInUp" data-wow-delay="0.4s">My works have been published in some of these magazines. Enjoy them! I&apos;m open for new collaborations!</p>

        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="2s">
          <li><img src="/public/images/clients/client1.png" alt="" /></li>
        </div>
        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.6s">
          <li><img src="/public/images/clients/client2.png" alt="" /></li>
        </div>
        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.2s">
          <li><img src="/public/images/clients/client3.png" alt="" /></li>
        </div>
        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="0.8s">
          <li><img src="/public/images/clients/client4.png" alt="" /></li>
        </div>

      </div>
    </div>
  </div>
)

export default Publications
