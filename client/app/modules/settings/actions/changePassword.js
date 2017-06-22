import { unauthorised, changePassword as changeUserPassword  } from '../../auth';
import { parseServerErrors } from '../../../lib';
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
				if (res.unauthorized) {
					dispatch(unauthorised());
				} else {
					const { error, errors } = parseServerErrors(res.body);
					dispatch(changePasswordFailure(error, errors));
				}
			}
		});
	}
}
