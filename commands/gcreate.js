const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {   
const ms = require('ms')
        const channel = message.mentions.channels.first();
        await bot.giveaways.startGiveaway({
            prize: args[1],
            channelId: channel.id,
            guildId: message.guild.id,
            duration: ms(args[2]), // 30 Seconds
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