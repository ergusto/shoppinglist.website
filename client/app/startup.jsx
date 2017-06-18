import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import app from './app.jsx';

const start = Component => (
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
	document.getElementById('root'))
);

start(app);

if (module.hot) {
	module.hot.accept('./components/App.jsx', function() {
		start(app);
	});
}