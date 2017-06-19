import api from '../../lib/api.js';
import {
	ITEMS_REQUEST,
	ITEMS_FAILURE,
	ITEMS_SUCCESS
} from './actionTypes.js';

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

export function itemsFetchDataSuccess(items) {
	return {
		type: ITEMS_SUCCESS,
		payload: {
			items
		}
	};
}

export function requestItems() {
	return dispatch => {
		dispatch(itemsIsLoading(true));

		api.auth.get('/api/items/', (err, res) => {
			dispatch(itemsIsLoading(false));

			if (res.ok) {
				const { results } = res.body;
				dispatch(itemsFetchDataSuccess(results));
			} else {
				dispatch(itemsHasErrored(true));
			}
		});
	};
}