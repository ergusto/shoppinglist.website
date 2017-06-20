import {
	RESET_SETTINGS_STATE
} from '../actionTypes.js';

export function resetSettingsState() {
	return {
		type: RESET_SETTINGS_STATE,
		payload: {},
	};
}
