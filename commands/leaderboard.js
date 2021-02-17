const Discord = require('discord.js');
const Levels = require("discord-xp");
const Canvas = require('canvas');


module.exports.run = async (bot, message, args) => {
    const ctx = canvas.getContext('2d');
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';

        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);

        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard.");

        const leaderboard = Levels.computeLeaderboard(bot, rawLeaderboard);

        const lb = leaderboard.map(e => `${e.position} • ${e.username}#${e.discriminator}\nLevel: ${e.level} XP: ${e.xp.toLocaleString()}`);
        ctx.fillText(lb, canvas.width / 2.5, canvas.height / 3.5);

        const attachment = new Discord.MessageAttachment(data, "lb.png")
        message.channel.send(attachment)
}
module.exports.config = {
    name: "leaderboard",
    description: "sending you the leaderboard of the levels",
    usage: "/leaderboard",
    accessableby: "Members",
    aliases: ["lb"]
}