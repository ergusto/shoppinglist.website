import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import Loading from 'app/components/loading/component.jsx';
import { renderField } from 'modules/form';
import validator from '../validator.js';

import './login.scss';

class Component extends React.Component {

	submit = ({ email, password }) => {
		this.props.actions.loginUser(email, password);	
	};

	render() {
		let loader;
		const { handleSubmit, authenticated } = this.props;
		const { error, errors, loading } = this.props.api;

		if (loading) {
			loader = <Loading />;
		}

		if (authenticated) {
			return <Redirect to='/' />;
		}

		return (
			<div className='w-90 mw-6'>
				<form onSubmit={handleSubmit(this.submit)} className='white-form bg-spaceship-white faint-blue bsh bra pa3 mh3 tmd-mh5 mb3' noValidate>
					<h3 className='align-center mb2 fs5'>Login</h3>
					<Field name='email' placeholder='email' type='text' serverError={errors['email']} component={renderField} />
					<Field name='password' placeholder='password' type='password' serverError={errors['password']} component={renderField} />
					<button type='submit' className='btn btn--blue btn--block fs6 mt2'>login</button>
					{error ? <div className='form-error'>{error}</div> : null}
					{loader}
				</form>
			</div>
		);
	}

}

export default reduxForm({
	form: 'login',
	validate: validator,
})(Component);