const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
    let msg = args.join(" "), Case = "";
    if (!msg) return message.channel.send("Please Give Your Message!");

    for (let i in msg) {
      let Random = await Math.floor(Math.random() * 2);
      Case += Random == 1 ? msg[i].toLowerCase() : msg[i].toUpperCase();
    };

    return message.channel.send(Case);
}

module.exports.config = {
    name: "randomcaps",
    description: "transforming your message with random caps",
    usage: "/randomcaps",
    accessableby: "Members",
    aliases: ["rc"]
}