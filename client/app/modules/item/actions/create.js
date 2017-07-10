import {
	ITEM_CREATE_REQUEST,
	ITEM_CREATE_SUCCESS,
	ITEM_CREATE_FAILURE
} from '../actionTypes.js';

import { CALL_API, METHOD_POST } from 'app/middleware/api.js';

export const createItem = item => ({
	[CALL_API]: {
		types: [ITEM_CREATE_REQUEST, ITEM_CREATE_SUCCESS, ITEM_CREATE_FAILURE],
		endpoint: '/api/items/',
		method: METHOD_POST,
		body: item
	}
});