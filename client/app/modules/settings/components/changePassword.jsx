import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, PasswordInput, Submit } from 'reactform';

import Loading from '../../../components/loading/component.jsx';

import './changePassword.scss';

const passwordJointValidator = (value, values) => {
	const password1 = values['new_password'];
	const password2 = values['new_password_repeat'];
	return password1 == password2 ? null : 'Passwords must match';
};

export default class Component extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			success: false,
		};
	}

	componentWillUnmount() {
		this.props.actions.resetState();
	}

	submit = ({ current_password, new_password }) => {
		this.props.actions.changePassword(current_password, new_password, this.onSuccess);	
	};

	onSuccess = () => {
		this.setState({ success: true });
	};

	render() {
		let loader;
		const { success } = this.state;
		const { authenticated, loading, error, errors  } = this.props;
		const { current_password, new_password } = errors;

		if (success) {
			return <Redirect to='/settings' />;
		}

		if (loading) {
			loader = <Loading />;
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