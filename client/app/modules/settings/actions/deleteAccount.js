import { unauthorised, deleteAccount as deleteUserAccount } from '../../auth';
import { parseServerErrors } from '../../../lib';
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
				if (res.unauthorized) {
					dispatch(unauthorised());
				} else {
					const { error, errors } = parseServerErrors(res.body);
					dispatch(deleteAccountFailure(error, errors));
				}
			}
		});
	};
}