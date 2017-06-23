import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, PasswordInput, Submit } from 'reactform';

import './changePassword.scss';

const passwordJointValidator = (value, { new_password, new_password_repeat }) => new_password == new_password_repeat ? null : 'Passwords must match';

export default class Component extends React.Component {

	submit = ({ current_password, new_password }) => {
		this.props.actions.changePassword(current_password, new_password);	
	};

	render() {
		let loader;
		const { authenticated, success, loading, error, errors  } = this.props;
		const { current_password, new_password } = errors;

		if (success) {
			return <Redirect to='/settings' />;
		}

		return (
			<Form noValidate onSubmit={this.submit} className='settings-form change-password-form form--purple'>
				<PasswordInput required name='current_password' error={current_password} placeholder='current password' />
				<PasswordInput required name='new_password' error={new_password} validator={passwordJointValidator} placeholder='new password' />
				<PasswordInput required name='new_password_repeat' error={new_password} validator={passwordJointValidator} placeholder='repeat new password' />
				<Submit className='btn btn--invisible' />
				<Link to='/settings' className='settings-form__cancel btn btn--invisible'>cancel</Link>
			</Form>
		);
	}

}