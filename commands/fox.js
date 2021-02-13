const Discord = require('discord.js')
const got = require('got')
const fetch = require('node-fetch');
module.exports.run = async (bot, message, args) => {
    const MessageEmbed = new Discord.MessageEmbed()
    const subreddits = [
        'fox',
        'foxie',
        'foxpics',
        'foxy'
    ];
    
            const data = await fetch(`https://imgur.com/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/hot.json`)
                .then(response => response.json())
                .then(body => body.data);
            const selected = data[Math.floor(Math.random() * data.length)];
            return message.channel.send(new MessageEmbed().setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`));
}

module.exports.config = {
    name: "fox",
    description: "sends a cute image of a fox <3",
    usage: "/fox",
    accessableby: "Members",
    aliases: ["foxy"]
}
