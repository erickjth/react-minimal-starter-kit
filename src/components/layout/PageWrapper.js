import React from 'react';

export default class PageWrapper extends React.PureComponent {
	render() {
		return (
			<main role="main" className="container">
				{this.props.children}
			</main>
		);
	}
}
