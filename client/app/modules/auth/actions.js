import { logout } from '../../lib/auth.js';

import {
	LOGOUT_SUCCESS,
	AUTHENTICATION_SUCCESS
} from './actionTypes.js';

export function logoutSuccess() {
	return {
		type: LOGOUT_SUCCESS
	};
}

export function logoutUser() {
	return dispatch => {
		logout(() => {
			dispatch(logoutSuccess());
		});
	}
}

export function authenticationSuccess(user, token) {
	return {
		type: AUTHENTICATION_SUCCESS,
		payload: {
			user, token
		}
	};
}