import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

import { PublicRoute, ProtectedRoute, AuthBasedSwitch } from './route-helpers.jsx';
import history from './lib/history.js';

import Header from './components/header/component.jsx';
import NotFound from './components/errors/not-found.jsx';

import { LogoutRoute } from './modules/auth';
import { RegistrationRoute } from './modules/registration';
import { LoginRoute } from './modules/login';
import { HomeRoute } from './modules/home';
import { LandingRoute } from './modules/landing';

class App extends Component {

	render() {
		return (
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<AuthBasedSwitch path='/' exact authComponent={HomeRoute} unauthComponent={LandingRoute} />

						<PublicRoute path='/login' component={LoginRoute} />
						<PublicRoute path='/register' component={RegistrationRoute} />
						<ProtectedRoute path='/logout' component={LogoutRoute} />
						
						<Route path='*' component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}

}

export default App;