const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.rip(avatar)
let attachment = new Discord.MessageAttachment( image, "rip.png")
message.channel.send(attachment)
}
module.exports.config = {
    name: "rip",
    description: "a rip image command",
    usage: "/rip",
    accessableby: "Members",
    aliases: []
}