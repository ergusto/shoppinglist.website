import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadItems } from '../items';
import Component from './component.jsx';

const mapStateToProps = state => {
	return state.items;
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators({
			loadItems
		}, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);