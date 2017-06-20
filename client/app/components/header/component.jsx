import React from 'react';

import Authenticated from './authenticated.jsx';
import Unauthenticated from './unauthenticated.jsx';

import './style.scss';

export default class Component extends React.Component {

	render() {
		return this.props.isAuthenticated ? <Authenticated /> : <Unauthenticated />;
	}
	
}