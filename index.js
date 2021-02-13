const prefix = require('./botsettings.json');
const Discord = require('discord.js');
const { MessageEmbed, Message } = require("discord.js")
const client = new Discord.Client();
const fs = require("fs")
const bot = new Discord.Client();

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
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


client.on('ready', async () => {
    console.log(`Logged in as ${client.user.username} (ID: ${client.user.id} TAG: ${client.user.tag})`)
    client.user.setActivity('life is hard | /help', { type: 'PLAYING'});
})



client.on('message', message => {
    let messageArray = message.content.toLowerCase().split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
    if(!command.startsWith(prefix)) return;
    
    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(client, message, args)});
bot.login(process.env.token);