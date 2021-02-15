const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {   

    const ms = require('ms');
        // >gcreate 2d 1 Awesome prize!
        // will create a giveaway with a duration of two days, with one winner and the prize will be "Awesome prize!"
        await bot.giveaways.startGiveaway({
            time: ms(args[0]),
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