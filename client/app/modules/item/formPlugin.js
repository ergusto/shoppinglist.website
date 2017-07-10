import { ITEM_CREATE_SUCCESS } from './actionTypes.js';

export default function(state, action) {
	switch(action.type) {
		case ITEM_CREATE_SUCCESS:
			return undefined;
		default:
			return state;
	}
}