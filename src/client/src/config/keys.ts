/* eslint-disable import/no-anonymous-default-export */
const API_VERSION = 'v1'
export default {
	API_VERSION,
	API_METHODS: {
		settings: `/api/${API_VERSION}/settings`,
		login: `/api/${API_VERSION}/user/login`,
	},
}
