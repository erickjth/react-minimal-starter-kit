import merge from 'lodash/merge';
import base from './base';

let config = null;

function getEnvFile(env) {
	const envFiles = {
		'development': require('./dev').default,
		'production': require('./prod').default,
		'test': require('./test').default,
	};

	return envFiles[env] || envFiles.development;
}

function createConfig() {
	// Cache if exists
	if (config !== null) return config;

	let local = getEnvFile(process.env.NODE_ENV);

	return merge({}, base, local);
}

export default createConfig();
