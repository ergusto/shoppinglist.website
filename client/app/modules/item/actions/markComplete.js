import {
	ITEM_MARK_COMPLETE_REQUEST,
	ITEM_MARK_COMPLETE_FAILURE,
	ITEM_MARK_COMPLETE_SUCCESS
} from '../actionTypes.js';

import { CALL_API, METHOD_PATCH } from 'app/middleware/api.js';

export const markItemComplete = id => ({
	[CALL_API]: {
		types: [ITEM_MARK_COMPLETE_REQUEST, ITEM_MARK_COMPLETE_SUCCESS, ITEM_MARK_COMPLETE_FAILURE],
		endpoint: `/api/items/${id}/`,
		method: METHOD_PATCH,
		body: { complete: true }
	}
});