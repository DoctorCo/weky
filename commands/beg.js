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
    const persons = [
        `**Thanos**`,
        `**The girl that you where caught with in bed last night**`,
        `**Cozmo**`,
        `**MEE69**`,
        `**DashCruft**`,
        `**The money that splited in your face**`,
        `**The local dumb Jilly mek Weilly**`,
        `**Spongebob**`,
        `**Nancy James**`,
        `**Your hitman**`,
        `**Your mom**`,
        `**The star that you and your girlfriend were watching when the apocalypse came**`,
        `**Roblox Owner**`,
        `**Noob**`,
        `**Your gmail**`,
        `**Russia**`,
        `**Ad blocker**`,
        `**Dank Memer**`,
        `**Weky**`,
        `**The youtube like button**`,
        `**The moovie that you watched last night**`,
        `**The meme that you didnt liked**`,
        `**Capcha test**`,
        `**The noob that have skin**`,
        `**Your discord file**`,
        `**Kylie Jenner**`,
        `**Kanye West**`,
        `**Cristiano Ronaldo**`,
        `**Tyler Perry**`,
        `**Neymar**`,
        `**Howard Stern**`
   ]
   const breh = [
       `a bit dumb but ye.`,
       `nice begger.`,
       `you suck thats why you got these.`,
       `what a kid...`,
       `no one cares about you now.`,
       `with this money you can gamble NICEE.`,
       `ok now go lose all.`,
       `do u think that u got them by doing something hard? go earn money.`,
       `oh so you like money? name every money from weky.`,
       `nice.`,
       `i cant say something .. you just begged.`,
   ]
   var breh1 = Math.floor(Math.random() * breh.length);
   var persons1 = Math.floor(Math.random() * persons.length);
   var bruh = breh[breh1]
   var person = persons[persons1]

   const muni = Math.floor(Math.random() * 300) + 60;
var num = Math.floor(Math.random() * 2)
var okk = [
    `gave you **${muni}** coins ${bruh}`
    `gave u nothing.. GEI`
]
var mk = Math.floor(Math.random() * okk.length)
var ok = okk[mk]
   if(okk != 2) {
    data.Wallet += muni;
    data.save();    
    message.channel.send(`${person} ${ok}`)
    } else if(okk != 1) {
        message.channel.send(`${person} ${ok}`)
    }
}
});
}
  module.exports.config = {
    name: "beg",
    description: "begging for money be like",
    usage: "/beg",
    accessableby: "Members",
    aliases: []
}