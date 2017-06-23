import { createReducer } from '../../lib';
import {
	ITEMS_REQUEST,
	ITEMS_SUCCESS,
	ITEMS_FAILURE
} from './actionTypes.js';

import {
	ITEM_CREATE_SUCCESS,
	ITEM_MARK_COMPLETE_SUCCESS,
	ITEM_SHOW_EDIT,
	ITEM_HIDE_EDIT,
	ITEM_EDIT_SUCCESS
} from '../item';

const initialState = {
	items: [],
	editingItems: [],

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
			items: [].concat(state.items, payload.results),
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
			items: [].concat([payload], state.items),
		});
	},
	[ITEM_MARK_COMPLETE_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			items: state.items.filter(item => item.id != payload.id),
			offset: state.offset === 0 ? state.offset : state.offset - 1
		});
	},
	[ITEM_SHOW_EDIT]: (state, payload) => {
		return Object.assign({}, state, {
			editingItems: [].concat([payload.id], state.editingItems)
		});
	},
	[ITEM_HIDE_EDIT]: (state, payload) => {
		return Object.assign({}, state, {
			editingItems: state.editingItems.filter(id => id !== payload.id),
		});
	},
	[ITEM_EDIT_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			items: state.items.map(item => item.id == payload.id ? payload : item),
			editingItems: state.editingItems.filter(id => id != payload.id)
		});
	},
});