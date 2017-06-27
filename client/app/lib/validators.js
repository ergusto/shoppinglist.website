import { validateEmail } from './tools.js';

export function emailValidator(email) {
	return validateEmail(email) ? null : 'Please provide a valid email address';
}

export const passwordLengthValidator = value => {
	console.log(value);
	const minLengthError = value.length < 8 ? 'Password must be 8 characters or more' : null;
	const maxLenghtError = value.length >= 128 ? 'Password must be 128 characters or fewer' : null;

	if (minLengthError) return minLengthError;
	if (maxLenghtError) return maxLenghtError;
	return null;
}

export const passwordEqualityValidator = (value, values) => {
	const password1 = values['password'];
	const password2 = values['password_repeat'];
	return password1 == password2 ? null : 'Passwords must match';
}