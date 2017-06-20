import React, { createElement } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './components/header/component.jsx';

const mapStateToProps = state => ({ isAuthenticated: state.auth.authenticated });

const ProtectedRouteBase = ({ isAuthenticated, component, ...rest }) => (
	<Route {...rest} render={props => {
		return isAuthenticated ? createElement(component, props) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location },
			}} />
		)
	}}/>
);

const PublicRouteBase = ({ isAuthenticated, component, ...rest }) => (
	<Route {...rest} render={props => {
		return isAuthenticated ? (
			<Redirect to={{
				pathname: '/',
				state: { from: props.location }
			}} />
		) : createElement(component, props)
	}} />
);

const AuthBasedSwitchBase = ({ isAuthenticated, authComponent, unauthComponent, ...rest }) => {
	console.log(isAuthenticated);
	const component = isAuthenticated ? authComponent : unauthComponent;
	return <Route {...rest} render={props => createElement(component, props)} />;
};

export const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteBase);
export const PublicRoute = connect(mapStateToProps)(PublicRouteBase);
export const AuthBasedSwitch = connect(mapStateToProps)(AuthBasedSwitchBase);