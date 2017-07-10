import { reducer, actionTypes } from 'redux-form';
import { formPlugin as create } from 'modules/item';

export default reducer.plugin({
	create
});