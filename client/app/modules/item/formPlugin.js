import { createFormPlugin, FORM_PLUGIN_All } from 'modules/form';
import { ITEM_CREATE_SUCCESS } from './actionTypes.js';

export default createFormPlugin({
	[ITEM_CREATE_SUCCESS]: () => undefined,
});