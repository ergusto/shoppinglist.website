import request from 'superagent';
import api, { getCookie, getBaseHeaders } from './api.js';
import Storage from '../lib/storage.js';

const storage = new Storage('auth');
export const getToken = () => storage.get('token');
export const setToken = token => storage.update({ token });
export const getUser = () => {
	const id = getId();
	if (id) {
		return {
			id: id,
			email: getEmail(),
		};
	} else {
		return false;
	}
};
export const setUser = ({ id, email}) => storage.update({ id, email });
export const getId = () => storage.get('id');
export const getEmail = () => storage.get('email');
export const removeUser = () => storage.remove('token id email');
export const isAuthenticated = () => !!getId();


export function logout(cb) {
	removeUser();
	cb && cb();
}

export function requireAuth(nextState, replace) {
	if (!isAuthenticated()) {
		replace('/login');
	}
}

export function requireAnon(nextState, replace) {
	if (isAuthenticated()) {
		replace('/');
	}
}

export function login(email, password, cb) {
	fetchToken(email, password, (err, res) => {
		if (res.ok) {
			const { token, user } = res.body;
			setToken(token);
			setUser(user);
		}
		if (cb) cb(err, res);
	});
}

export function fetchToken(email, password, cb) {
	return api.unauth.post('/api/token/', { email, password }, cb);
}

export function register(email, password, cb) {
	return api.unauth.post('/api/register/', { email, password }, (err, res) => {
		if (res.ok) {
			const { token, user } = res.body;
			setToken(token);
			setUser(user);
		}
		if (cb) cb(err, res);
	});
}