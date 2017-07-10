import { createValidator } from 'modules/form';

export default createValidator({
	title: (value, props) => {
		if (!value) {
			return 'This field is required';
		}
	}
});
