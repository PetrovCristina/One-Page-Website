import React from 'react'

const BlogItem = ({data: {img, title, description}}) => (
  <div className="col-lg-3 col-md-3 wow fadeInLeft" data-wow-delay="1.5s">
    <img src={img} alt="" className="img-square" />
      <h4 className="wow fadeInUp">{title}</h4>
  <p className="wow fadeInUp" data-wow-delay="0.4s">>{description}</p>
  </div>
)
export default BlogItem
