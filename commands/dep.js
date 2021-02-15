const Discord = require('discord.js');
const { deleteModel } = require('mongoose');
module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply('You need to type a number')
    const num = parseFloat(args[0]);
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!')
        } else {
            deleteAmount = parseInt(args[0]);
        }
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
    if(deleteAmount > data.Cash) {return message.chanel.send("You dont have that much money");} else {
       data.Cash -= deleteAmount;
       data.Bank += deleteAmount;
       data.save();
       message.channel.send("Deposited **" + deleteAmount + '** coins')
  }
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