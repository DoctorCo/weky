const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {   
    if (!member.hasPermission(['MANAGE_MESSAGES', 'MANAGE_SERVER'])) {
        console.log('You dont have any permissions to use this command.');
    }
    const channel = message.mentions.channels.first();
    if(!channel){
        return message.channel.send(`Please specify in what channel you want the giveaway in!`)
    }
    if(!args[2]){
        return message.channel.send(`Please specify a prize!`)
    }
    if(!args[3]){
        return message.channel.send(`Please specify a time in ms (30000 = 30 Seconds)`)
    }
    if(!args[4]){
        return message.channel.send(`Please specify the amount of winners for this giveaway`)
    }
    if(isNaN(winners)) return message.channel.send(`No winners amount specified`)
    await bot.giveaways.startGiveaway({
        prize: args[2],
        channelId: channel,
        guildId: message.guild.id,
        duration: args[3],
        winners: args[4],
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