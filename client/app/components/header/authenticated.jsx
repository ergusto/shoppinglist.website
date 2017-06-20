import React from 'react';
import { Link } from 'react-router-dom';
import { GridContainer, Row, Column } from 'grid-react';
import { getUser } from '../../lib/auth.js';

export default class Component extends React.Component {

	render() {
		const user = getUser(); 
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
