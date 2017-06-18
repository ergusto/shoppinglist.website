import React from 'react';
import { Redirect } from 'react-router-dom';
import { GridContainer, Row, Column } from 'grid-react';
import { Form, TextInput, PasswordInput, Submit } from 'reactform';

import Loading from '../object.loading/component.jsx';
import { emailValidator } from '../../lib/validators.js';

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
			<div ref={wrapper => this.wrapper = wrapper} className='white justify-centre text-centred'>
				<GridContainer>
					<Row>
						<Column tabletSmall='10' tabletSmallOffset='1' tabletLarge='6' tabletLargeOffset='3' screenSmall='4' screenSmallOffset='4' centre>
							<Form formError={error} onSubmit={this.submit} className='auth-form margin-bottom box box--heavy padding-md' noValidate>
								<h3>Register</h3>
								<TextInput required name='email' error={email} placeholder='email' validator={emailValidator} />
								<PasswordInput required name='password' error={password} validator={passwordJointValidator} placeholder='password' />
								<PasswordInput required name='password_repeat' error={password} validator={passwordJointValidator} placeholder='repeat password' />
								<Submit className='btn btn--blue btn--block' value='Register' />
								{loader}
							</Form>
						</Column>
					</Row>
				</GridContainer>
			</div>
		);
	}

}

