import React, { Component } from 'react';
import { GridContainer, Row, Column } from 'grid-react';

import Settings from '../components/settings.jsx';

export default class SettingsRoute extends Component {

	render() {
		return (
			<GridContainer>
				<Row>
					<Column tabletSmall='10' tabletSmallOffset='1' tabletLarge='6' tabletLargeOffset='3' centre>
						<Settings />
					</Column>
				</Row>
			</GridContainer>
		);
	}

}
