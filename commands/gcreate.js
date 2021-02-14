
module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
const { GiveawaysManager } = require('discord-giveaway');
const manager = new GiveawaysManager(bot, {
    default: {
        botsCanWin: false,
        exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
        embedColor: '#6a0dad',
        reaction: '🎉'
    }
});

bot.giveawaysManager = manager;

    const ms = require('ms');
    const command = args.shift().toLowerCase();
    if(message.author.id !== '594371388228239370') return;
    if(message.channel.type !== 'text') return;

    if (command === 'gcreate') {
        // >gcreate 2d 1 Awesome prize!
        // will create a giveaway with a duration of two days, with one winner and the prize will be "Awesome prize!"
        bot.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(' '),
            winnerCount: parseInt(args[1])
        }).then((gData) => {
            console.log(gData); 
        });
    }
}
module.exports.config = {
    name: "gcreate",
    description: "create a giveaway in ur channel",
    usage: "/gcreate",
    accessableby: "Members",
    aliases: []
}