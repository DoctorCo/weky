const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {   
const ms = require('ms')
        const channel = message.mentions.channels.first();
        if(isNaN(args[3])) return message.reply('Error here br')
        await bot.giveaways.startGiveaway({
            prize: args[1],
            guildId: message.guild.id,
            channelId: message.channel.id,
            duration: args[4], // 30 Seconds
            winners: args[3], // 1 winner
            hostedBy: message.author.id
        });
    }
module.exports.config = {
    name: "gcreate",
    description: "create a giveaway in ur channel",
    usage: "/gcreate",
    accessableby: "Members",
    aliases: []
}