import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import Routes from './routes.jsx';
import configureStore from './configureStore.js';

import './css/site.scss';
import 'font-awesome/scss/font-awesome.scss';

document.body.classList.add('bg-gradient');
if (!('ontouchstart' in document.documentElement)) {
	document.documentElement.classList.add('no-touch');
}

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const store = configureStore(routeMiddleware);

const app = () => (
	<Provider store={store}>
		<Routes history={history} />
	</Provider>
);

export default app;