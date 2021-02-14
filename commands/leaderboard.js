const Discord = require('discord.js')
const Levels = require('discord-xp')
module.exports.run = async (bot, message, args) => {
const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard);
if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

const lb = leaderboard.map(e => `${e.position}. **${e.username}#${e.discriminator}**\n\`Level: ${e.level}\`\nXP: ${e.xp.toLocaleString()}`);
const embed = new Discord.MessageEmbed()
.setAuthor(`Global Weky's Leaderboard`)
.setDescription(`${lb.join("\n\n")}`)
message.channel.send(embed)
}
module.exports.config = {
    name: "leaderboard",
    description: "sending you the leaderboard of the levels",
    usage: "/leaderboard",
    accessableby: "Members",
    aliases: ["lb"]
}