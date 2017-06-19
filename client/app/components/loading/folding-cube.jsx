import React from 'react';

import './css/folding-cube.scss';

export default class Component extends React.Component {

	render() {
		return (
			<div className="sk-folding-cube">
				<div className="sk-cube1 sk-cube"></div>
				<div className="sk-cube2 sk-cube"></div>
				<div className="sk-cube4 sk-cube"></div>
				<div className="sk-cube3 sk-cube"></div>
			</div>
		);
	}

}

