import React from 'react';

export default class Component extends React.Component {

	render() {
		const { serverError, input, placeholder, type,  meta: { touched, error, warning } } = this.props;
		return (
			<fieldset className={error ? 'fieldset--has-error' : null}>
				<input className='field bs' {...input} placeholder={placeholder} type={type} />
				{(error && touched) ? <div className='field-error'>{error}</div> : null}
			</fieldset>
		);
	}

}
