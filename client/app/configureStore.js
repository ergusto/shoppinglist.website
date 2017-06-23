import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import apiMiddleware from './middleware/api.js';
import authMiddleware from './middleware/auth.js';
import rootReducer from './rootReducer.js';

export default function configureStore(history) {
	const routerMiddleware = createRouterMiddleware(history);
	return createStore(
		rootReducer,
		applyMiddleware(thunkMiddleware, apiMiddleware, authMiddleware, routerMiddleware)
	);
}