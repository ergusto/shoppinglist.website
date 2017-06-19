import React from 'react';
import { GridContainer, Row, Column } from 'grid-react';
import { Link } from 'react-router-dom';

import './style.scss';

export default class Component extends React.Component {

	componentDidMount() {
		this.resize();
		window.addEventListener('resize', this.resize);
	}

	resize = () => {
		const header = document.querySelector('.site-header');
		const { wrapper } = this;

		if (wrapper) {
			const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			wrapper.style.minHeight = (windowHeight - header.clientHeight) + 'px';
		}
	};

	render() {
		return (
			<div ref={wrapper => this.wrapper = wrapper} className='white justify-centre text-centred'>
				<div className='padding'>
					<h1>shoppinglist.website</h1>
					<hr />
					<h3>A simple shopping list that does nothing more than list the things you want to buy.</h3>
					<hr />
					<Link to='/register' className='landing-register btn btn--blue btn--block'>Register</Link>	
				</div>
			</div>
		);
	}

}