import React, { createElement } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from './components/header/component.jsx';

export const ProtectedRoute = ({ isAuthenticated, component, ...rest }) => (
	<Route {...rest} render={props => {
		return isAuthenticated ? createElement(component, props) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location },
			}} />
		)
	}}/>
);

export const PublicRoute = ({ isAuthenticated, component, ...rest }) => (
	<Route {...rest} render={props => {
		return isAuthenticated ? (
			<Redirect to={{
				pathname: '/',
				state: { from: props.location }
			}} />
		) : createElement(component, props)
	}} />
);

export const AuthBasedSwitch = ({ isAuthenticated, authComponent, unauthComponent, ...rest }) => {
	const component = isAuthenticated ? authComponent : unauthComponent;
	return <Route {...rest} render={props => createElement(component, props)} />;
};