import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/items.js';
import Home from './component.jsx';

class Container extends React.Component {

	componentDidMount() {
		this.props.actions.requestItems();
	}

	render() {
		const { items, hasErrored, isLoading } = this.props;

		if (hasErrored) {
			return <p>Sorry! There was an error loading the items</p>;
		}

		if (isLoading) {
			return <p>Loading...</p>;
		}

		return <Home items={items} />;
	}

}

const mapStateToProps = state => {
	return state.items;
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(actionCreators, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
