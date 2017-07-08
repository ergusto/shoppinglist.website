import React, { Component } from 'react';
import { GridContainer, Row, Column } from 'grid-react';

import Settings from '../components/settings.jsx';

export default class SettingsRoute extends Component {

	render() {
		return (
			<div ref={wrapper => this.wrapper = wrapper} className='justify-centre padding-vertical'>
				<Settings />
			</div>
		);
	}

}
