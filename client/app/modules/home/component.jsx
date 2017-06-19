import React from 'react';
import { GridContainer, Row, Column } from 'grid-react';

import { ItemCreate } from '../item';
import { ItemList } from '../items';

export default class Component extends React.Component {

	componentDidMount() {
		this.props.actions.requestItems();
	}

	render() {
		const { items, hasErrored, isLoading } = this.props;

		if (hasErrored) {
			return <p>Sorry! There was an error loading the items</p>;
		}

		if (isLoading) {
			return <p>Loading...</p>;
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
							{items.length > 0 ? <ItemList items={items} /> : null}
						</Column>
					</Row>
				</GridContainer>
			</div>
		);
	}

}