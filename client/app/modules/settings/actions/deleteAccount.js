import { CALL_API, METHOD_POST } from 'app/middleware/api.js';
import {
	DELETE_ACCOUNT_REQUEST,
	DELETE_ACCOUNT_FAILURE,
	DELETE_ACCOUNT_SUCCESS
} from '../actionTypes.js';

const requestDeleteAccount = body => ({
	[CALL_API]: {
		types: [DELETE_ACCOUNT_REQUEST, DELETE_ACCOUNT_SUCCESS, DELETE_ACCOUNT_FAILURE],
		endpoint: '/api/delete_account/',
		method: METHOD_POST,
		body
	}
});

export const deleteAccount = current_password => dispatch => dispatch(requestDeleteAccount({ current_password }));