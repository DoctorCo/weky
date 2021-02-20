const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
        if (!message.author.hasPermission('MANAGE_MESSAGES')) {
                message.channel.send("You don't have permission to use that command.");
    
              } 
let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(2).join(' ');
if(!pollChannel) return message.reply(`Please mention the channel where the poll you want to be`)
if(!pollDescription) return message.reply(`What you want to put in this poll :D?`)
        let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 New Poll! 😲')
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
}
        module.exports.config = {
            name: "poll",
            aliases: []
        }
        