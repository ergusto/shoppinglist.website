import { AppContainer } from 'react-hot-loader';

import React from 'react';
import { render } from 'react-dom';

import App from './app.jsx';

const start = () => (
	render(
		<AppContainer>
			<App />
		</AppContainer>,
	document.getElementById('root'))
);

export default start;