import React from 'react';
import PropTypes from 'prop-types';

import { isString, classnames } from '../../lib/tools.js';

import './style.scss';

export default class Component extends React.Component {

	static propTypes = {
		count: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
	};

	static defaultProps = {
		count: 0,
	};

	render() {
		const { icon, count, className } = this.props;
		const hasBadge = isString(count) ? true : !!(count > 0);
		const classNames = classnames('icon', 'fa', 'fa-' + icon, { 'icon-has-badge': hasBadge }, className)
		return (
			<i className={classNames} aria-hidden="true" data-count={hasBadge ? count : null} />
		);
	}

}

Component.propTypes = {
	icon: PropTypes.string.isRequired,
};