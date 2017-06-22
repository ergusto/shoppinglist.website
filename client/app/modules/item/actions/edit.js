import { api } from '../../../lib';
import { unauthorised } from '../../auth';
import {
	ITEM_EDIT_REQUEST,
	ITEM_EDIT_FAILURE,
	ITEM_EDIT_SUCCESS
} from '../actionTypes.js';

export function editIsLoading(id, isLoading) {
	return {
		type: ITEM_EDIT_REQUEST,
		payload: {
			id,
			isLoading
		}
	};
}

export function editFailure(id, error) {
	return {
		type: ITEM_EDIT_FAILURE,
		payload: {
			id,
			error
		}
	};
}

export function editSuccess(item) {
	return {
		type: ITEM_EDIT_SUCCESS,
		payload: {
			item
		}
	};
}

// I thought this would be bad practice,
// but apparently Dan Abramov thinks it's permissable
// https://stackoverflow.com/a/33168143/4566267
export function editItem(id, attrs, callback) {
	return dispatch => {
		dispatch(editIsLoading(id, true));

		api.auth.patch(`/api/items/${id}/`, attrs, (err, res) => {
			dispatch(editIsLoading(id, false));

			if (res.ok) {
				const item = res.body;
				dispatch(editSuccess(item));
				if (callback) callback(item);
			} else {
				if (res.unauthorized) {
					dispatch(unauthorised());
				} else {
					dispatch(editFailure(id, true));
				}
			}
		});
	};
}