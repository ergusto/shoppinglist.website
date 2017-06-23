import { createReducer } from '../../lib';
import {
	ITEM_CREATE_REQUEST,
	ITEM_CREATE_SUCCESS,
	ITEM_CREATE_FAILURE
} from './actionTypes.js'; 

const initialState = {
	createLoading: false,
	createError: null,

	statusText: null,
};

export default createReducer(initialState, {
	[ITEM_CREATE_REQUEST]: (state, payload) => {
		return Object.assign({}, state, {
			createLoading: true,
			statusText: null,
		});
	},
	[ITEM_CREATE_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			createLoading: false,
			createError: null,
			statusText: 'Item created succcessfully.'
		});
	},
	[ITEM_CREATE_FAILURE]: (state, { response }) => {
		return Object.assign({}, state, {
			createError: response.error,
			createLoading: false,
			statusText: 'Unable to create item.'
		});
	},
});