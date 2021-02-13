const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.shit(avatar)
let attachment = new Discord.MessageAttachment( image, "shit.png")
message.channel.send(attachment)
}
module.exports.config = {
    name: "shit",
    description: "a shit image command",
    usage: "/shit",
    accessableby: "Members",
    aliases: []
}