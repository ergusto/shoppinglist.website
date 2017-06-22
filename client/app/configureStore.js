import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer.js';

export default function configureStore(routeMiddleware) {
	return createStore(
		rootReducer,
		applyMiddleware(thunkMiddleware, routeMiddleware)
	);
}