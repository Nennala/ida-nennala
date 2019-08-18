const ping = require('../commands/ping')
const kick = require('../commands/kick')
const test = require('../commands/test')

prefix = '!';

module.exports = (client, message) => {
	if (message.content.startsWith(prefix + 'ping')) {
		return ping(message)
	}
	
	if (message.content.startsWith(prefix + 'kick')) {
		return kick(message)
	}
	
	if (message.content.startsWith(prefix + 'test')) {
		return test(client, message)
	}
}
