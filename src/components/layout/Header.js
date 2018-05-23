import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-dark pt-2 pb-2">
				<div className="container">

					<Link className="navbar-brand" to="/">Home</Link>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsExampleDefault">
						<ul className="navbar-nav mr-auto">

						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
