import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const root = document.getElementById('root');

const start = Component => (
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
	root)
);

start(App);

if (module.hot) {
	module.hot.accept('./components/App.jsx', function() {
		start(App)
	});
}