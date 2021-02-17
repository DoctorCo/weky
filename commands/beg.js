const Discord = require('discord.js')
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 45 more seconds`)
    .setDescription(`😡 Dont you dare to frikin tryna break me, please wait \`45s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
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
    const muni = Math.floor(Math.random() * 300) + 60;

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
       `: uh sure enjoy **${muni}** coins`,
       `: nice begger dude, get **${muni}** coins just for that.`,
       `: ok get my **${muni}** coins.`,
       `: oh ok there, **${muni}** coins.`,
       `: aww no one cares about you, get these **${muni}** coins pls.`,
       `: pro at begging take my **${muni}** coins.`,
       `: o oo oo o **${muni}** coins.`,
       `: and thats your way of gettings money? :/ fine take my **${muni}** coins.`,
       `: why not **${muni}** coins for you.`,
       `: nice get **${muni}** coins.`,
       `: ur not that good at begging so no coins`,
       `: sorry dude, i've used all my money to donate to cozmo :/`,
       `: hello im from NOTHING federation and you get our name`,
       `: nah`,
       `: seems like no one likes you so i will dont too :D`,
       `: sorry dude im looking to buy ${message.author.username}'s head i cant give u money.`
   ]
   var breh1 = Math.floor(Math.random() * breh.length);
   var persons1 = Math.floor(Math.random() * persons.length);
   var bruh = breh[breh1]
   var person = persons[persons1]
   
if(breh1 != 0 && breh1 != 1 && breh1 != 2 && breh1 != 3 && breh1 != 4 && breh1 != 5 && breh1 != 6 && breh1 != 7 && breh1 != 8 && breh1 != 9) {
  data.Wallet += muni;    
  message.channel.send(`${person}${bruh}`)
  data.save(); 
} else {
  message.channel.send(`${person}${bruh}`)
}
}
});
}
talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 45000);
         
}
  module.exports.config = {
    name: "beg",
    description: "begging for money be like",
    usage: "/beg",
    accessableby: "Members",
    aliases: []
}