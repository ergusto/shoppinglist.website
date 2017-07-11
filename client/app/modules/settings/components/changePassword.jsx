import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { renderField } from 'modules/form';
import validator from '../validators/changePassword.js';

import Loading from 'app/components/loading/component.jsx';

import './changePassword.scss';

const passwordJointValidator = (value, { new_password, new_password_repeat }) => new_password == new_password_repeat ? null : 'Passwords must match';

class Component extends React.Component {

	submit = ({ current_password, new_password }) => {
		this.props.actions.changePassword(current_password, new_password);	
	};

	render() {
		let loader;
		const { handleSubmit, authenticated, api } = this.props;
		const { success, loading, error, errors } = api;
		const { current_password, new_password } = errors;

		if (success) {
			return <Redirect to='/settings' />;
		}

		if (loading) {
			loader = <Loading />;
		}

		return (
			<form onSubmit={handleSubmit(this.submit)} className='settings-form change-password-form purple-form'>
				<Field name='current_password' placeholder='confirm password' type='password' serverError={errors['current_password']} component={renderField} />
				<Field name='new_password' placeholder='new password' type='password' serverError={errors['new_password']} component={renderField} />
				<Field name='new_password_repeat' placeholder='repeat new password' type='password' serverError={errors['new_password_repeat']} component={renderField} />
				<input type='submit' className='btn btn--clear assistant' value='change password' />
				<Link to='/settings' className='btn btn--invisible'>cancel</Link>
			</form>
		);
	}

}

export default reduxForm({
	form: 'change_password',
	validate: validator
})(Component);