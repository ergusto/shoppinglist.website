import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { UNAUTHORISED, LOGOUT_SUCCESS, DELETE_ACCOUNT_SUCCESS } from 'modules/auth';

import auth from 'modules/auth';
import form from 'modules/form';
import create from 'modules/item';
import items from 'modules/items';
import login from 'modules/login';
import registration from 'modules/registration';
import settings from 'modules/settings';

const appReducer = combineReducers({
	auth,
	create,
	form,
	items,
	login,
	registration,
	router: routerReducer,
	settings
});

const rootReducer = (state, action) => {
	if (action.type === LOGOUT_SUCCESS || action.type === UNAUTHORISED) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;