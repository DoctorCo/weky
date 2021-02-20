const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.hitler(avatar)
let attachment = new Discord.MessageAttachment( image, "hitler.png")
message.channel.send(attachment)
}
module.exports.config = {
    name: "hitler",
    description: "a hiler image command",
    usage: "/hitler",
    accessableby: "Members",
    aliases: []
}