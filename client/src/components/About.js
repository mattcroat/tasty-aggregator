import React from 'react'

export default function About() {
	const style = {
		textAlign: `center`,
		marginTop: `10rem`,
	}

	return (
		<div className="about" style={style}>
			<h1>About</h1>
			<p>Tasty.io is a collection of delicious articles from the web.</p>
		</div>
	)
}
