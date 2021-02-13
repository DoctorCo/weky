const Discord = require('discord.js');
module.exports.run = async (bot, message, args, client) => {
    message.channel.send("Pinging...").then(m =>{
        // The math thingy to calculate the user's ping
          var ping = m.createdTimestamp - message.createdTimestamp;

        // Basic embed
          var embed = new Discord.MessageEmbed()
          .setDescription(`My ping is 🏓 \`${ping}ms\` `)
          .setColor("RED")
          
          // Then It Edits the message with the ping variable embed that you created
          m.edit(embed)
    })
}

module.exports.config = {
    name: "ping",
    description: "shows you the speed of the bot in ms",
    usage: "/ping",
    accessableby: "Members",
    aliases: []
}