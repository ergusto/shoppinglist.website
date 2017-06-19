import React, { Component } from 'react';
import { GridContainer, Row, Column } from 'grid-react';

import Login from '../containers/login.jsx';

export default class LoginRoute extends Component {

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
	}

	render() {

		return (
			<div ref={wrapper => this.wrapper = wrapper} className='justify-centre'>
				<GridContainer>
					<Row>
						<Column tabletSmall='10' tabletSmallOffset='1' tabletLarge='6' tabletLargeOffset='3' screenSmall='4' screenSmallOffset='4' centre>
							<Login />
						</Column>
					</Row>
				</GridContainer>
			</div>
		);
	}

}