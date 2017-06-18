import React from 'react';

const eventName = ('ontouchstart' in window) ? 'touchstart' : ((window.DocumentTouch && document instanceof DocumentTouch) ? 'touchstart' : 'click');

export default class Component extends React.Component {
	
	static defaultProps = {
		tagName: 'div',
	};

	componentDidMount() {
		document.addEventListener(eventName, this.handler, true);
	}

	componentWillUnmount() {
		document.removeEventListener(eventName, this.handler, true);
	}

	handler = event => {
		const { handler } = this.props;
		const container = this.container;
		if (!container.contains(event.target)) handler(event);
	};

	render() {
		const { children, tagName, handler, ...props } = this.props;
		return <this.props.tagName ref={ref => this.container = ref}>{children}</this.props.tagName>;
	}

}

