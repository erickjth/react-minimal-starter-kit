import { persistCombineReducers, persistStore } from 'redux-persist';
import createHistory from 'history/createBrowserHistory';
import AppActions from 'modules/app';
import rootReducer from 'modules/reducers';
import configureStore from 'store/configureStore';
import config from 'config';

export const history = createHistory();

/**
 * Create redux-persist persistor
 *
 * @param {object} store
 */
const createPersistor = (store) => {
	const init = () => store.dispatch(AppActions.init());
	const persistor = persistStore(store, null, init);
	return persistor;
};

/**
 * Create the redux Store
 */
export default () => {
	const appReducer = persistCombineReducers(config.persist, rootReducer);
	const store = configureStore(appReducer, history, {});
	const persistor = createPersistor(store);

	// Run Saga After persists
	store.runSaga();

	return { store, persistor };
};
