import React from 'react';
import TimeAgo from 'react-timeago';
import { VelocityTransitionGroup } from 'velocity-react';

import Edit from '../item.edit/container.jsx';

import './style.scss';

export default class Component extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			showBody: false,
			showForm: false,
		};
	}

	toggleBody = event => {
		if (event) event.preventDefault();
		const { showBody } = this.state;
		if (showBody) {
			this.setState({
				showBody: false,
				showForm: false,
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
			return <Edit item={item} onSuccess={this.toggleForm} />;
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
						<a onClick={this.markComplete} href='#' className='item-mark-complete pull-right btn btn--small btn--invisible'>complete</a>
						{item.url ? <a href={item.url} className='item-url pull-right btn btn--small btn--invisible'>visit</a> : null}
						<a onClick={this.toggleForm} href='#' className='item-edit pull-left btn btn--small btn--invisible'>{showForm ? 'cancel' : 'edit'}</a>
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

