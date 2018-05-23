import { all, fork } from 'redux-saga/effects';
import api from 'services/mockApi';

/* ------------- Sagas ------------- */
import { watchApp } from './app';

const apiIntance = api.create();

/* ------------- Root Saga ------------- */
export default function* root() {
	yield all([
		yield fork(watchApp, apiIntance),
	]);
}
