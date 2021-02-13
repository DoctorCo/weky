const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const prefix = botsettings.prefix
const bot = new Discord.Client({disableEveryone: true});

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files, client) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         console.log("[LOGS] Couldn't Find Commands!");
         return;
    }

    console.log(`Loading commands!`);

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        console.log(`${i + 1} ${f} loaded!`)
        client.commands.set(pull.config.name, pull);
        if(pull.config.aliases) {
          pull.config.aliases.forEach(alias => {
            client.commands.set(alias, pull)
          })
        }
    });
});
bot.on('message', message => {
    if (!message.guild) {
        return;
    }
    let msg = message.content.toLowerCase();
    let args = message.content.substring(prefix.length).split(' ');
})
bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})
console.log(`All commands has been loaded!`)
bot.login(process.env.token);