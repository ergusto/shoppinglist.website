import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Container extends Component {

	componentWillMount() {
		this.props.actions.logoutUser();
	}

	render() {
		return <Redirect to='/' />;
	}

}