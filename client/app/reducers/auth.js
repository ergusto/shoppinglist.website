import createReducer from './createReducer.js';
import {
	LOGOUT_SUCCESS,
	AUTHENTICATION_SUCCESS
} from '../constants/actionTypes.js';
import { isAuthenticated, getToken, getUser } from '../lib/auth.js';

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
	}
});
