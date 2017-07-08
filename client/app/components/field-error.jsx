import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

export default class Component extends React.Component {

	render() {
		const { error } = this.props;
		return (
			<VelocityTransitionGroup runOnMount={false} component='div' enter={{ animation: 'slideDown', duration: 200 }} leave={{ animation: 'slideUp', duration: 200 }}>
				{error ? <div className='field-error'>{error}</div> : null}
			</VelocityTransitionGroup>
		);
	}

}