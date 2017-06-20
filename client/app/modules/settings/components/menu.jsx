import React from 'react';
import { Link } from 'react-router-dom';

import './menu.scss';

export default class Component extends React.Component {

	render() {
		return (
			<ul className='settings-menu'>
				<li><Link to='/settings/change-password'>change password</Link></li>
				<li><Link to='/settings/delete-account'>delete account</Link></li>
			</ul>
		);
	}

}

