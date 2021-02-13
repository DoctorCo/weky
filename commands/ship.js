const block = "⬛";
const heart = "💖";
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();

    let user1 = message.mentions.members.last();
    
    let embed = new MessageEmbed()
    .setColor('RED')
    .setDescription(':x: Please specify a user to ship with!')
    if (!user) return message.channel.send(embed)

    let loveEmbed = new MessageEmbed()
        .setColor('ff00f2')
        .setTitle('Shipping...')
        .setDescription(`Shipped ${user} and ${user1}!`)
        .addField(`**Ship Meter**`, ship())
    message.channel.send(loveEmbed)
}

module.exports.config = {
    name: "ship",
    description: "ur choice",
    usage: "ship <user1> <user2>",
    accessableby: "Members",
    aliases: []
}

function ship() {
    const hearts = Math.floor(Math.random() * 10) + 0; // u can remove + 0
    const str = `${heart.repeat(hearts)}${block.repeat(10 - hearts)} ${hearts * 10}%`;
    return str;
}