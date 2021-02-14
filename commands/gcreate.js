const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {   

    const channel = message.mentions.channels.first();
    if(!channel){
        return message.channel.send(`Please specify in what channel you want the giveaway in!`)
    }

    if(!args[1]){
        return message.channel.send(`Please specify a prize!`)
    }
    if(!args[2]){
        return message.channel.send(`Please specify a time in ms (30000 = 30 Seconds)`)
    }
    if(!args[3]){
        return message.channel.send(`Please specify the amount of winners for this giveaway`)
    }
    if(isNaN(args[3])) return message.channel.send(`No winners amount specified`)
    const ms = require('ms');
        // >gcreate 2d 1 Awesome prize!
        // will create a giveaway with a duration of two days, with one winner and the prize will be "Awesome prize!"
        bot.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            channel: channel,
            prize: args.slice(2).join(' '),
            winnerCount: parseInt(args[1])
        })
    }
module.exports.config = {
    name: "gcreate",
    description: "create a giveaway in ur channel",
    usage: "/gcreate",
    accessableby: "Members",
    aliases: []
}