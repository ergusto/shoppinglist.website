import { createReducer } from '../../lib';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from './actionTypes.js';

const initialState = {
	loading: false,
	error: null,
	errors: {},
	statusText: null
};

export default createReducer(initialState, {
	[LOGIN_REQUEST]: (state, payload) => {
		return Object.assign({}, state, {
			loading: true,
			error: null,
			errors: {},
			statusText: null
		});
	},
	[LOGIN_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			errors: {},
			statusText: 'You have been successfully logged in.'
		});
	},
	[LOGIN_FAILURE]: (state, { response }) => {
		return Object.assign({}, state, {
			loading: false,
			error: response.error,
			errors: response.errors,
			statusText: 'Authentication Error.'
		});
	},
});