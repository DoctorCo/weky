const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {

    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../schemas/Money')
Money.findOne({
  id: target.id
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      id: targetId,
      Wallet: 100,
      Bank: 0,
      Phone: 0,
      Laptop: 0,
      Lootbox: 0,
      EpicLootbox: 0,
      LegLootbox: 0,
      gun: 0,
      fox: 0,
      tiger: 0,
      eagle: 0,
      bear: 0,
      fishing: 0,
      fish: 0,
      fishrare: 0,
      fishepic: 0,
      fishleg: 0,
      banknote: 0,
      bread: 0,
      bacon: 0,
      candy: 0,
      wekymoon: 0,
      wekyripoff: 0,
      wekytrophy: 0
    });
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , thanks for starting using Weky Bot!\nYou got 100 coins as reward for starting. Do /help for more commands about our currency system.`)
  } else {
    let embed = new Discord.MessageEmbed()
    .setTitle(target.username + '\'s balance')
    .setDescription("**Wallet**: " + data.Wallet + "\n**Bank**: " + data.Bank)
    .setColor("RANDOM")
    message.channel.send(embed);
  }
});
  }
  module.exports.config = {
    name: "balance",
    description: "sending you the leaderboard of the levels",
    usage: "/balance @user || /balance",
    accessableby: "Members",
    aliases: ["bal"]
}