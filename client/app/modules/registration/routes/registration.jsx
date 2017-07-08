import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, TextInput, PasswordInput, Submit } from 'reactform';

import Loading from '../../../components/loading/component.jsx';
import { emailValidator } from '../../../lib';

import Registration from '../containers/registration.jsx';

const passwordJointValidator = (value, values) => {
	const password1 = values['password'];
	const password2 = values['password_repeat'];
	return password1 == password2 ? null : 'Passwords must match';
};

export default class Component extends React.Component {

	componentDidMount() {
		this.resize();
		window.addEventListener('resize', this.resize);
	}

	resize = () => {
		const header = document.querySelector('.site-header');
		const { wrapper } = this;

		if (wrapper) {
			const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			wrapper.style.minHeight = (windowHeight - header.clientHeight) + 'px';
		}
	};

	render() {
		return (
			<div ref={wrapper => this.wrapper = wrapper} className='white justify-centre text-centred'>
				<Registration />
			</div>
		);
	}

}

