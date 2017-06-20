import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer.js';

export default function configureStore(routeMiddleware) {
	return createStore(
		rootReducer,
		applyMiddleware(thunk, routeMiddleware)
	);
}