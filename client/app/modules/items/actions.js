import { setParams } from 'lib';
import { CALL_API, METHOD_GET } from 'app/middleware/api.js';
import {
	ITEMS_REQUEST,
	ITEMS_FAILURE,
	ITEMS_SUCCESS
} from './actionTypes.js';

const baseUrl = '/api/items/';

const requestItems = url => ({
	[CALL_API]: {
		types: [ITEMS_REQUEST, ITEMS_SUCCESS, ITEMS_FAILURE],
		endpoint: url,
		method: METHOD_GET 
	}
});

export const loadItems = (limit, offset) => (dispatch, getState) => {
	const url = setParams(baseUrl, {
		limit, offset
	});

	return dispatch(requestItems(url));
}