import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router';

import { PublicRoute, ProtectedRoute, AuthBasedSwitch } from './route-helpers.jsx';
import history from '../lib/history.js';

import Header from './header/component.jsx';
import NotFound from './errors/not-found.jsx';

import Landing from './landing/component.jsx';
import Register from './auth.register/container.jsx';
import Login from './auth.login/container.jsx';

import Home from './home/container.jsx';
import Logout from './auth.logout/container.jsx';


class App extends Component {

	render() {
		return (
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<AuthBasedSwitch path='/' exact authComponent={Home} unauthComponent={Landing} />

						<PublicRoute path='/login' component={Login} />
						<PublicRoute path='/register' component={Register} />
						<ProtectedRoute path='/logout' component={Logout} />
						
						<Route path='*' component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}

}

export default App;