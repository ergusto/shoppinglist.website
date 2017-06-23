import { camelizeKeys } from 'humps';
import { logout } from '../modules/auth';
import { parseServerErrors } from '../lib';

export const getBaseHeaders = () => {
	return {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
	};
};

export const getAuthHeaders = token => {
	return Object.assign({}, getBaseHeaders(), {
		'Authorization': 'JWT ' + token
	});
};

const HTTP_UNAUTHORISED = 401;
const HTTP_BAD_REQUEST = 400;

export const UNAUTHORISED = 'UNAUTHORISED';

const API_ROOT = '/api/';
export const CALL_API = 'CALL_API';

export const METHOD_GET = 'GET';
export const METHOD_POST = 'POST';
export const METHOD_PATCH = 'PATCH';
export const METHOD_DELETE = 'DELETE';
const methods = [METHOD_GET, METHOD_POST, METHOD_PATCH, METHOD_DELETE];

// Because fetch.json will fail on an empty response body
const parseJSON = text => text.length ? JSON.parse(text) : {};

const callApi = ({ authenticated, endpoint, method, body, token }) => {
	const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

	const options = {
		method,
		headers: authenticated ? getAuthHeaders(token) : getBaseHeaders()
	};

	if (body && (method === METHOD_POST || method === METHOD_PATCH)) {
		options.body = JSON.stringify(body);
	}

	return fetch(fullUrl, options).then(response => {
		return response.text().then(parseJSON).then(json => {
			if (!response.ok) {
				const error = { body: json, status: response.status };
				return Promise.reject(error);
			}

			const camelizedJson = camelizeKeys(json);
			
			return Object.assign({}, camelizedJson);
		})
	});
};

export default store => next => action => {
	const config = action[CALL_API];

	if (typeof config === 'undefined') {
		return next(action);
	}

	let { endpoint } = config;
	const { types, method, body } = config;

	if (typeof endpoint === 'function') {
		endpoint = endpoint(store.getState());
	}

	if (typeof endpoint !== 'string') {
		throw new Error('Endpoint must be a string or function');
	}

	if (!Array.isArray(types) || types.length !== 3) {
		throw new Error('Expected three action types');
	}

	if (!types.every(type => typeof type === 'string')) {
		throw new Error('Expected action types to be strings');
	}

	if (typeof method !== 'string') {
		throw new Error('Method must be a string');
	}

	if (!methods.indexOf(method) < 0) {
		throw new Error('Method must be a valid method');
	}

	const options = { endpoint, method, body };
	const { auth } = store.getState();
	if (auth && auth.authenticated) {
		options.token = auth.token;
		options.authenticated = auth.authenticated;
	}

	const [requestType, successType, failureType] = types;

	return callApi(options).then(response => {
		next({
			type: successType,
			payload: response 
		});
	}).catch(err => {
		if (err.status === HTTP_UNAUTHORISED) {
			return next({
				type: UNAUTHORISED,
				payload: {}
			});
		}

		if (err.status === HTTP_BAD_REQUEST) {
			const { error, errors } = parseServerErrors(err.body);
			return next({
				type: failureType,
				payload: { error, errors }
			});
		}

		return next({
			type: failureType,
			payload: {
				message: err.message || 'Something bad happened',
				error: err,
			}
		});
	});
};
