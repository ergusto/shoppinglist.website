import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, TextInput, PasswordInput, Submit } from 'reactform';

import Loading from '../../../components/loading/component.jsx';
import { emailValidator } from '../../../lib';
import FieldErrorComponent from '../../../components/auth-field-error.jsx';

import './login.scss';

export default class Component extends React.Component {

	submit = ({ email, password }) => {
		this.props.actions.loginUser(email, password);	
	};

	render() {
		let loader;
		const { authenticated, loading, error, errors } = this.props;

		if (loading) {
			loader = <Loading />;
		}

		if (authenticated) {
			return <Redirect to='/' />;
		}

		return (
			<Form fieldErrorComponent={FieldErrorComponent} formError={error} onSubmit={this.submit} className='white-form bg-white faint-blue bsh bra pa3 mb3 w-90 mlg-w-70 tmd-w-50 ssm-w-30 sxlg-w-20 mw-6' noValidate>
				<h3 className='align-center mb2 fs5'>Login</h3>
				<TextInput className='bs' required name='email' placeholder='email' validator={emailValidator} />
				<PasswordInput className='bs' required name='password' placeholder='password' />
				<Submit className='btn btn--blue btn--block fs6 mt2' value='login' />
				{loader}
			</Form>
		);
	}

}