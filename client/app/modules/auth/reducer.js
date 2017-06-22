import createReducer from '../../createReducer.js';
import { isAuthenticated, getToken, getUser } from './lib.js';

import {
	AUTHENTICATION_SUCCESS,
	LOGOUT_SUCCESS,
	UNAUTHORISED_REQUEST
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
	[AUTHENTICATION_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			authenticated: true,
			token: payload.token,
			user: payload.user,
		});
	},
	[UNAUTHORISED_REQUEST]: (state, payload) => {
		return Object.assign({}, state, {
			authenticated: false,
			token: null,
			user: null
		});
	},
});