const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.facepalm(avatar)
let attachment = new Discord.MessageAttachment( image, "rainbow.png")
message.channel.send(attachment)
}
module.exports.config = {
    name: "facepalm",
    description: "a facepalm image command",
    usage: "/facepalm",
    accessableby: "Members",
    aliases: ["palm"]
}