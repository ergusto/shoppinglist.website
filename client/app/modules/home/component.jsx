import React from 'react';
import { GridContainer, Row, Column } from 'grid-react';
import Loading from '../../components/loading/component.jsx';

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
		this.props.actions.requestItems(limit, offset);
	}

	render() {
		let loadingHtml, nextHtml;
		const { items, hasErrored, isLoading, next, count } = this.props;

		if (hasErrored) {
			return <p>Sorry! There was an error loading the items</p>;
		}

		if (isLoading && !items.length) {
			loadingHtml = <Loading />;
		}

		if (next) {
			nextHtml = <a href='#' className='item-list__next' onClick={this.request}>next</a>;
		}

		return (
			<div>
				<GridContainer>
					<Row>
						<Column tabletLarge={8} tabletLargeOffset={2}>
							<ItemCreate />
						</Column>
					</Row>
				</GridContainer>
				<GridContainer>
					<Row>
						<Column tabletLarge={8} tabletLargeOffset={2}>
							{loadingHtml}
							{items.length > 0 ? <ItemList items={items} /> : null}
							{nextHtml}
						</Column>
					</Row>
				</GridContainer>
			</div>
		);
	}

}