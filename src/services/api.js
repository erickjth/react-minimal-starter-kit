// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import config from 'config';
import { pick } from 'lodash';

const create = function create(baseURL = config.api.baseUrl) {
	const api = apisauce.create({
		baseURL,
		timeout: config.api.timeout,
	});

	api.addAsyncRequestTransform(request => () => {
		const accessToken = sessionStorage.getItem('accessToken');
		if (accessToken) {
			request.headers['X-ACCESS-TOKEN'] = accessToken; // eslint-disable-line no-param-reassign
		}
	});

	if (process.env.NODE_ENV !== 'production') {
		api.axiosInstance.interceptors.request.use((config) => {
			console.groupCollapsed('%c REQUEST ', 'background: #46078A; color: #ffffff');
			console.log(pick(config, ['url', 'method', 'params', 'headers', 'data']));
			console.groupEnd();
			return config;
		}, (error) => {
			console.log('ERROR: ', error);
			return Promise.reject(error);
		});

		api.axiosInstance.interceptors.response.use((response) => {
			console.groupCollapsed('%c RESPONSE ',  'background: #46078A; color: #ffffff');
			console.log(response);
			console.groupEnd();
			return response;
		}, (error) => {
			console.log('ERROR: ', error);
			return Promise.reject(error);
		});
	}

	return {};
};

export default { create };
