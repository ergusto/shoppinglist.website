import { createFormPlugin } from 'lib';
import { ITEM_CREATE_SUCCESS } from './actionTypes.js';

export default createFormPlugin({
	[ITEM_CREATE_SUCCESS]: () => undefined,
});