import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { history } from 'store';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/layout/Header';
import Home from 'views/Home';

class Routes extends React.PureComponent {
	render() {
		return (
			<ConnectedRouter history={history}>
				<React.Fragment>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</React.Fragment>
			</ConnectedRouter>
		);
	}
}

export default Routes;
