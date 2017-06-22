import { api, setParams } from '../../lib';
import {
	ITEMS_REQUEST,
	ITEMS_FAILURE,
	ITEMS_SUCCESS
} from './actionTypes.js';

import { unauthorised } from '../auth';

export function itemsHasErrored(error) {
	return {
		type: ITEMS_FAILURE,
		payload: {
			error,
		}
	};
}

export function itemsIsLoading(bool) {
	return {
		type: ITEMS_REQUEST,
		payload: {
			isLoading: bool
		}
	};
}

export function itemsFetchDataSuccess(items, next, count) {
	return {
		type: ITEMS_SUCCESS,
		payload: {
			items,
			count,
			next
		}
	};
}

export function requestItems(limit, offset) {
	return (dispatch, getState) => {
		dispatch(itemsIsLoading(true));
		const url = setParams('/api/items/', {
			limit,
			offset
		});

		api.auth.get(url, (err, res) => {
			dispatch(itemsIsLoading(false));

			if (res.ok) {
				const { results, next, count } = res.body;
				dispatch(itemsFetchDataSuccess(results, !!next, count));
			} else {
				if (res.unauthorized) {
					dispatch(unauthorised());
				} else {
					dispatch(itemsHasErrored(true));
				}
			}
		});
	};
}

export function getItems() {}