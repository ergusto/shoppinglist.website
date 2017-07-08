import React, { Component } from 'react';

import Login from '../containers/login.jsx';

export default class LoginRoute extends Component {

	componentDidMount() {
		this.resize();
		window.addEventListener('resize', this.resize);
	}

	resize = () => {
		const header = document.querySelector('#site-header');
		const { wrapper } = this;
		
		if (wrapper) {
			const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			wrapper.style.minHeight = (windowHeight - header.clientHeight) + 'px';
		}
	};

	render() {

		return (
			<div ref={wrapper => this.wrapper = wrapper} className='justify-centre'>
				<Login />
			</div>
		);
	}

}