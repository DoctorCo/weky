const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) =>{

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("CRINGE MACHINE")
        .setDescription(`You are ${rate}% cringe <:lol:695581441471545374>`)
        .setTimestamp()

        message.channel.send(embed)
      }

      module.exports.config = {
        name: "cringerate",
        description: "a noobrate lol",
        usage: "/noobrate",
        accessableby: "Members",
        aliases: ["cringer","crate"]
    }