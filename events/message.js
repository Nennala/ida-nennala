const ping = require('../commands/ping')
const kick = require('../commands/kick')
const test = require('../commands/test')

module.exports = (client, message) => {
	if (message.content.startsWith === '!ping') {
		return ping(message)
	}
	
	if (message.content.startsWith('!kick')) {
		return kick(message)
	}
	
	if (message.content.startsWith('!test')) {
		return test(client, message)
	}
}
