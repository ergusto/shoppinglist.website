import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestItems } from '../items';
import Component from './component.jsx';

const mapStateToProps = state => {
	return state.items;
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators({
			requestItems,
		}, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);