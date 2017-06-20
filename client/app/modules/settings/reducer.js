import createReducer from '../../createReducer.js';
import {
	CHANGE_PASSWORD_REQUEST,
	CHANGE_PASSWORD_FAILURE,
	CHANGE_PASSWORD_SUCCESS,
	DELETE_ACCOUNT_REQUEST,
	DELETE_ACCOUNT_FAILURE,
	DELETE_ACCOUNT_SUCCESS,
	RESET_SETTINGS_STATE
} from './actionTypes.js';

const initialState = {
	loading: false,
	error: null,
	errors: {},
	statusText: null
};

const request = (state, payload) => {
	return Object.assign({}, state, {
		loading: true,
		error: null,
		errors: {},
		statusText: null
	});
};

const failure = (state, payload) => {
	return Object.assign({}, state, {
		loading: false,
		error: payload.error,
		errors: payload.errors,
		statusText: 'Changing password failed.'
	});
};

export default createReducer(initialState, {
	[CHANGE_PASSWORD_REQUEST]: request,
	[CHANGE_PASSWORD_FAILURE]: failure,
	[CHANGE_PASSWORD_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			errors: {},
			statusText: 'Password successfully changed.'
		});
	},
	[DELETE_ACCOUNT_REQUEST]: request,
	[DELETE_ACCOUNT_FAILURE]: failure,
	[DELETE_ACCOUNT_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			errors: {},
			statusText: 'Accont successfully deleted.'
		});
	},
	[RESET_SETTINGS_STATE]: (state, payload) => {
		return initialState;
	}
});
