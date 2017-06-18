import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../../lib/auth.js';

export default class Container extends Component {

	componentWillMount() {
		logout(() => {
			this.props.actions.logoutUser();		
		});
	}

	render() {
		return <Redirect to='/' />;
	}

}
