
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
module.exports.run = async (bot, message, args) => {
const subreddits = [
	'cat',
	'cats',
	'catpics',
	'kittens'
];

		const data = await fetch(`https://imgur.com/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/hot.json`)
			.then(response => response.json())
			.then(body => body.data);
		const selected = data[Math.floor(Math.random() * data.length)];
		return message.channel.send(new MessageEmbed().setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`));
	}

module.exports.config = {
    name: "cat",
    description: "sends a cute image of a cat",
    usage: "/cat",
    accessableby: "Members",
    aliases: ["kitty"]
}
