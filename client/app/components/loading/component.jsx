import React from 'react';

import './style.scss';

import CubeGrid from './cube-grid.jsx';
import FoldingCube from './folding-cube.jsx';
import SpinningCube from './spinning-cube.jsx';

const loaders = [CubeGrid, FoldingCube, SpinningCube];

const Loader = () => {
	const loader = loaders[Math.floor(Math.random()*loaders.length)];
	return (
		<div className='loading-indicator justify-centre'>
			{loader}
		</div>
	);
}

export default Loader;
