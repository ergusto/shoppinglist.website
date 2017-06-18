import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Submit } from 'reactform';

import { getUser } from '../../lib/auth.js';
import api from '../../lib/api.js';

import './style.scss';

export default class Component extends React.Component {

	add = item => {
		this.props.actions.addItem(item);
	};

	render() {
		return (
			<Form onSubmit={this.add} className='add-item' resetOnSuccess={true}>
				<Input required name='title' placeholder='add item' fieldsetComponent={false} />
				<div className='add-item-submit-wrap'>
					<Submit className='btn' />
				</div>
			</Form>
		);
	}

}

