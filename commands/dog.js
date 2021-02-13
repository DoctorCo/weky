const Discord = require('discord.js')
const got = require('got')
module.exports.run = async (bot, message, args) => {
    const subreddits = [
        'dog',
        'puppies',
        'dogpics',
        'puppy'
    ];
    
            const data = await fetch(`https://imgur.com/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/hot.json`)
                .then(response => response.json())
                .then(body => body.data);
            const selected = data[Math.floor(Math.random() * data.length)];
            return message.channel.send(new MessageEmbed().setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`));
}

module.exports.config = {
    name: "dog",
    description: "sends a cute image of a dog",
    usage: "/dog",
    accessableby: "Members",
    aliases: ["dpggy", "puppy"]
}
