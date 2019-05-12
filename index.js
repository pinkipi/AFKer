module.exports = function AFKer(mod) {
	const {command} = mod.require

	let enabled = false

	command.add('afk', () => { command.message(`AFKer ${(enabled = !enabled) ? 'enabled' : 'disabled'}.`) })

	mod.hook('C_RETURN_TO_LOBBY', 'raw', () => !enabled && undefined)
}