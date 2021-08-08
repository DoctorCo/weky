const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose')

const bot = new Discord.Client({disableEveryone: true});

mongoose.connect('mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
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
bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const Levels = require('discord-xp')
    Levels.setURL(/* Mongodb url */)
    const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        const user1 = message.author.id
        message.channel.send(`You leveled up to **level ${user.level}**! Keep it going!`);
    if(user.level === '5'){
        const role = guild.roles.cache.find(role => role.id === '795551365077401600');
        user1.roles.add(role);
    }
    }
})
bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === '💬︱general');
	if (!channel) return;
const embed = new Discord.MessageEmbed()
.setAuthor(member.displayAvatarURL + member.username + member.discriminator)
.setDescription(`**${member.username}** welcome to this server!'n Please read the rules before starting , thanks!`)

	channel.send(embed);
});
bot.on("message", async message => {
    bot.user.setActivity(`Playing in ${bot.guilds.cache.size} servers | /help`,  {type: "PLAYING"})

    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    const input = message.content.slice(prefix.length).trim().split(' ');
      const commandArgs = input.join(' ');
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      let cmd = messageArray[0];

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

bot.login(process.env.token);
