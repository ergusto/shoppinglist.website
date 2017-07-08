import createReducer from './createReducer.js';
import { isString } from './tools.js';
import { bindActionCreators } from 'redux';

const initialState = {
	values: {},
	
}

const createFormReducer = (name, fields) => {
	if (!name || !isString(name) || !name.length) {
		throw new Error('createFormReducer expects a single unique string argument');
	}

	const uppercaseName = name.toUpperCase();

	const SUBMIT = `FORM_${uppercaseName}_SUBMIT`;
	const SUCCESS = `FORM_${uppercaseName}_SUCCESS`;
	const UPDATE = `FORM_${uppercaseName}_UPDATE_FIELD`;
	const ERROR = `FORM_${uppercaseName}_FIELD_ERROR`;

	return createReducer(initialState, {
		[SUBMIT]: (state, payload) => {

		}
	});
}

const createFormState = name => state => ({

});

const createFormActions = (name, dispatch) => {
	const uppercaseName = name.toUpperCase();
	const SUBMIT = `FORM_${uppercaseName}_SUBMIT`;
	const SUCCESS = `FORM_${uppercaseName}_SUCCESS`;
	const UPDATE = `FORM_${uppercaseName}_UPDATE_FIELD`;
	const ERROR = `FORM_${uppercaseName}_FIELD_ERROR`;

	const updateField = (field, value) => ({
		type: UPDATE,
		payload: { value }
	});

	return bindActionCreators({
		updateField,
	}, dispatch);
};

const state = createFormState('login');

const dispatch = function reduxDispatch(action) {
	return action;
}

const actions = createFormActions('login', dispatch);

const reducer = createFormReducer('login', {

});