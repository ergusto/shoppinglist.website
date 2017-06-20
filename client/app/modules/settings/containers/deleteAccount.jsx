import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteAccount } from '../actions/deleteAccount.js';
import { resetSettingsState } from '../actions/settings.js';
import Component from '../components/deleteAccount.jsx';

const mapStateToProps = state => {
	return Object.assign({}, state.settings);
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		deleteAccount,
		resetState: resetSettingsState
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
