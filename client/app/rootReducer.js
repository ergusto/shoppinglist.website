import { combineReducers } from 'redux';

import { LOGOUT_SUCCESS } from './modules/auth';

import auth from './modules/auth';
import create from './modules/item';
import items from './modules/items';
import login from './modules/login';
import registration from './modules/registration';
import settings from './modules/settings';

const appReducer = combineReducers({
	auth,
	create,
	items,
	login,
	registration,
	settings
});

const rootReducer = (state, action) => {
	if (action.type === LOGOUT_SUCCESS) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;