// @flow

import React from 'react'

import Navbar from './section/navbar'
import Header from './section/header'
import Portfolio from './section/portfolio'
import Blog from './section/blog'
import Publications from './section/publications'
import Contact from './section/contact'
import Footer from './section/footer'
import {WOW} from 'wowjs'

class App extends React.Component {

	constructor(props) {
		super(props)

		this.wow = new WOW();

		this.state = {
			portfolioData: null
		}

		this.state = {
			blogData: null
		}
	}


	componentDidMount() {

		this.wow.init();

		fetch('http://localhost:8000/public/data/portfolioData.json')
			.then(res => res.json())
			.then(res => this.setState({ portfolioData: res }));

	fetch('http://localhost:8000/public/data/blogData.json')
				.then(res => res.json())
				.then(res => this.setState({ blogData: res }));

	}

	componentDidUpdate() {
		this.wow.sync()
	}

	render () {
		return (
			<div>
				<Navbar />,
				<Header />,
				<Portfolio portfolio={this.state.portfolioData} />,
				<Blog blog={this.state.blogData} />,
				<Publications />,
				<Contact />,
				<Footer />
			</div>
		)
	}
}
export default App
