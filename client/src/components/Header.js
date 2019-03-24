import React from 'react'
// We need the NavLink component,
// the only difference from Link is having the activeClassName property
import { NavLink } from 'react-router-dom'

export default function Home() {
	return (
		<header className="header">
			<h1 className="header__title">tasty.io</h1>

			<nav>
				<ul className="nav">
					<li className="nav__item">
						<NavLink to="/" exact activeClassName="nav__item__active">
							Home
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/posts" activeClassName="nav__item__active">
							Posts
						</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/about" activeClassName="nav__item__active">
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
