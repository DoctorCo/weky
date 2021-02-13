const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.greyscale(avatar)
let attachment = new Discord.MessageAttachment( image, "gray.png")
message.channel.send(attachment)
}
module.exports.config = {
    name: "gray",
    description: "a gray image effect command",
    usage: "/gray",
    accessableby: "Members",
    aliases: ["nocolor"]
}