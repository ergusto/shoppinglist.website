import { api } from '../../../lib';
import { unauthorised } from '../../auth';
import {
	ITEM_CREATE_REQUEST,
	ITEM_CREATE_SUCCESS,
	ITEM_CREATE_FAILURE
} from '../actionTypes.js';

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
				if (res.unauthorized) {
					dispatch(unauthorised());
				} else {
					dispatch(createHasErrored(true));
				}
			}
		});
	};
}