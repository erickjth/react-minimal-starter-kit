import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from 'router';
import createStore from 'store';

const { store, persistor, history } = createStore();

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Routes history={history} />
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
