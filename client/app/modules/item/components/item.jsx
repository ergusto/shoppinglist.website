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
			showForm: false,
			showCompleteConfirm: false,
		};
	}

	toggleBody = event => {
		if (event) event.preventDefault();
		const { showBody } = this.state;
		if (showBody) {
			this.setState({
				showBody: false,
				showForm: false,
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
		this.setState({
			showForm: !this.state.showForm,
		});
	};

	markComplete = event => {
		if (event) event.preventDefault();
		const { actions, item } = this.props;
		actions.markItemComplete(item.id);
	};

	renderItemForm() {
		const { showForm } = this.state;
		const { item } = this.props;
		if (showForm) {
			return <ItemEdit item={item} onSuccess={this.toggleForm} />;
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
					<a onClick={this.toggleCompleteConfirm} href='#' className='item-cancel-mark-complete pull-right btn btn--small btn--invisible'>cancel</a>
					<a onClick={this.markComplete} href='#' className='item-confirm-mark-complete pull-right btn btn--small btn--invisible'>confirm</a>
				</div>
			);
		} else {
			return <a onClick={this.toggleCompleteConfirm} href='#' className='item-mark-complete pull-right btn btn--small btn--invisible'>complete</a>;
		}
	}

	renderItemContent() {
		const { showForm } = this.state;
		const { item } = this.props;
		if (!showForm && item.description) {
			return (
				<div className='item-content'>
					{item.description}
				</div>
			);
		}
	}

	renderBody() {
		const { item } = this.props;
		const { showBody, showForm } = this.state;
		if (showBody) {
			return (
				<div className='item-body clearfix'>
					<menu className='item-body-menu clearfix'>
						{this.renderMarkComplete()}
						<a onClick={this.toggleForm} href='#' className='item-edit pull-left btn btn--small btn--invisible'>{showForm ? 'cancel' : 'edit'}</a>
						{item.url ? <a href={item.url} className='item-url pull-left btn btn--small btn--invisible'>visit</a> : null}
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

