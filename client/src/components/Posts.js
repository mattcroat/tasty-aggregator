import React from 'react'

// Simple stateless function component,
// couple of things are different in these,
// you drop this from class components when referring to variables and functions,
// you have to pass props yourself, no render function, only return
export default function Posts({ posts }) {
	// Trim our text with ellipsis after a certain limit
	const truncateString = (text, max) => {
		const truncatedText =
			text.substr(0, max - 1) + (text.length > max ? `...` : ``)

		return truncatedText
	}

	return (
		<section className="section">
			<h2 className="section__subtitle">tasty posts</h2>

			<article>
				{/*
          posts come from props.posts
          that we destructured already as posts
        */}
				{posts.map(({ id, title, body, time }) => (
					<div className="post" key={id}>
						<h3 className="post__title">{title}</h3>
						<p className="post__time">{time}</p>
						<p className="post__body">{truncateString(body, 140)}</p>
					</div>
				))}
			</article>
		</section>
	)
}
