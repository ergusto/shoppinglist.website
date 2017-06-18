import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/item.js'
import Component from './component.jsx';

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);