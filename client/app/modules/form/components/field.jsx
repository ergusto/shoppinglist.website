import React from 'react';

export default class Component extends React.Component {

	render() {
		let errorText;
		const { serverError, input, placeholder, type,  meta: { touched, error, warning } } = this.props;
		if (serverError) errorText = serverError;
		if (error) errorText = error;
		if (serverError) console.log(serverError);
		return (
			<fieldset className={errorText ? 'fieldset--has-error' : null}>
				<input className='field bs' {...input} placeholder={placeholder} type={type} />
				{(errorText && touched) ? <div className='field-error'>{errorText}</div> : null}
			</fieldset>
		);
	}

}