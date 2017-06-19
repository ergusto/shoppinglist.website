import React, { createElement } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './lib/auth.js';

import Header from './components/header/component.jsx';

export const ProtectedRoute = ({ component, ...rest }) => (
	<Route {...rest} render={props => {
		return isAuthenticated() ? createElement(component, props) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location },
			}} />
		)
	}}/>
);

export const PublicRoute = ({ component, ...rest }) => (
	<Route {...rest} render={props => {
		return isAuthenticated() ? (
			<Redirect to={{
				pathname: '/',
				state: { from: props.location }
			}} />
		) : createElement(component, props)
	}} />
);

export const AuthBasedSwitch = ({ authComponent, unauthComponent, ...rest }) => {
	const component = isAuthenticated() ? authComponent : unauthComponent;
	return <Route {...rest} render={props => createElement(component, props)} />;
};
