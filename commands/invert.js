const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.invert(avatar)
let attachment = new Discord.MessageAttachment( image, "invert.png")
message.channel.send(attachment)
}
module.exports.config = {
    name: "invert",
    description: "a invert image command",
    usage: "/invert",
    accessableby: "Members",
    aliases: []
}