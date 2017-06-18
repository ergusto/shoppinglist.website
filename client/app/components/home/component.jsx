import React from 'react';
import { Route, Link } from 'react-router-dom';
import { GridContainer, Row, Column } from 'grid-react';

import List from '../item.list/component.jsx';
import Form from '../item.form/container.jsx';

import './style.scss';

export default class Component extends React.Component {

	render() {
		const { items } = this.props;

		return (
			<div>
				<GridContainer>
					<Row>
						<Column tabletLarge={8} tabletLargeOffset={2}>
							<Form />
						</Column>
					</Row>
				</GridContainer>
				<GridContainer>
					<Row>
						<Column tabletLarge={8} tabletLargeOffset={2}>
							{items.length > 0 ? <List items={items} /> : null}
						</Column>
					</Row>
				</GridContainer>
			</div>
		);
	}

}
