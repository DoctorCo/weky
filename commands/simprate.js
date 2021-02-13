const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) =>{

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("SIMP MACHINE")
        .setDescription(`You are ${rate}% simp 😳`)
        .setTimestamp()
        .setFooter("This number dont mean anything")

        message.channel.send(embed)
      }

      module.exports.config = {
        name: "simprate",
        description: "a simprate lol",
        usage: "/simprate",
        accessableby: "Members",
        aliases: ["srate","simpr"]
    }