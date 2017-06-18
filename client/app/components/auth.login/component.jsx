import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { GridContainer, Row, Column } from 'grid-react';
import { Form, TextInput, PasswordInput, Submit } from 'reactform';

import Loading from '../object.loading/component.jsx';
import { emailValidator } from '../../lib/validators.js';

import './style.scss';

export default class Login extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			success: false,
		};
	}

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
	}

	submit = ({ email, password }) => {
		this.props.actions.loginUser(email, password);	
	};

	render() {
		let loader;
		const { authenticated, loading, error } = this.props;

		if (loading) {
			loader = <Loading />;
		}

		if (authenticated) {
			return <Redirect to='/' />;
		}

		return (
			<div ref={wrapper => this.wrapper = wrapper} className='justify-centre'>
				<GridContainer>
					<Row>
						<Column tabletSmall='10' tabletSmallOffset='1' tabletLarge='6' tabletLargeOffset='3' screenSmall='4' screenSmallOffset='4' centre>
							<Form formError={error} onSubmit={this.submit} className='auth-form margin-bottom box box--heavy padding-md' noValidate>
								<h3>Login</h3>
								<TextInput required name='email' placeholder='email' validator={emailValidator} />
								<PasswordInput required name='password' placeholder='password' />
								<Submit className='btn btn--blue btn--block' value='Login' />
								{loader}
							</Form>
						</Column>
					</Row>
				</GridContainer>
			</div>
		);
	}

}