import { isObject } from 'lib';

const createValidator = rules => (values, props) => {
	if (!rules || !isObject(rules) || !Object.keys(rules).length) {
		throw new Error("createValidator expects an object containing validation rules as it's first parameter");
	}

	return Object.keys(rules).reduce((errors, key) => {
		const validator = rules[key];
		if (validator) {
			errors[key] = validator(values[key], props);
		}
		return errors;
	}, {});
};

export default createValidator;