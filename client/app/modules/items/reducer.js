import createReducer from '../../createReducer.js';
import {
	ITEMS_REQUEST,
	ITEMS_SUCCESS,
	ITEMS_FAILURE
} from './actionTypes.js';

import {
	ITEM_CREATE_SUCCESS,
	ITEM_MARK_COMPLETE_SUCCESS,
	ITEM_EDIT_SUCCESS
} from '../item';

const initialState = {
	items: [],

	loading: false,
	error: null,
	statusText: null,
	limit: 10,
	offset: 0,
	next: false,
	count: 0,
};

export default createReducer(initialState, {
	[ITEMS_REQUEST]: (state, payload) => {
		return Object.assign({}, state, {
			loading: true,
			error: null,
			statusText: null
		});
	},
	[ITEMS_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			items: [].concat(state.items, payload.items),
			loading: false,
			error: null,
			next: payload.next,
			count: payload.count,
			offset: state.offset + state.limit,
			statusText: 'Items successfully loaded.'
		});
	},
	[ITEMS_FAILURE]: (state, payload) => {
		return Object.assign({}, state, {
			error: payload.error,
			loading: false,
			next: false,
			statusText: 'Unable to load items.'
		});
	},
	[ITEM_CREATE_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			items: [].concat([payload.item], state.items),
		});
	},
	[ITEM_MARK_COMPLETE_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			items: state.items.filter(item => item.id != payload.item.id),
			offset: state.offset === 0 ? state.offset : state.offset - 1,
		});
	},
	[ITEM_EDIT_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			items: state.items.map(item => item.id == payload.item.id ? payload.item : item)
		});
	},
});