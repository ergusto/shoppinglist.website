import createReducer from '../../createReducer.js';
import {
	CHANGE_PASSWORD_REQUEST,
	CHANGE_PASSWORD_FAILURE,
	CHANGE_PASSWORD_SUCCESS
} from './actionTypes.js';

const initialState = {
	loading: false,
	error: null,
	errors: {},
	statusText: null
};

export default createReducer(initialState, {
	[CHANGE_PASSWORD_REQUEST]: (state, payload) => {
		return Object.assign({}, state, {
			loading: true,
			error: null,
			errors: {},
			statusText: null
		});
	},
	[CHANGE_PASSWORD_FAILURE]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			error: payload.error,
			errors: payload.errors,
			statusText: 'Changing password failed.'
		});
	},
	[CHANGE_PASSWORD_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			errors: {},
			statusText: 'Password successfully changed.'
		});
	}
});
