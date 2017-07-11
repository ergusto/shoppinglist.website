import start from './startup/index.jsx';

start();

if (module.hot) {
	module.hot.accept('./startup/app.jsx', function() {
		start();
	});
}