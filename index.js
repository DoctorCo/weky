const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const {client, bot} = new Discord.Client({disableEveryone: true});

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

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
client.on("ready", () => {
    client.user.setActivity("Serving " + client.guilds.cache.size + " servers");
});

client.on("guildCreate", () => {
    // Fired every time the bot is added to a new server
    client.user.setActivity("Serving "+ client.guilds.cache.size +" servers");
});

client.on("guildDelete", () => {
    // Fired every time the bot is removed from a server
    client.user.setActivity("Serving "+ client.guilds.cache.size +" servers");
});

function updateStatus() {
    // Check if the displayed status contains the number of servers joined.
    // If so, the status needs to be updated.
    if (statusMessages[chosenMessageIndex].includes('{guildSize}')) {

        let statusMessage = statusMessages[chosenMessageIndex].replaceAll('{guildSize}', client.guilds.cache.size);

        client.user.setActivity(statusMessage);
    }
}
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

bot.login(process.env.token);