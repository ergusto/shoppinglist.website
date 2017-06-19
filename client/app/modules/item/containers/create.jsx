import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem } from '../actions/create.js'
import Component from '../components/create.jsx';

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		addItem
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);