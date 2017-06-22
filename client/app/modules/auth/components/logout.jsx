import React, { Component } from 'react';

export default class Container extends Component {

	componentWillMount() {
		this.props.actions.logoutUser();
		this.props.actions.push('/');
	}

	render() {
		return null;
	}

}