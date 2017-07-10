const createFormPlugin = pluginMap => (state, action) => {
	const plugin = pluginMap[action.type];
	return plugin ? plugin(state, action) : state;
}

export default createFormPlugin;