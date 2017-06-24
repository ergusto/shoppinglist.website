import React, { Component } from 'react';

export default class Container extends Component {

	componentWillMount() {
		this.props.logoutUser();
	}

	render() {
		return null;
	}

}