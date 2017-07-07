// @flow

import React from 'react'

import PortfolioItem from './portfolioItem'
import portfolio from './portfolioData'

let Portfolio = () => (
  <div className="portfolio" id="portfolio">
    <div className="container">

      <h2 className="wow fadeInUp">{portfolio.title}</h2>
      <p className="wow fadeInUp" data-wow-delay="0.4s">{portfolio.description}</p>

      <div className="row">
        {portfolio.items.map(item => <PortfolioItem data={item} key={item.title} />)}
      </div>
    </div>
  </div>
)

export default Portfolio
