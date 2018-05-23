import storage from 'redux-persist/lib/storage';

export default {
	baseUrl: `${window.location.protocol}//${window.location.host}`,

	api: {
		baseUrl: 'http:/api.goes.here',
		timeout: 30000,
	},

	logger: {
		enable: false,
	},

	persist: {
		key: '_application',
		version: 1,
		storage: storage,
		blacklist: ['app'],
	}
};
