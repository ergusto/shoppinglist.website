import React from 'react';
import { Form, TextInput, URLInput, Textarea, Submit } from 'reactform';
import { objectNaiveEquivalence } from '../../../lib';

import './edit.scss';

export default class Component extends React.Component {

	submit = attrs => {
		const { item } = this.props;
		const difference = objectNaiveEquivalence(attrs, item);
		if (difference) {
			actions.editItem(item.id, attrs, this.editComplete);
		} else {
			this.editComplete();
		}
	};

	editComplete = () => {
		const { onSuccess } = this.props;
		if (onSuccess) onSuccess();
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
		const { item } = this.props;
		return (
			<Form noValidate onSubmit={this.submit} className='item-edit-form form--purple'>
				<TextInput required name='title' placeholder='title' defaultValue={item.title} />
				<URLInput name='url' placeholder='url' defaultValue={item.url} />
				<Textarea elementRef={description => {
					this.description = description;
					this.setDescriptionHeight();
				}} onInput={this.descriptionChangeHandler} name='description' defaultValue={item.description} placeholder='description' rows='3'>{item.description}</Textarea>
				<Submit className='btn btn--invisible' />
			</Form>
		);
	}

}