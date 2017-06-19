import { getToken, login, register, logout } from '../../lib/auth.js';

import {
	LOGIN_REQUEST,
	LOGIN_FAILURE,
	LOGIN_SUCCESS
} from './actionTypes.js';

import { authenticationSuccess } from '../auth';

export function loginFailure(error, errors) {
	return {
		type: LOGIN_FAILURE,
		payload: {
			error,
			errors
		}
	};
}

export function loginIsLoading(bool) {
	return {
		type: LOGIN_REQUEST,
		payload: {
			isLoading: bool
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
				let error = true;
				const errors = {};

				const server_errors = res.body;
				const { non_field_errors } = server_errors;
				delete server_errors['non_field_errors'];

				if (non_field_errors) {
					error = non_field_errors[0];
				}

				if (Object.keys(server_errors).length) {
					for (var prop in server_errors) {
						errors[prop] = server_errors[prop][0];
					}
				}

				dispatch(loginFailure(error, errors));
			}
		});
	}
}