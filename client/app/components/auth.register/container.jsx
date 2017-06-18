import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/registration.js';
import Component from './component.jsx';
import { extend } from '../../lib/tools.js';

const mapStateToProps = state => {
	return extend({}, state.auth, state.registration);
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);