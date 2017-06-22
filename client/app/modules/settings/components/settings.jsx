import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import SettingsMenu from './menu.jsx';
import ChangePasswordRoute from '../routes/changePassword.jsx';
import DeleteAccountRoute from '../routes/deleteAccount.jsx';

import './settings.scss';

const Settings = () => (
	<div className='settings'>
		<header className='settings-header'>
			<h3>settings</h3>
		</header>
		<div className='settings-body'>
			<Route exact path='/settings' component={SettingsMenu} />	
			<Route exact path='/settings/change-password' component={ChangePasswordRoute} />
			<Route exact path='/settings/delete-account' component={DeleteAccountRoute} />
		</div>
	</div>
);

export default Settings;
