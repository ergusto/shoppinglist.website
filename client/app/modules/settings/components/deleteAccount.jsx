import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { renderField } from 'modules/form';
import validator from '../validators/deleteAccount.js';

import Loading from 'app/components/loading/component.jsx';

import './deleteAccount.scss';

class Component extends React.Component {

	submit = ({ current_password }) => {
		this.props.actions.deleteAccount(current_password);
	};

	render() {
		let loader;
		const { handleSubmit, authenticated, api } = this.props;
		const { success, loading, error, errors } = api;
		const { current_password, new_password } = errors;

		if (success) {
			return <Redirect to='/logout' />;
		}

		if (loading) {
			loader = <Loading />;
		}

		return (
			<form onSubmit={handleSubmit(this.submit)} className='settings-form change-password-form purple-form'>

				<Field name='current_password' placeholder='confirm password' type='password' serverError={errors['current_password']} component={renderField} />
				<input type='submit' className='btn btn--clear assistant' value='delete account' />
				<Link to='/settings' className='btn btn--clear assistant'>cancel</Link>
			</form>
		);
	}

}

export default reduxForm({
	form: 'delete_account',
	validate: validator
})(Component);