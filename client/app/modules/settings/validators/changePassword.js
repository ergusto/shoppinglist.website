import { createValidator } from 'modules/form';

export default createValidator({
	current_password: value => {
		if (!value) {
			return 'This field is required';
		}
	},
	new_password: (value, values) => {
		if (!value) {
			return 'This field is required';
		}

		if (value != values['new_password_repeat']) {
			return 'Passwords must match';
		}
	},
	new_password_repeat: (value, values) => {
		if (!value) {
			return 'This field is required';
		}

		if (value != values['new_password']) {
			return 'Passwords must match';
		}
	}
});
