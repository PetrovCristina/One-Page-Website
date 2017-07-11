// @flow

import React from 'react'

import BlogItem from './blogItem'

let Blog = ({blog}) => (
  blog && <div className="blog" id="blog">
    <div className="container">

     <h4>{blog.title}</h4>
      <p>{blog.description}</p>

      <div className="row">
        {blog.items.map(item => <BlogItem data={item} key={item.title} />)}
      </div>
    </div>
  </div>
)

export default Blog
