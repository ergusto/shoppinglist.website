import request from 'superagent';
import history from './history.js';
import { isAuthenticated, getToken, logout } from './auth.js';
import { setParams, isFunction, trim } from './tools.js';
import { getCookie } from './csrf.js';

export const getBaseHeaders = () => {
	return {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
	};
};

export const makeSafe = func => {
	return Object.assign({}, func(), {
		'X-CSRFToken': getCookie(),
	});
};

export const getAuthHeaders = () => {
	return Object.assign({}, getBaseHeaders(), {
		'Authorization': 'JWT ' + getToken(),
	});
};

const authenticate = callback => {
	if (isAuthenticated()) {
		callback();
	} else {
		logout();
		history.push('/login');
	}
};

const responseHandler = callback => {
	return (err, res) => {
		if (res.unauthorized) {
			logout();
			history.push('/login');
		} else {
			if (callback) callback(err, res);
		}
	}
};

export const auth = {
	get(url, params, then) {
		authenticate(() => {
			if (isFunction(params)) {
				let tmp = params;
				params = then;
				then = tmp;
			}
			const newUrl = setParams(url, params);
			request.get(newUrl).set(getAuthHeaders()).end(responseHandler(then));
		});
	},
	post(url, data, then) {
		authenticate(() => {
			request.post(url).set(makeSafe(getAuthHeaders)).send(data).end(responseHandler(then));
		});
	},
	patch(url, data, then) {
		authenticate(() => {
			request.patch(url).set(makeSafe(getAuthHeaders)).send(data).end(responseHandler(then));
		});
	},
};

export const unauth = {
	get(url, then) {
		return request.get(url).set(getBaseHeaders()).end(then);
	},
	post(url, data, then) {
		if (isFunction(data)) {
			tmp = data;
			data = then;
			then = tmp;
		}
		return request.post(url).set(makeSafe(getBaseHeaders)).send(data).end(then);
	},
};

const api = { auth, unauth };

export default api;