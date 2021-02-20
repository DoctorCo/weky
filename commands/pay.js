const Discord = require('discord.js');
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 5 more seconds`)
    .setDescription(`Dont you dare to frikin tryna break me, please wait \`10s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
    var num = parseFloat(args[2])
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
    return message.channel.send("You dont have these money.");
  } else {
   data.Wallet -= num;
   data.save();
   message.channel.send(`You gave ${member} ${num} coins, your new balance is ${data.Wallet} coins`)
}
});
Money.findOne({
    id: member.id
  }, (err,data) => {
    if(err) console.log(err);
    if(!data){
      newD = new Money({
        id: member.id
      });
      newD.save();
    } else {
     data.Wallet += num;
     data.save()
  }
  });
}
talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 10000);
         
  }
  module.exports.config = {
    name: "share",
    description: "give your money to ur friends!",
    usage: "/share (amount)",
    accessableby: "Members",
    aliases: ["pay", "give"]
}