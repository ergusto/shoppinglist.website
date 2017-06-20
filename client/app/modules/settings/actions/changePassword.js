import { changePassword as changeUserPassword  } from '../../../lib/auth.js';

import {
	CHANGE_PASSWORD_REQUEST,
	CHANGE_PASSWORD_FAILURE,
	CHANGE_PASSWORD_SUCCESS
} from '../actionTypes.js';

export function changePasswordIsLoading(bool) {
	return {
		type: CHANGE_PASSWORD_REQUEST,
		payload: {
			isLoading: bool
		}
	};
}

export function changePasswordFailure(error, errors) {
	return {
		type: CHANGE_PASSWORD_FAILURE,
		payload: {
			error,
			errors
		}
	};
}

export function changePasswordSuccess() {
	return {
		type: CHANGE_PASSWORD_SUCCESS,
		payload: {}
	};
}

export function changePassword(current_password, new_password, callback) {
	return dispatch => {
		dispatch(changePasswordIsLoading(true));

		changeUserPassword(current_password, new_password, (err, res) => {
			dispatch(changePasswordIsLoading(false));
			
			if (res.ok) {
				dispatch(changePasswordSuccess());
				if (callback) callback();
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

				dispatch(changePasswordFailure(error, errors));
			}
		});
	}
}
