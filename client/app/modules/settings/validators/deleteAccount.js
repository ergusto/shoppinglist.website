import { createValidator } from 'modules/form';

export default createValidator({
	current_password: value => {
		if (!value) {
			return 'This field is required';
		}
	},
});