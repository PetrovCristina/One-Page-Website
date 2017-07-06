// @flow

import React from 'react'

const Portfolio = () => (
  <div className="portfolio" id="portfolio">
    <div className="container">
      <h2 className="wow fadeInUp">Portfolio</h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s">What am I doing? What do I write?</p>
      <div className="row">
        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.8s">
          <span className="icon-lightbulb-o"></span>        <h4>Advices</h4>
          <p>I believe that the right conversation can completely change your life. I believe that
             getting clear on what we don’t want helps us open our lives up to joy. And I believe
             that we cannot do it all alone: that someone else’s vision can help us grasp our full
              potential.</p>
        </div>
        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.4s">
          <span className="icon-shopping-bag"></span>
          <h4>Style</h4>
          <p>Every vacation is an opportunity to get dressed up… If you ask me. Fabulous is a
            full time job. And Tulum is no exception. Don’t be misled by the thought that it’s a
            small hippie town! It is still the destination of the world’s most fabulous people.
            Bring your A game, baby!</p>
        </div>
        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="0.8s">
          <span className="icon-snowflake-o"></span>
          <h4>Beauty</h4>
          <p>The only way you will become the person you want to be
  is by walking through the door that scares you most.</p>
        </div>
        <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="0.4s">
          <span className="icon-plane"></span>
          <h4>Travel</h4>
          <p>If you want to be a rainbow, learn how to express self-love in every aspect of your
            life, and have the trip of a lifetime!</p>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
