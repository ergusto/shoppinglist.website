import { api } from '../../../lib';
import { unauthorised } from '../../auth';
import {
	ITEM_MARK_COMPLETE_REQUEST,
	ITEM_MARK_COMPLETE_FAILURE,
	ITEM_MARK_COMPLETE_SUCCESS
} from '../actionTypes.js';

export function markCompleteIsLoading(id, isLoading) {
	return {
		type: ITEM_MARK_COMPLETE_REQUEST,
		payload: {
			id,
			isLoading
		}
	};
}

export function markCompleteFailure(id, error) {
	return {
		type: ITEM_MARK_COMPLETE_FAILURE,
		payload: {
			id,
			error
		}
	};
}

export function markCompleteSuccess(item) {
	return {
		type: ITEM_MARK_COMPLETE_SUCCESS,
		payload: {
			item
		}
	};
}

export function markItemComplete(id) {
	return dispatch => {
		dispatch(markCompleteIsLoading(id, true));

		api.auth.patch(`/api/items/${id}/`, { complete: true }, (err, res) => {
			dispatch(markCompleteIsLoading(id, false));

			if (res.ok) {
				const item = res.body;
				dispatch(markCompleteSuccess(item));
			} else {
				if (res.unauthorized) {
					dispatch(unauthorised());
				} else {
					dispatch(markCompleteFailure(id, true));
				}	
			}
		});
	};
}