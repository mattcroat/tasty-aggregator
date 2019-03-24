// NPM imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Home from './components/Home'
import Posts from './components/Posts'
import About from './components/About'
import Footer from './components/Footer'

// Other
import './sass/app.sass'

class App extends Component {
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		// State
	// 	}

	// 	// You might see this code if someone is not using arrow functions
	// 	this.someRandomFunction = this.someRandomFunction.bind(this)
	// }

	// State, you get this
	state = {
		posts: [],
		time: new Date().toDateString(),
		limit: 10,
	}

	// React has lifecycle methods that trigger based on some events
	// like when the component mounts or cleaning up after it unmounts
	// helping to prevent memory leaks
	componentDidMount = async () => {
		// Nothing special, destructuring from state,
		// just think of it what values do I want to pluck from this object,
		// rememeber how everything is an object in JS,
		// this all makes sense if you understand how objects work
		const { limit, time } = this.state

		// Best practice when handling async/await
		try {
			// If we spun up the server we'd replace this URL with http://localhost:5000/posts
			const result = await fetch(`https://jsonplaceholder.typicode.com/posts`)
			// Fetch the data in json form
			const data = await result.json()

			// Grab 10 posts
			const oldPosts = data.slice(0, limit)

			// We're using map to create a new posts array of objects,
			// feel free to console.log() values so you see what's going on
			const posts = oldPosts.map(({ id, title, body }) => {
				return {
					id,
					title,
					body,
					time,
				}
			})

			// Lastly, we're setting our posts state to the new posts
			this.setState({
				// posts: posts is the same as posts
				posts,
			})
		} catch (error) {
			console.error(`💩`, error)
		}
	}

	// You're more likely to see people write promises
	// since not everyone is used to async/await yet
	// componentDidMount = () => {
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then(result => result.json())
	// 		.then(data => {
	// 			// Code
	// 		})
	// }

	render() {
		// Pluck posts from state
		const { posts } = this.state

		// Routes to iterate over making it easy to add new paths
		const routes = [
			{
				path: `/`,
				component: Home,
			},
			{
				path: `/posts`,
				component: Posts,
				// posts: posts is the same as posts
				posts,
			},
			{
				path: `/about`,
				component: About,
			},
		]

		return (
			// If we don't want to use extra divs in our React code
			// remember we can use React.Fragment, Fragment or <>,
			// React demands a parent element
			<Router>
				{/* We need to wrap our app with the Router component */}
				<div className="content">
					<Header />
					{/* 
							This will yield the same result as:
							<Route path="/" component={Home} exact />
							<Route path="/posts" component={Posts} />
							<Route path="/about" component={About} />
						*/}
					{routes.map(({ path, component: Component, posts }) => (
						<Route
							key={path}
							path={path}
							// Render props are something to learn on your own,
							// tl;dr we're passing functions to other functions,
							// that's what components are, here we're passing posts as props
							render={() => <Component posts={posts} />}
							exact
						/>
					))}
				</div>
				<Footer />
			</Router>
		)
	}
}

// We don't have to export our App component since we're using it directly here,
// this is usually in index.js when you do create-react-app
ReactDOM.render(<App />, document.getElementById(`app`))
