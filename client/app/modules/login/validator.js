import { createValidator } from 'modules/form';

export default createValidator({
	email: value => {
		if (!value) {
			return 'This field is required';
		}
	},
	password: value => {
		if (!value) {
			return 'This field is required';
		}
	}
});
