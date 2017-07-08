import React from 'react';
import { Form, Input, Submit } from 'reactform';

import './create.scss';

export default class Component extends React.Component {

	create = item => {
		this.props.actions.createItem(item);
	};

	render() {
		const { success, error, errors } = this.props;

		return (
			<Form reset={success} onSubmit={this.create} className='add-item'>
				<Input required name='title' placeholder='add item' fieldsetComponent={false} hideError={true} />
				<div className='add-item-submit-wrap'>
					<Submit className='btn assistant' />
				</div>
			</Form>
		);
	}

}