import React from 'react';
import { Link } from 'react-router-dom';

export default class Component extends React.Component {

	render() {
		return (
			<header className='site-header clearfix mw-8 centred'>
				<Link to='/' className='header-link btn btn--clear pull-left'>shoppinglist.website</Link>
				<Link to='/login' className='header-link btn btn--clear pull-right'>login</Link>
				<Link to='/register' className='header-link btn btn--clear pull-right'>register</Link>
			</header>
		);
	}

}