import { logout } from './lib.js';

import {
	AUTHENTICATION_SUCCESS,
	LOGOUT_SUCCESS,
	UNAUTHORISED_REQUEST
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

export function unauthorisedRequest() {
	return {
		type: UNAUTHORISED_REQUEST,
		payload: {}
	};
}

export function unauthorised() {
	return dispatch => {
		logout(() => {
			dispatch(unauthorisedRequest());
		});
	};
}