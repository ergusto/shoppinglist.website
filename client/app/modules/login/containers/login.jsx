import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loginUser } from '../actions.js';
import Component from '../components/login.jsx';

const mapStateToProps = state => {
	return Object.assign({}, state.auth, {
		api: state.login
	});
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		loginUser
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);