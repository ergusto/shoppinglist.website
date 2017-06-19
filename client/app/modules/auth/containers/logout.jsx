import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logoutUser } from '../actions.js'
import Component from '../components/logout.jsx';

const mapStateToProps = state => {
	return state.auth;
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		logoutUser
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);