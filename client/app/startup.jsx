import { AppContainer } from 'react-hot-loader';

import React from 'react';
import { render } from 'react-dom';

import app from './app.jsx';

const start = Component => (
	render(
		<AppContainer>
			<Component />
		</AppContainer>,
	document.getElementById('root'))
);

start(app);

if (module.hot) {
	module.hot.accept('./app.jsx', function() {
		start(app);
	});
}