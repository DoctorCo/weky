const Discord = require('discord.js');
const Levels = require("discord-xp");
const Canvas = require('canvas');


module.exports.run = async (bot, message, args) => {
    const canvas = Canvas.createCanvas(867, 892);

    const ctx = canvas.getContext('2d');

    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
    const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard);     
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}\n IF THE USERS ARE UNKOWN THAT MEANS THEY DIDN'T SENT ANY NEW MESSAGES`);

    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/795647180995559434/811616212811382794/unknown.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
    // nvm
    ctx.fillText(`${lb.join("\n\n")}`, canvas.width / 3.0, canvas.height / 5.0);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `lb.jpg`);
    message.channel.send(attachment);
}
module.exports.config = {
    name: "leaderboard",
    description: "sending you the leaderboard of the levels",
    usage: "/leaderboard",
    accessableby: "Members",
    aliases: ["lb"]
}