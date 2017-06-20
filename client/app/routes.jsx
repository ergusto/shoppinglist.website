import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { PublicRoute, ProtectedRoute, AuthBasedSwitch } from './route-helpers.jsx';

import Header from './components/header/component.jsx';
import NotFound from './components/errors/not-found.jsx';

import { LogoutRoute } from './modules/auth';
import { RegistrationRoute } from './modules/registration';
import { LoginRoute } from './modules/login';
import { HomeRoute } from './modules/home';
import { LandingRoute } from './modules/landing';
import { SettingsRoute } from './modules/settings';

export default class Routes extends Component {

	render() {
		const { history } = this.props;

		return (
			<ConnectedRouter history={history}>
				<div>
					<Header />
					<Switch>
						<AuthBasedSwitch path='/' exact authComponent={HomeRoute} unauthComponent={LandingRoute} />

						<PublicRoute path='/login' component={LoginRoute} />
						<PublicRoute path='/register' component={RegistrationRoute} />
						<ProtectedRoute path='/logout' component={LogoutRoute} />
						<ProtectedRoute path='/settings' component={SettingsRoute} />
						
						<Route path='*' component={NotFound} />
					</Switch>
				</div>
			</ConnectedRouter>
		);
	}

}