const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.trigger(avatar)
let attachment = new Discord.MessageAttachment( image, "trigger.gif")
message.channel.send(attachment)
}
module.exports.config = {
    name: "trigger",
    description: "a trigger image command",
    usage: "/trigger",
    accessableby: "Members",
    aliases: []
}