const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) =>{

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("SIMP R4TE")
        .setDescription(`${user}'s simprate is ${rate}% 😳`)
        .setTimestamp()
        .setFooter()

        message.channel.send(embed)
      }

      module.exports.config = {
        name: "simprate",
        description: "a simprate lol",
        usage: "/simprate",
        accessableby: "Members",
        aliases: ["srate","simpr"]
    }