import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import config from 'config';

export default function configureStore(rootReducer, history, initialState) {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = [
		sagaMiddleware,
		routerMiddleware(history),
	];

	const enhancers = [];

	if (process.env.NODE_ENV === 'development') {
		const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

		if (typeof devToolsExtension === 'function') {
			enhancers.push(devToolsExtension());
		}

		if (config.logger.enable) {
			const LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE'];

			const logger = createLogger({
				predicate: (getState, { type }) => !LOGGING_BLACKLIST.includes(type),
			});

			middlewares.push(logger);
		}
	}


	const composedEnhancers = compose(
		applyMiddleware(...middlewares),
		...enhancers
	);

	const store = createStore(
		rootReducer,
		initialState,
		composedEnhancers
	);

	store.runSaga = () => sagaMiddleware.run(rootSaga);

	return store;
}
