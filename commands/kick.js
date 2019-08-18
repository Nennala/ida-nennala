module.exports = message => {
	const member = message.mentions.members.first()
		
	if (!member) {
		return message.reply(
			`Qui essayez vous de banir ? Vous avez juste mentionné un utilisateur.`
		)
	}
		
	if (!member.kickable) {
		message.reply(`Je ne peux pas banir cet utilisateur ! Désolée.`)
	}
		
	return member
		.kick()
		.then(() => message.reply(`${member.user.tag} a été banit`))
		.catch(error => message.reply(`Désolée, une erreur s'est produite.`))
}
