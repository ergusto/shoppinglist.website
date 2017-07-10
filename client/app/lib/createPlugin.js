export const FORM_PLUGIN_All = '__FORM_PLUGIN_ALL__';

export const createFormPlugin = pluginMap => (state, action) => {
	const plugin = pluginMap[action.type] || pluginMap[FORM_PLUGIN_All];
	return plugin ? plugin(state, action) : state;
}