const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.greyscale(avatar)
let attachment = new Discord.MessageAttachment( image, "rainbow.png")
message.channel.send(attachment)
}
module.exports.config = {
    name: "burn",
    description: "a burning image effect command",
    usage: "/burn",
    accessableby: "Members",
    aliases: ["fire"]
}