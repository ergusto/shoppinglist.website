import { register } from '../../lib/auth.js';

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

				dispatch(registrationFailure(error, errors));
			}
		});
	};
}
