import React from 'react';
import { Link } from 'react-router-dom';
import { GridContainer, Row, Column } from 'grid-react';

export default class Component extends React.Component {

	render() {
		return (
			<GridContainer>
				<Row>
					<Column mobileSmall='12'>
						<header className='site-header clearfix'>
							<Link to='/' className='header-link btn btn--invisible pull-left'>shoppinglist.website</Link>
							<Link to='/logout' className='header-link btn btn--invisible pull-right'>logout</Link>
							<Link to='/settings' className='header-link btn btn--invisible pull-right'>settings</Link>
						</header>
					</Column>
				</Row>
			</GridContainer>
		);
	}

}
