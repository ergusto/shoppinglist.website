import { createReducer } from 'lib';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
	CHANGE_PASSWORD_REQUEST,
	CHANGE_PASSWORD_FAILURE,
	CHANGE_PASSWORD_SUCCESS,
	DELETE_ACCOUNT_REQUEST,
	DELETE_ACCOUNT_FAILURE,
	DELETE_ACCOUNT_SUCCESS
} from './actionTypes.js';

const initialState = {
	loading: false,
	error: null,
	errors: {},
	success: false,
	statusText: null
};

const request = (state, payload) => {
	return Object.assign({}, state, {
		loading: true,
		error: null,
		errors: {},
		success: false,
		statusText: null
	});
};

const failure = (state, { response }) => {
	return Object.assign({}, state, {
		loading: false,
		error: response.error,
		errors: response.errors,
		success: false,
		statusText: 'Request failed.'
	});
};

export default createReducer(initialState, {
	[CHANGE_PASSWORD_REQUEST]: request,
	[DELETE_ACCOUNT_REQUEST]: request,
	[CHANGE_PASSWORD_FAILURE]: failure,
	[DELETE_ACCOUNT_FAILURE]: failure,
	[CHANGE_PASSWORD_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			errors: {},
			success: true,
			statusText: 'Password successfully changed.'
		});
	},
	[DELETE_ACCOUNT_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			errors: {},
			success: true,
			statusText: 'Accont successfully deleted.'
		});
	},
	[LOCATION_CHANGE]: (state, payload) => {
		return Object.assign({}, initialState);
	},
});
