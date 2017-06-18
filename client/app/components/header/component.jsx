import React from 'react';
import { isAuthenticated } from '../../lib/auth.js';

import Authenticated from './authenticated.jsx';
import Unauthenticated from './unauthenticated.jsx';

import './style.scss';

export default class Component extends React.Component {

	render() {
		return isAuthenticated() ? <Authenticated /> : <Unauthenticated />;
	}
	
}
