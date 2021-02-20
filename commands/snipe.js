 const Discord = require('discord.js')
 module.exports.run = async (bot, message, args) => {
 const msg = bot.snipes.get(message.channel.id)
 if(!msg) return message.channel.send(`There is nothing to snipe :/`)

 const embed = new Discord.MessageEmbed()
 .setAuthor(msg.author, msg.member.user.displayAvatarURL())
 .setDescription(msg.content)
 .setFooter(`||Get sniped||`)
 .setTimestamp()
 message.channel.send(embed)
 }
module.exports.config = {
    name: "snipe",
    aliases: []
}
