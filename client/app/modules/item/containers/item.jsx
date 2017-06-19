import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { markItemComplete } from '../actions';
import Component from '../components/item.jsx';

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		markItemComplete
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);