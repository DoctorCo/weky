const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply('Please tell me how much you want to deposit.')
    const num = parseFloat(args[1]);
    if (isNaN(args[1]) || parseInt(args[1]) <= 0) { return message.reply('Please put a number only!')
        } else {
            deleteAmount = parseInt(args[1]);
        }
    const Money = require("../schemas/Money")
Money.findOne({
    id: message.author.id
},
 (err, data) => {
    if(err) console.log(err);
    if(!data){
    const newD = new Money({
        id: message.author.id,
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
    })
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , thanks for starting using Weky Bot!\nYou got 100 coins as reward for starting. Do /help for more commands about our currency system.`)
    } else {
        if(deleteAmount > data.Wallet) {return message.chanel.send("You dont have that much money");} else {
         data.Wallet -= num;
        data.Bank += num;
        data.save();
        message.channel.send("Deposited **" + deleteAmount + '** coins')
}
       
    }
})
}
module.exports.config = {
    name: "deposit",
    description: "dep your money! a shild for robbing!",
    usage: "/deposit",
    accessableby: "Members",
    aliases: ["dep"]
    }