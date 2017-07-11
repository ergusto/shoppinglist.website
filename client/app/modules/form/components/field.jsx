import React from 'react';

export default class Component extends React.Component {

	render() {
		let errorText;
		const { serverError, input, placeholder, type,  meta: { touched, error, warning } } = this.props;
		if (serverError) errorText = serverError;
		if (error) errorText = error;
		console.log(errorText)
		return (
			<fieldset className={errorText && touched && 'fieldset--has-error'}>
				<input className='field bs' {...input} placeholder={placeholder} type={type} />
				{errorText && touched && <div className='field-error'>{errorText}</div>}
			</fieldset>
		);
	}

}