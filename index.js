const Command = require('command')

module.exports = function AFKer(dispatch) {
	const command = Command(dispatch)

	let enabled = false

	dispatch.hook('C_RETURN_TO_LOBBY', 'raw', () => !enabled && undefined) // Prevents you from being automatically logged out while AFK

	command.add('afk', () => {
		enabled = !enabled
		command.message('AFKer ' + (enabled ? '<font color="#56B4E9">enabled</font>' : '<font color="#E69F00">disabled</font>') + '.')
	})
}