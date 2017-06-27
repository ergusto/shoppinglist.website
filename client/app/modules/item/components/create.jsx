import React from 'react';
import { Form, Input, Submit } from 'reactform';

import './create.scss';

export default class Component extends React.Component {

	componentWillReceiveProps(nextProps) {
		if (nextProps.success) {
			this.input.blur();
		}
	}

	create = item => {
		this.props.actions.createItem(item);
	};

	render() {
		const { success, error, errors } = this.props;

		return (
			<Form reset={success} onSubmit={this.create} className='add-item'>
				<Input elementRef={input => this.input = input} required name='title' placeholder='add item' fieldsetComponent={false} hideError={true} />
				<div className='add-item-submit-wrap'>
					<Submit className='btn' />
				</div>
			</Form>
		);
	}

}