const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    var num = parseFloat(args[0])
    if (num.isNaN) return message.channel.send("Thats not a valid number");
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../schemas/Money')
Money.findOne({
  id: targetId
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
    data.Wallet -= num;
    data.Bank += num;
    data.save();
    message.channel.send(`Successfully deposited **${num} coins**`)
}
});
  }
  module.exports.config = {
    name: "deposit",
    description: "deposit your money, a shild for antirobbers",
    usage: "/deposit (amount)",
    accessableby: "Members",
    aliases: ["dep"]
}