import React from 'react';

export default class Component extends React.Component {

	render() {
		const { elementRef, serverError, input, placeholder, type,  meta: { touched, error, warning } } = this.props;
		return (
			<fieldset className={error ? 'fieldset--has-error' : null}>
				<textarea ref={elementRef} rows='3' className='field bs' {...input} placeholder={placeholder} type={type}></textarea>
				{(error && touched) ? <div className='field-error'>{error}</div> : null}
			</fieldset>
		);
	}

}