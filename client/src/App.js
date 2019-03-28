import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes'

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

	return (
		<Router>
			<div className="content">
				<Header />
				<Routes posts={posts} />
			</div>
			<Footer />
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById(`app`))
