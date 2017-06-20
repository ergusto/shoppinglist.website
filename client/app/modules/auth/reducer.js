import createReducer from '../../createReducer.js';
import { isAuthenticated, getToken, getUser } from '../../lib/auth.js';

import {
	LOGOUT_SUCCESS,
	AUTHENTICATION_SUCCESS
} from './actionTypes.js';

import {
	DELETE_ACCOUNT_SUCCESS
} from '../settings';

const initialState = {
	authenticated: isAuthenticated() ? true : false,
	token: isAuthenticated() ? getToken() : null,
	user: isAuthenticated() ? getUser() : null
};

export default createReducer(initialState, {
	[LOGOUT_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			authenticated: false,
			token: null,
			user: null,
		});
	},
	[AUTHENTICATION_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			authenticated: true,
			token: payload.token,
			user: payload.user,
		});
	},
	[DELETE_ACCOUNT_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			authenticated: false,
			token: null,
			user: null
		});
	}
});