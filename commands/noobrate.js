const { MessageEmbed } = require("discord.js")


module.exports.run = async (bot, message, args) =>{

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("NOOB MACHINE")
        .setDescription(`You are ${rate}% noob 🇳 🇴 🇴 🇧`)
        .setTimestamp()

        message.channel.send(embed)
      }

      module.exports.config = {
        name: "noobrate",
        description: "a noobrate lol",
        usage: "/noobrate",
        accessableby: "Members",
        aliases: ["nrate","noobr"]
    }