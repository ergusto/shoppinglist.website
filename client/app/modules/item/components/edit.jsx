import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { objectNaiveEquivalence } from 'lib';
import { renderField, renderTextarea } from 'modules/form';
import validator from '../validator.js';

import './edit.scss';

class Component extends React.Component {

	submit = attrs => {
		const { actions, item } = this.props;
		const equivlanet = objectNaiveEquivalence(attrs, item);
		if (equivlanet) {
			actions.hideForm(item.id);
		} else {
			actions.editItem(item.id, attrs);
		}
	};

	setDescriptionHeight() {
		const { description } = this;
		if (description) {
			description.style.height = 'auto';
			description.style.height = (description.scrollHeight + 2) + 'px';
		}
	}

	onChange = event => {
		this.setDescriptionHeight();
	};

	descriptionRef = ref => {
		this.description = ref;
		this.setDescriptionHeight();
	};

	render() {
		const { handleSubmit, item, errors } = this.props;
		const { title, url, description } = errors;
		return (
			<form onSubmit={handleSubmit(this.submit)} className='item-edit-form purple-form' noValidate>
				<Field name='title' placeholder='title' type='text' serverError={errors['title']} component={renderField} />
				<Field name='url' placeholder='url' type='url' serverError={errors['url']} component={renderField} />
				<Field name='description' placeholder='description' type='description' serverError={errors['description']} component={renderTextarea} onChange={this.onChange} elementRef={this.descriptionRef} />
				<button type='submit' className='btn btn--clear spaceship-white'>submit</button>
			</form>
		);
	}

}

export default reduxForm({
	validate: validator
})(Component);