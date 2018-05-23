import { createReducer, createActions } from 'reduxsauce';

// Action creators
const { Types, Creators } = createActions({
	init: null,
	initSuccess: null,
	initFailure: ['error'],
	reset: null
}, { prefix: '@APP/' });

export const AppTypes = Types;
export default Creators;

// default State
const INITIAL_STATE = {
	isInitiated: false,
	error: null
};

// Reducer Handlers
export const reducer = createReducer(INITIAL_STATE, {
	[Types.INIT]: (state) => {
		return {
			...state,
			isInitiated: false,
			error: null,
		};
	},

	[Types.INIT_SUCCESS]: (state) => {
		return {
			...state,
			isInitiated: true,
			error: null,
		};
	},

	[Types.INIT_FAILURE]: (state, { error }) => {
		return {
			...state,
			isInitiated: false,
			error,
		};
	},

	[Types.RESET]: () => INITIAL_STATE
});
