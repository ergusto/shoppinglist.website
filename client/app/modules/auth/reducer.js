import { createReducer } from 'lib';
import { isAuthenticated, getToken, getUser } from './storage.js';

import { UNAUTHORISED } from 'app/middleware/api.js';
import { LOGOUT_SUCCESS } from 'modules/auth';
import { LOGIN_SUCCESS } from 'modules/login';
import { REGISTRATION_SUCCESS } from 'modules/registration';

const initialState = {
	authenticated: isAuthenticated() ? true : false,
	token: isAuthenticated() ? getToken() : null,
	user: isAuthenticated() ? getUser() : null
};

const authenticate = (state, { response }) => {
	return Object.assign({}, state, {
		authenticated: true,
		token: response.token,
		user: response.user
	});
};

const unauthenticate = (state, payload) => {
	return Object.assign({}, state, {
		authenticated: false,
		token: null,
		user: null
	});
};

export default createReducer(initialState, {
	[LOGIN_SUCCESS]: authenticate,
	[REGISTRATION_SUCCESS]: authenticate,
	[UNAUTHORISED]: unauthenticate,
	[LOGOUT_SUCCESS]: unauthenticate
});