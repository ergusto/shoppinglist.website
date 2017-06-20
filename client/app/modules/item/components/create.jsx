import React from 'react';
import { Form, Input, Submit } from 'reactform';

import './create.scss';

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