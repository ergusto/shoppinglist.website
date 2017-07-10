import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validator from '../validator.js';

import './create.scss';

class Component extends React.Component {

	submit = item => {
		this.props.actions.createItem(item);
	};

	render() {
		const { handleSubmit } = this.props;
		const { success, error, errors } = this.props.api;

		return (
			<form onSubmit={handleSubmit(this.submit)} className='add-item'>
				<Field name='title' placeholder='add item' type='text' component='input' className='field' />
				<div className='add-item-submit-wrap'>
					<input type='submit' className='btn assistant' value='submit' />
				</div>
			</form>
		);
	}

}

export default reduxForm({
	form: 'create',
	validate: validator,
})(Component);