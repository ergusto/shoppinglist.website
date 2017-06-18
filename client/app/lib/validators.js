import { validateEmail } from './tools.js';

export function emailValidator(email) {
	return validateEmail(email) ? null : 'Please provide a valid email address';
}