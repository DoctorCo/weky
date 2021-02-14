const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    const channel = message.mentions.channels.first();
    const prize = args[1]
    const time = args[2]
    const winners = args[3]
    if(!prize){
        return message.channel.send(`Please specify a prize!`)
    }
    if(!time){
        return message.channel.send(`Please specify a time in ms (30000 = 30 Seconds)`)
    }
    if(!winners){
        return message.channel.send(`Please specify the amount of winners for this giveaway`)
    }
    if(isNaN(winners)) return message.channel.send(`No winners amount specified`)
    await bot.giveaways.startGiveaway({
        prize: prize,
        channelId: channel.id,
        guildId: message.guild.id,
        duration: time,
        winners: winners,
        hostedBy: message.author.id
    });
}
module.exports.config = {
    name: "gcreate",
    description: "starts a giveaway in your server",
    usage: "/gcreate",
    accessableby: "Members",
    aliases: ["giveawaycreate", "giveawayc", "gwcreate"]
}