import React from 'react';
import TimeAgo from 'react-timeago';
import { VelocityTransitionGroup } from 'velocity-react';

import ItemEdit from '../containers/edit.jsx';

import './item.scss';

export default class Component extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			showBody: false,
			showCompleteConfirm: false,
		};
	}

	toggleBody = event => {
		if (event) event.preventDefault();
		const { showBody } = this.state;
		const { item, actions } = this.props;
		if (showBody) {
			actions.hideForm(item.id);
			this.setState({
				showBody: false,
				showCompleteConfirm: false,
			});
		} else {
			this.setState({
				showBody: true,
			});
		}
	};

	toggleForm = event => {
		if (event) event.preventDefault();
		const { actions, item, shouldShowForm } = this.props;
		if (shouldShowForm) {
			actions.hideForm(item.id);
		} else {
			actions.showForm(item.id);
		}
	};

	markComplete = event => {
		if (event) event.preventDefault();
		const { actions, item } = this.props;
		actions.markItemComplete(item.id);
	};

	renderItemForm() {
		const { item, shouldShowForm } = this.props;
		if (shouldShowForm) {
			return <ItemEdit item={item} form={`item-edit-${item.id}`} initialValues={item} />;
		}
	}

	toggleCompleteConfirm = event => {
		if (event) event.preventDefault();
		this.setState({
			showCompleteConfirm: !this.state.showCompleteConfirm,
		});
	};

	renderMarkComplete() {
		const { showCompleteConfirm } = this.state;

		if (showCompleteConfirm) {
			return (
				<div className='item-mark-complete-confirm'>
					<a onClick={this.toggleCompleteConfirm} href='#' className='item-cancel-mark-complete pull-right btn btn--small btn--clear'>cancel</a>
					<a onClick={this.markComplete} href='#' className='item-confirm-mark-complete pull-right btn btn--small btn--clear'>confirm</a>
				</div>
			);
		} else {
			return <a onClick={this.toggleCompleteConfirm} href='#' className='item-mark-complete pull-right btn btn--small btn--clear'>complete</a>;
		}
	}

	renderItemContent() {
		const { item, shouldShowForm } = this.props;
		if (!shouldShowForm && item.description) {
			return (
				<div className='item-content'>
					{item.description}
				</div>
			);
		}
	}

	renderBody() {
		const { showBody } = this.state;
		const { item, shouldShowForm } = this.props;
		if (showBody) {
			return (
				<div className='item-body clearfix'>
					<menu className='item-body-menu clearfix'>
						{this.renderMarkComplete()}
						<a onClick={this.toggleForm} href='#' className='item-edit pull-left btn btn--small btn--clear'>{shouldShowForm ? 'cancel' : 'edit'}</a>
						{item.url ? <a href={item.url} className='item-url pull-left btn btn--small btn--clear'>visit</a> : null}
					</menu>
					<VelocityTransitionGroup component='div' enter={{ animation: 'slideDown', duration: 400 }} leave={{ animation: 'slideUp', duration: 400 }}>
						{this.renderItemForm()}
						{this.renderItemContent()}
					</VelocityTransitionGroup>
				</div>
			);
		}
	}

	render() {
		const { item } = this.props;
		const { showBody } = this.state;

		const rootClassName = showBody ? 'item item--open' : 'item';

		return (
			<li className={rootClassName}>
				<header onClick={this.toggleBody} className='item-header'>
					<h3 className='item-title'>{item.title}</h3>
				</header>
				<VelocityTransitionGroup component='div' enter={{ animation: 'slideDown', duration: 400 }} leave={{ animation: 'slideUp', duration: 400 }}>
					{this.renderBody()}
				</VelocityTransitionGroup>
			</li>
		);
	}

}

