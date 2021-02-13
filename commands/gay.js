const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.rainbow(avatar)
let attachment = new Discord.MessageAttachment( image, "gay.png")
message.channel.send(attachment)
}
module.exports.config = {
    name: "gay",
    description: "a gay image effect command",
    usage: "/gay",
    accessableby: "Members",
    aliases: ["rainbow"]
}