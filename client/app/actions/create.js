import api from '../lib/api.js';
import {
	ITEM_CREATE_REQUEST,
	ITEM_CREATE_SUCCESS,
	ITEM_CREATE_FAILURE
} from '../constants/actionTypes.js';

export function createIsLoading(bool) {
	return {
		type: ITEM_CREATE_REQUEST,
		payload: {
			isLoading: bool
		}
	};
}

export function createHasErrored(error) {
	return {
		type: ITEM_CREATE_FAILURE,
		payload: {
			error,
		}
	};
}

export function createSuccess(item) {
	return {
		type: ITEM_CREATE_SUCCESS,
		payload: {
			item,
		}
	};
}

export function addItem(item) {
	return dispatch => {
		dispatch(createIsLoading(true));

		api.auth.post('/api/items/', item, (err, res) => {
			dispatch(createIsLoading(false));

			if (res.ok) {
				const item = res.body;
				dispatch(createSuccess(item));
			} else {
				dispatch(createHasErrored(true));
			}
		});
	};
}
