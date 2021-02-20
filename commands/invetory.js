const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const Money = require("../schemas/Money")
Money.findOne({
    id: message.author.id
},
 (err, data) => {
    if(err) console.log(err);
    if(!data){
    const newD = new Money({
        id: message.author.id
    })
    newD.save();
} else {
var resp = "";

if(data.Laptop != 0) resp += `**💻 Laptop - ** ${data.Laptop}\n`

        const { MessageEmbed } = require("discord.js");
        const Embed = new MessageEmbed()
        .setTitle(`${message.author.username}\' Inventory`)
        .setDescription(resp)
        message.channel.send(Embed)
}
})
}
module.exports.config = {
    name: "invetory",
    description: "see your inventory!",
    usage: "/inventory",
    accessableby: "Members",
    aliases: ["inv"]
}