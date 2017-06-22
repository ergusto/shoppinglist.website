import { authenticationSuccess, getToken, login, register, logout } from '../auth';
import { parseServerErrors } from '../../lib';

import {
	LOGIN_REQUEST,
	LOGIN_FAILURE,
	LOGIN_SUCCESS
} from './actionTypes.js';

export function loginIsLoading(bool) {
	return {
		type: LOGIN_REQUEST,
		payload: {
			isLoading: bool
		}
	};
}

export function loginFailure(error, errors) {
	return {
		type: LOGIN_FAILURE,
		payload: {
			error,
			errors
		}
	};
}

export function loginSuccess(user, token) {
	return {
		type: LOGIN_SUCCESS,
		payload: {
			user,
			token
		}
	};
}

export function loginUser(email, password) {
	return dispatch => {
		dispatch(loginIsLoading(true));

		login(email, password, (err, res) => {
			dispatch(loginIsLoading(false));
			
			if (res.ok) {
				const { token, user } = res.body;
				dispatch(loginSuccess(user, token));
				dispatch(authenticationSuccess(user, token));
			} else {
				const { error, errors } = parseServerErrors(res.body);
				dispatch(loginFailure(error, errors));
			}
		});
	}
}