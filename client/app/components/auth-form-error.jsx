import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

export default class Component extends React.Component {

	render() {
		let formError;
		const { error } = this.props;
		if (error) {
			formError = <div className='form-error'>{error}</div>;
		}
		return (
			<VelocityTransitionGroup runOnMount={false} component='div' enter={{ animation: 'sideDown', easing: 'easeInOutQuad', duration: 200 }} leave={{ animation: 'slideUp', easing: 'easeInOutQuad', duration: 200 }}>
				{formError}
			</VelocityTransitionGroup>
		);
	}

}