import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, TextInput, PasswordInput, Submit } from 'reactform';

import Loading from '../../../components/loading/component.jsx';
import { emailValidator, passwordLengthValidator, passwordEqualityValidator } from '../../../lib';
import FieldErrorComponent from '../../../components/auth-field-error.jsx';

const passwordJointValidator = (value, values) => {
	const password1 = values['password'];
	const password2 = values['password_repeat'];
	return password1 == password2 ? null : 'Passwords must match';
};

export default class Component extends React.Component {

	submit = ({ email, password }) => {
		this.props.actions.registerUser(email, password);
	};

	render() {
		let loader;
		const { loading, authenticated, error, errors } = this.props;
		const { email, password } = errors;

		if (authenticated) {
			return <Redirect to='/' />;
		}

		if (loading) {
			loader = <Loading />;
		}

		return (
			<div className='w-90 mw-6'>
				<Form fieldErrorComponent={FieldErrorComponent} formError={error} onSubmit={this.submit} className='white-form bg-white faint-blue bsh bra pa3 mh3 tmd-mh5  mb3' noValidate>
					<h3 className='align-center mb2 fs5'>Register</h3>
					<TextInput className='bs' required name='email' error={email} placeholder='email' validator={emailValidator} />
					<PasswordInput className='bs' required name='password' error={password} validator={[passwordLengthValidator, passwordEqualityValidator]} placeholder='password' />
					<PasswordInput className='bs' required name='password_repeat' error={password} validator={[passwordLengthValidator, passwordEqualityValidator]} placeholder='repeat password' />
					<Submit className='btn btn--blue btn--block mt2' value='register' />
					{loader}
				</Form>
			</div>
		);
	}

}

