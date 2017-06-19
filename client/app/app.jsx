import React from 'react';
import { Provider } from 'react-redux';

import viewportUnitsBuggyfill from 'viewport-units-buggyfill';

import Routes from './routes.jsx';
import configureStore from './configureStore.js';

import './css/site.scss';
import 'font-awesome/scss/font-awesome.scss';

viewportUnitsBuggyfill.init();

document.body.classList.add('bg-gradient');

const store = configureStore();

const app = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
);

export default app;