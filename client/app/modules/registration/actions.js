import { register } from '../auth';
import { parseServerErrors } from '../../lib';

import {
	REGISTRATION_REQUEST,
	REGISTRATION_FAILURE,
	REGISTRATION_SUCCESS
} from './actionTypes.js';

import { authenticationSuccess } from '../auth';

export function registrationFailure(error, errors) {
	return {
		type: REGISTRATION_FAILURE,
		payload: {
			error,
			errors
		}
	};
}

export function registrationIsLoading(bool) {
	return {
		type: REGISTRATION_REQUEST,
		payload: {
			isLoading: bool
		}
	};
}

export function registrationSuccess(user, token) {
	return {
		type: REGISTRATION_SUCCESS,
		payload: {
			user, token
		}
	};
}

export function registerUser(email, password) {
	return dispatch => {
		dispatch(registrationIsLoading(true));

		register(email, password, (err, res) => {
			dispatch(registrationIsLoading(false));

			if (res.ok) {
				const { token, user } = res.body;
				dispatch(registrationSuccess(user, token));
				dispatch(authenticationSuccess(user, token));
			} else {
				const { error, errors } = parseServerErrors(res.body);
				dispatch(registrationFailure(error, errors));
			}
		});
	};
}
