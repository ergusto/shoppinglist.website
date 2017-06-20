import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changePassword } from '../actions/changePassword.js';
import { resetSettingsState } from '../actions/settings.js';
import Component from '../components/changePassword.jsx';

const mapStateToProps = state => {
	return Object.assign({}, state.settings);
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		changePassword,
		resetState: resetSettingsState
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);