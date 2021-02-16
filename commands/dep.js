const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    var num = parseFloat(args[1])
    if (num.isNaN) return message.channel.send("Thats not a valid number");
    const Money = require('../schemas/Money')
Money.findOne({
  id: message.author.id
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      id: message.author.id
    });
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , thanks for starting using Weky Bot!\nYou got 100 coins as reward for starting. Do /help for more commands about our currency system.`)
  } else if(num > data.Wallet) {
    return message.chanel.send("You dont have that much money why you bad at me bro :/");
  } else {
    data.Cash -= num;
   data.Bank += num;
   data.save();
   message.channel.send("Deposited **" + num + '** coins')
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