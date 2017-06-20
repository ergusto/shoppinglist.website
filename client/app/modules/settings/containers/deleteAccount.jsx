import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteAccount } from '../actions/deleteAccount.js';
import Component from '../components/deleteAccount.jsx';

const mapStateToProps = state => {
	return Object.assign({}, state.settings);
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		deleteAccount
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
