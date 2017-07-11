import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import Routes from './routes.jsx';
import configureStore from './configureStore.js';

import './style.js';

const history = createHistory();
const store = configureStore(history);

const app = () => (
	<Provider store={store}>
		<Routes history={history} />
	</Provider>
);

export default app;