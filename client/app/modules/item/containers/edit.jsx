import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { editItem, hideItemEditForm } from '../actions';
import Component from '../components/edit.jsx';

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		hideForm: hideItemEditForm,
		editItem
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);