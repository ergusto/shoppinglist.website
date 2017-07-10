import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { mapFormStateToProps, mapFormDispatchToProps } from 'lib';
import { createItem, addItem } from '../actions/create.js'
import Component from '../components/create.jsx';

const mapStateToProps = state => {
	return {
		api: state.create
	};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		createItem
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);