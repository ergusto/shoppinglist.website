import React from 'react';

import { ItemCreate } from '../item';
import { ItemList } from '../items';

import './style.scss';

export default class Component extends React.Component {

	componentDidMount() {
		const { items } = this.props;
		if (!items.length) this.request();
	}

	request = event => {
		event && event.preventDefault();
		const { limit, offset } = this.props;
		this.props.actions.loadItems(limit, offset);
	}

	render() {
		let contentHtml, nextHtml;
		const { items, error, loading, next, count } = this.props;

		if (error) {
			return <p>Sorry! There was an error loading the items</p>;
		}

		if (next) {
			nextHtml = <a href='#' className='item-list__next' onClick={this.request}>next</a>;
		}

		if (items.length) {
			contentHtml = <ItemList items={items} />;
		} else {
			if (!loading) {
				contentHtml = (
					<div className='empty-items-message'>
						<p className='spaceship-white medium'>Items will appear here once you've added some using the form above.</p>
					</div>
				);
			}
		}

		return (
			<div className='mt2 ph3 mw-7 centred'>
				<ItemCreate />
				{contentHtml}
				{nextHtml}
			</div>
		);
	}

}