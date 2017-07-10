import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

import { createReducer } from 'lib';
import {
	ITEM_CREATE_REQUEST,
	ITEM_CREATE_SUCCESS,
	ITEM_CREATE_FAILURE
} from './actionTypes.js'; 

const initialState = {
	loading: false,
	success: false,
	error: null,
	errors: {},

	statusText: null
};

export default createReducer(initialState, {
	[ITEM_CREATE_REQUEST]: (state, payload) => {
		return Object.assign({}, state, {
			loading: true,
			success: false,
			statusText: null
		});
	},
	[ITEM_CREATE_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			success: true,
			error: null,
			errors: {},
			statusText: 'Item created succcessfully.'
		});
	},
	[ITEM_CREATE_FAILURE]: (state, payload) => {
		return Object.assign({}, state, {
			error: payload.error,
			errors: payload.errors,
			loading: false,
			success: false,
			statusText: 'Unable to create item.'
		});
	},
	[LOCATION_CHANGE]: (state, payload) => {
		return Object.assign({}, initialState);
	}
});