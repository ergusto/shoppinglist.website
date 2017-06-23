import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { markItemComplete, showItemEditForm, hideItemEditForm } from '../actions';
import Component from '../components/item.jsx';

const mapStateToProps = (state, props) => {
	return {
		shouldShowForm: !!state.items.editingItems.filter(id => id == props.item.id).length,	
	};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		showForm: showItemEditForm,
		hideForm: hideItemEditForm,
		markItemComplete
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);