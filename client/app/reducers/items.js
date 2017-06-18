import createReducer from './createReducer.js';
import {
	ITEMS_REQUEST,
	ITEMS_SUCCESS,
	ITEMS_FAILURE,
	ITEM_CREATE_REQUEST,
	ITEM_CREATE_SUCCESS,
	ITEM_CREATE_FAILURE,
	ITEM_MARK_COMPLETE_SUCCESS,
	ITEM_EDIT_SUCCESS
} from '../constants/actionTypes.js'; 

const initialState = {
	items: [],

	itemsLoading: false,
	itemsError: null,
	statusText: null,
};

export default createReducer(initialState, {
	[ITEMS_REQUEST]: (state, payload) => {
		return Object.assign({}, state, {
			itemsLoading: true,
			statusText: null
		});
	},
	[ITEMS_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			items: payload.items,
			itemsLoading: false,
			itemsError: null,
			statusText: 'Items successfully loaded.'
		});
	},
	[ITEMS_FAILURE]: (state, payload) => {
		return Object.assign({}, state, {
			itemsError: payload.error,
			itemsLoading: false,
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
			items: state.items.filter(item => item.id != payload.item.id)
		});
	},
	[ITEM_EDIT_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			items: state.items.map(item => item.id == payload.item.id ? payload.item : item)
		});
	},
});
