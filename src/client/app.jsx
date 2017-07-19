// @flow

import React from 'react'
import { WOW } from 'wowjs'

import Navbar from './section/navbar'
import Header from './section/header'
import Portfolio from './section/portfolio'
import Blog from './section/blog'
import Publications from './section/publications'
import Contact from './section/contact'
import Footer from './section/footer'

class App extends React.Component {
  state: Object
  wow: Object

  constructor(props: Object) {
    super(props)
    this.state = {
      portfolioData: null,
      blogData: null,
    }
    this.wow = new WOW()
  }

  componentDidMount() {
    this.wow.init()

    fetch('public/data/portfolioData.json')
      .then(res => res.json())
      .then(res => this.setState({ portfolioData: res }))

    fetch('public/data/blogData.json')
      .then(res => res.json())
      .then(res => this.setState({ blogData: res }))
  }

  componentDidUpdate() {
    this.wow.sync()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Portfolio portfolio={this.state.portfolioData} />
        <Blog blog={this.state.blogData} />
        <Publications />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
