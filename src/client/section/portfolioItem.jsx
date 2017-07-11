import React from 'react'

const PortfolioItem = ({data: {icon, title, description}}) => (
  <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.5s">
    <span className="icon">
      <span className={icon}></span>
    </span>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
)

export default PortfolioItem
