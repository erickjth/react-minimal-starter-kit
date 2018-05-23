import { takeLatest, put } from 'redux-saga/effects';
import AppActions, { AppTypes } from 'modules/app';

export function* init() {
	try {
		// This action will be launched after Finishing Store Rehydrate
		yield put(AppActions.initSuccess());
	} catch (e) {
		yield put(AppActions.initFailure(e.message));
	}
}

export function* watchApp() {
	yield takeLatest(AppTypes.INIT, init);
}
