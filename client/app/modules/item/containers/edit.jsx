import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { editItem, hideItemEditForm } from '../actions';
import Component from '../components/edit.jsx';

const mapStateToProps = (state, props) => {
	const editingItem = state.items.editingItems.find(item => item.id === props.item.id);
	return editingItem ? { errors: editingItem.errors } : { errors: {} };
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		hideForm: hideItemEditForm,
		editItem
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);