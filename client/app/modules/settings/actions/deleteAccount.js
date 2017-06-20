import { deleteAccount as deleteUserAccount } from '../../../lib/auth.js';

import {
	DELETE_ACCOUNT_REQUEST,
	DELETE_ACCOUNT_FAILURE,
	DELETE_ACCOUNT_SUCCESS
} from '../actionTypes.js';

export function deleteAccountIsLoading(bool) {
	return {
		type: DELETE_ACCOUNT_REQUEST,
		payload: {
			isLoading: bool
		}
	};
}

export function deleteAccountFailure(error, errors) {
	return {
		type: DELETE_ACCOUNT_FAILURE,
		payload: {
			error,
			errors
		}
	};
}

export function deleteAccountSuccess() {
	return {
		type: DELETE_ACCOUNT_SUCCESS,
		payload: {}
	};
}

export function deleteAccount(current_password, callback) {
	return dispatch => {
		dispatch(deleteAccountIsLoading(true));

		deleteUserAccount(current_password, (err, res) => {
			dispatch(deleteAccountIsLoading(false));

			if (res.ok) {
				dispatch(deleteAccountSuccess());
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

				console.log(errors)

				dispatch(deleteAccountFailure(error, errors));
			}
		});
	};
}