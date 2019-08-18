module.exports = client => {
	console.log(`Logged in as ${client.user.tag}!`);
	
	// List all channels
	client.guilds.forEach((guild) => {
		console.log(" - " + guild.name)
		
		guild.channels.forEach((channel) => {
			console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
		})
	})
	
}
