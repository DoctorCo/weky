
    const Money = require("../schemas/Money")
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'laptop') {
        var num = parseFloat(args[1])
    if (num.isNaN) return 
        Money.findOne({
            id: message.author.id
        },
         (err, data) => {
            if(err) console.log(err);
            if(!data){
            const newD = new Money({
                id: message.author.id
            })
            newD.save();
            let user = message.guild.members.cache.get(message.author.id);
            user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
            } else {
                if(1500 > data.Wallet) {return message.channel.send(`You dont have money to buy this, make sure that you have the money in wallet`);} else {
                data.Wallet -= 4000*num;
                data.Laptop += num;
                data.save();
                const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.username+`#`+message.author.descriminator, message.member.user.displayAvatarURL())
                .setDescription(`You sucessfully bought 1 Laptop`)
                message.channel.send(embed)
        }
               
            }
        })
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        
        message.channel.send(`Ye ye weky here what you want to buy, /shop for the list :rolling_eyes:`);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.

}

module.exports.config = {
    name: "buy",
    description: "buy a item!",
    usage: "/buy (item)",
    accessableby: "Members",
    aliases: []
}