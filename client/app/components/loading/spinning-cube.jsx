import React from 'react';

import './css/spinning-cube.scss';

export default class Component extends React.Component {

	render() {
		return (
			<div className="spinner">
				<div className="cube1"></div>
				<div className="cube2"></div>
			</div>
		);
	}

}

