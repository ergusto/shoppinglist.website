import { CALL_API, METHOD_POST } from 'app/middleware/api.js';
import {
	CHANGE_PASSWORD_REQUEST,
	CHANGE_PASSWORD_FAILURE,
	CHANGE_PASSWORD_SUCCESS
} from '../actionTypes.js';

const requestChangePassword = body => ({
	[CALL_API]: {
		types: [CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE],
		endpoint: '/api/change_password/',
		method: METHOD_POST,
		body
	}
});

export const changePassword = (current_password, new_password) => dispatch => dispatch(requestChangePassword({ current_password, new_password }));
