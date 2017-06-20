import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PublicRoute, ProtectedRoute, AuthBasedSwitch } from './route-helpers.jsx';
import history from './lib/history.js';

import Header from './components/header/component.jsx';
import NotFound from './components/errors/not-found.jsx';

import { LogoutRoute } from './modules/auth';
import { RegistrationRoute } from './modules/registration';
import { LoginRoute } from './modules/login';
import { HomeRoute } from './modules/home';
import { LandingRoute } from './modules/landing';
import { SettingsRoute } from './modules/settings';

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.authenticated
	};
};

class Routes extends Component {

	render() {
		const { isAuthenticated } = this.props;

		return (
			<Router history={history}>
				<div>
					<Header isAuthenticated={isAuthenticated} />
					<Switch>
						<AuthBasedSwitch isAuthenticated={isAuthenticated} path='/' exact authComponent={HomeRoute} unauthComponent={LandingRoute} />

						<PublicRoute isAuthenticated={isAuthenticated} path='/login' component={LoginRoute} />
						<PublicRoute isAuthenticated={isAuthenticated} path='/register' component={RegistrationRoute} />
						<ProtectedRoute isAuthenticated={isAuthenticated} path='/logout' component={LogoutRoute} />
						<ProtectedRoute isAuthenticated={isAuthenticated} path='/settings' component={SettingsRoute} />
						
						<Route path='*' component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}

}

export default connect(mapStateToProps)(Routes);