import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { PublicRoute, ProtectedRoute, AuthBasedSwitch } from './route-helpers.jsx';

import Header from './components/header/component.jsx';
import NotFound from './components/errors/not-found.jsx';

import { HomeRoute } from './modules/home';
import { LandingRoute } from './modules/landing';
import { LoginRoute } from './modules/login';
import { LogoutRoute } from './modules/auth';
import { RegistrationRoute } from './modules/registration';
import { SettingsRoute } from './modules/settings';

const Routes = ({ history }) => (
	<ConnectedRouter history={history}>
		<div className='app'>
			<Header />
			<Switch>
				<AuthBasedSwitch path='/' exact authComponent={HomeRoute} unauthComponent={LandingRoute} />

				<PublicRoute path='/login' component={LoginRoute} />
				<ProtectedRoute path='/logout' component={LogoutRoute} />
				<PublicRoute path='/register' component={RegistrationRoute} />
				<ProtectedRoute path='/settings' component={SettingsRoute} />
				
				<Route path='*' component={NotFound} />
			</Switch>
		</div>
	</ConnectedRouter>
);

export default Routes;