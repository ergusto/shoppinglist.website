import React from 'react';
import { Provider } from 'react-redux';

import viewportUnitsBuggyfill from 'viewport-units-buggyfill';

import App from './components/App.jsx';
import configureStore from './store/configure.js';

import './css/site.scss';
import 'font-awesome/scss/font-awesome.scss';

viewportUnitsBuggyfill.init();

document.body.classList.add('bg-gradient');

const store = configureStore();

const app = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default app;