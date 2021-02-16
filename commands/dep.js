const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 5 more seconds`)
    .setDescription(`Dont you dare to frikin tryna break me, please wait \`5s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
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
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else if(num > data.Wallet) {
    return message.channel.send("You dont have that much money why you bad at me bro :/");
  } else {
    data.Cash -= num;
   data.Bank += num;
   data.save();
   message.channel.send("Deposited **" + num + '** coins.')
}
});
}
talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 6000);
         
  }
  module.exports.config = {
    name: "deposit",
    description: "deposit your money, a shild for antirobbers",
    usage: "/deposit (amount)",
    accessableby: "Members",
    aliases: ["dep"]
}