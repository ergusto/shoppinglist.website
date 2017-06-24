import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, TextInput, PasswordInput, Submit } from 'reactform';

import Loading from '../../../components/loading/component.jsx';
import { emailValidator } from '../../../lib';

import './login.scss';

export default class Component extends React.Component {

	submit = ({ email, password }) => {
		this.props.actions.loginUser(email, password);	
	};

	render() {
		let loader;
		const { authenticated, loading, error, errors } = this.props;
		console.log(this.props);

		if (loading) {
			loader = <Loading />;
		}

		if (authenticated) {
			return <Redirect to='/' />;
		}

		return (
			<Form formError={error} onSubmit={this.submit} className='auth-form margin-bottom box box--heavy padding-md' noValidate>
				<h3>Login</h3>
				<TextInput required name='email' placeholder='email' validator={emailValidator} />
				<PasswordInput required name='password' placeholder='password' />
				<Submit className='btn btn--blue btn--block' value='Login' />
				{loader}
			</Form>
		);
	}

}