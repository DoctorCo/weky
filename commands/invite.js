const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
    var embed = new Discord.MessageEmbed()
    .addField("**Weky Bot Invite**", "Invite me to the servers that you are by clicking  [here](https://discord.com/oauth2/authorize?client_id=809496186905165834&scope=bot&permissions=2083912822)<:Wek:799960426741104672>")

    message.channel.send(embed)
}

module.exports.config = {
    name: "invite",
    description: "sending you a invite for the bot",
    usage: "/invite",
    accessableby: "Members",
    aliases: []
}