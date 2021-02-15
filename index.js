const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose')

const bot = new Discord.Client({disableEveryone: true});

mongoose.connect('mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})

const { GiveawayCreator } = require('discord-giveaway');
const Creator = new GiveawayCreator(bot, 'mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data');
 
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.giveaways = Creator;

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});
bot.on('message', (message) => {
    const ms = require('ms'); // npm install ms
    const args = message.content.slice(botsettings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'start-giveaway') {
        // g!start-giveaway 2d 1 Awesome prize!
        // will create a giveaway with a duration of two days, with one winner and the prize will be "Awesome prize!"

        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(' '),
            winnerCount: parseInt(args[1])
        }).then((gData) => {
            console.log(gData); // {...} (messageid, end date and more)
        });
        // And the giveaway has started!
    }
});
bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const Levels = require('discord-xp')
    Levels.setURL("mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data")
    const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`You leveled up to **level ${user.level}**! Keep it going!`);
    }
})
bot.on("message", async message => {
    bot.user.setActivity(`Playing in ${bot.guilds.cache.size} servers | /help`,  {type: "PLAYING"})

    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

bot.login(process.env.token);