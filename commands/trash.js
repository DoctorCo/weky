const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.trash(avatar)
let attachment = new Discord.MessageAttachment( image, "trash.png")
message.channel.send(attachment)
}
module.exports.config = {
    name: "trash",
    description: "a trash image command",
    usage: "/trash",
    accessableby: "Members",
    aliases: []
}