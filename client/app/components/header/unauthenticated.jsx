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
							<Link to='/login' className='header-link btn btn--invisible pull-right'>login</Link>
							<Link to='/register' className='header-link btn btn--invisible pull-right'>register</Link>
						</header>
					</Column>
				</Row>
			</GridContainer>
		);
	}

}
