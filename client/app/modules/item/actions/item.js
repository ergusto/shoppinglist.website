import {
	ITEM_SHOW_EDIT,
	ITEM_HIDE_EDIT
} from '../actionTypes.js';

export const showItemEditForm = id => ({
	type: ITEM_SHOW_EDIT,
	payload: { id }
});

export const hideItemEditForm = id => ({
	type: ITEM_HIDE_EDIT,
	payload: { id }
});