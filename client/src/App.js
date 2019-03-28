import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Posts from './components/Posts'
import About from './components/About'
import Footer from './components/Footer'

import './sass/app.sass'

function App() {
	const [posts, setPosts] = useState([])

	const getPosts = async () => {
		const url = `https://jsonplaceholder.typicode.com/posts`

		const result = await fetch(url)
		const data = await result.json()

		const timestamp = new Date().toDateString()
		const postLimit = 10

		const fetchedPosts = data.slice(0, postLimit).map(({ id, title, body }) => {
			return {
				id,
				title,
				body,
				timestamp,
			}
		})

		setPosts(fetchedPosts)
	}

	useEffect(() => {
		getPosts()
	}, [])

	const routes = [
		{
			path: `/`,
			component: Home,
		},
		{
			path: `/posts`,
			component: Posts,
		},
		{
			path: `/about`,
			component: About,
		},
	]

	return (
		<Router>
			<div className="content">
				<Header />
				{routes.map(({ path, component: Component }) => (
					<Route
						key={path}
						path={path}
						render={() => <Component posts={posts} />}
						exact
					/>
				))}
			</div>
			<Footer />
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById(`app`))
