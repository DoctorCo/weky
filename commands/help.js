const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
        .setTitle('Weky Bot Help')
        .setURL('https://www.youtube.com/channel/UCZ_cuJGBis0vi6U3bWmvDIg')
        .setDescription('😂 Fun:\n `corona`, `rc`, `meme`\n🔩 Utility:\n `ping`, `invite`\n📷 Image:\n`drip`, `gray`, `blur`, `facepalm`, `hitler`, `invert` ')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/emojis/798365870148681729.png?v=1')
        .setTimestamp()
        
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
            .setColor('RANDOM')

        message.channel.send(embed);
    }}
}
module.exports.config = {
    name: "help",
    description: "giving a message with all commands in the bot",
    usage: "/help",
    accessableby: "Members",
    aliases: []
}