import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Home from './Home'
import Posts from './Posts'
import About from './About'

export default function Routes({ posts }) {
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
		<>
			{routes.map(({ path, component: Component }) => (
				<Route
					key={path}
					path={path}
					render={() => <Component posts={posts} />}
					exact
				/>
			))}
		</>
	)
}

Routes.propTypes = {
	posts: PropTypes.object.isRequired,
}
