import React from 'react';
import { Link } from 'react-router-dom';

export default class Component extends React.Component {

	render() {
		return (
			<header id='site-header' className='bold spaceship-white clearfix pa2 mw-8 centred'>
				<Link to='/' className='btn btn--clear pull-left'>shoppinglist.website</Link>
				<Link to='/login' className='btn btn--clear pull-right'>login</Link>
				<Link to='/register' className='btn btn--clear pull-right'>register</Link>
			</header>
		);
	}

}