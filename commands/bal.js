const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {

    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../schemas/Money')
Money.findOne({
  id: targetId
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      id: targetId
    });
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else {
    let embed = new Discord.MessageEmbed()
    .setTitle(target.username + '\'s balance')
    .setDescription("**Wallet**: " + data.Wallet + "\n**Bank**: " + data.Bank)
    .setColor("RANDOM")
    .setTimestamp();
    message.channel.send(embed);
  }
});
  }
  module.exports.config = {
    name: "balance",
    description: "showing you the balance of yourself or the pinged user's one",
    usage: "/balance @user || /balance",
    accessableby: "Members",
    aliases: ["bal"]
}