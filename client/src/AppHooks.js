import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home.js'
import Posts from './components/Posts'
import About from './components/About'
import Footer from './components/Footer'

import './sass/app.sass'

function App() {
	const [ getPosts, posts ] = useState({
		posts: [],
		time: new Date().toDateString(),
		limit: 10
	})

	useEffect(() => {
		// code here
		fetchPosts()
	})

	const fetchPosts = async () => {
		const { limit, time } = getPosts

		console.log('lol')
		
		const result = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await result.json()
	
		let oldPosts = data.slice(0, limit)
	
		const posts = oldPosts.map(({id, title, body}) => {
			return {
				id,
				title,
				body,
				time
			}
		})
	}

	const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/posts',
			component: Posts,
			posts
		},
		{
			path: '/about',
			component: About
		},
	]

	return (
		<Router>
				<div className="content">
				<Header />
					{/* {
						routes.map(({path, component: Component, posts, time}) => (
							<Route
								key={path}
								path={path}
								render={() => <Component posts={posts} />}
								exact
							/>
						))
					} */}
				</div>
			<Footer />
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))