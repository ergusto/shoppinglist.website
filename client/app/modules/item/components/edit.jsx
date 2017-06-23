import React from 'react';
import { Form, TextInput, URLInput, Textarea, Submit } from 'reactform';
import { objectNaiveEquivalence } from '../../../lib';

import './edit.scss';

export default class Component extends React.Component {

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

	descriptionChangeHandler = event => {
		this.setDescriptionHeight();
	};

	render() {
		const { item, errors } = this.props;
		const { title, url, description } = errors;
		return (
			<Form noValidate onSubmit={this.submit} className='item-edit-form form--purple'>
				<TextInput required name='title' placeholder='title' error={title} defaultValue={item.title} />
				<URLInput name='url' placeholder='url' error={url} defaultValue={item.url} />
				<Textarea elementRef={description => {
					this.description = description;
					this.setDescriptionHeight();
				}} onInput={this.descriptionChangeHandler} name='description' placeholder='description' error={description} defaultValue={item.description} rows='3'>{item.description}</Textarea>
				<Submit className='btn btn--invisible' />
			</Form>
		);
	}

}