import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

import { Item } from '../../item';

export default class Component extends React.Component {

	render() {
		const { items } = this.props;
		return (
			<main className='item-list-component'>
				<ul className='item-list'>
					<VelocityTransitionGroup runOnMount={false} component='div' enter={{ animation: 'slideDown', easing: 'easeInOutQuad', duration: 400 }} leave={{ animation: 'slideUp', easing: 'easeInOutQuad', duration: 400 }}>
						{items.map(item => {
							return <Item item={item} key={item.id} />;
						})}
					</VelocityTransitionGroup>
				</ul>
			</main>
		);
	}

}