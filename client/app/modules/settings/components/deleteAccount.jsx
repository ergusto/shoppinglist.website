import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, PasswordInput, Submit } from 'reactform';

import Loading from '../../../components/loading/component.jsx';

import './deleteAccount.scss';

export default class Component extends React.Component {

	submit = ({ current_password }) => {
		this.props.actions.deleteAccount(current_password);
	};

	render() {
		let loader;
		const { authenticated, loading, error, errors  } = this.props;
		const { current_password } = errors;

		if (loading) {
			loader = <Loading />;
		}

		return (
			<Form noValidate onSubmit={this.submit} className='settings-form change-password-form form--purple'>
				<PasswordInput required name='current_password' error={current_password} placeholder='confirm password' />
				<Submit className='btn btn--invisible' value='delete account' />
				<Link to='/settings' className='settings-form__cancel btn btn--invisible'>cancel</Link>
			</Form>
		);
	}

}