import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import './styles/styles.scss';
import App from './App';

const MOUNT_NODE = document.getElementById('app');

const render = (Component) => {
	ReactDOM.render(<Component />, MOUNT_NODE);
};

if (module.hot) {
	module.hot.accept('./App', () => {
		const newApp = require('./App').default;
		ReactDOM.unmountComponentAtNode(MOUNT_NODE);
		render(newApp);
	});
}

render(App);
