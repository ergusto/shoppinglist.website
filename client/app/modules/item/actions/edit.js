import {
	ITEM_EDIT_REQUEST,
	ITEM_EDIT_FAILURE,
	ITEM_EDIT_SUCCESS
} from '../actionTypes.js';

import { CALL_API, METHOD_PATCH } from 'app/middleware/api.js';

export const editItem = (id, attrs) => ({
	payload: { id },
	[CALL_API]: {
		types: [ITEM_EDIT_REQUEST, ITEM_EDIT_SUCCESS, ITEM_EDIT_FAILURE],
		endpoint: `/api/items/${id}/`,
		method: METHOD_PATCH,
		body: attrs
	},
});