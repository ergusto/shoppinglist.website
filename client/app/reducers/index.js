import { combineReducers } from 'redux';
import { LOGOUT_SUCCESS } from '../constants/actionTypes.js';
import create from './create.js';
import items from './items.js';
import auth from './auth.js';
import login from './login.js';
import registration from './registration.js';

const appReducer = combineReducers({
	create,
	items,
	auth,
	login,
	registration
});

const rootReducer = (state, action) => {
	if (action.type === LOGOUT_SUCCESS) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;