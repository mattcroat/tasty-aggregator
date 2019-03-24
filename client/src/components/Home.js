import React from 'react'

// You can just write class components if you don't feel like
// converting existing stateless functional components to classes
// before learning about hooks
export default function Home() {
	// Simple object holding our CSS values
	const style = {
		textAlign: `center`,
		marginTop: `10rem`,
	}

	return (
		// Inline JSX CSS, I haven't covered styled-components
		// but I prefer it much over this,
		// if you wanted to write css directly you'd have to use double {{}}
		// since you're passing down an object
		<div className="home" style={style}>
			<h1>Welcome to Tasty.io!</h1>
			<p>Get the tastiest posts from around the globe.</p>
		</div>
	)
}
