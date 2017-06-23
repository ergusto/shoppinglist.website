import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './middleware/api.js';
import authMiddleware from './middleware/auth.js';
import rootReducer from './rootReducer.js';

export default function configureStore(routeMiddleware) {
	return createStore(
		rootReducer,
		applyMiddleware(thunkMiddleware, apiMiddleware, authMiddleware, routeMiddleware)
	);
}