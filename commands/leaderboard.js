const Discord = require('discord.js');
const Levels = require("discord-xp");
const Canvas = require('canvas');


module.exports.run = async (bot, message, args) => {
    const canvas = Canvas.createCanvas(867, 892);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage(`https://cdn.discordapp.com/attachments/795647180995559434/811603450755285012/unknown.png`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.beginPath();
    // // ctx.arc(350, 150, 100, 0, Math.PI * 2, true);
    // ctx.closePath();
    // ctx.clip();
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
    const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard);     
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const lb = leaderboard.map(e => `**${e.position}. ${e.username}#${e.discriminator}**\n\`Level: ${e.level}\`\nXP: ${e.xp.toLocaleString()}`);

    message.channel.send(`${lb.join("\n\n")}`)
    ctx.fillText(`${lb.join("\n\n")}!`, canvas.width / 2.5, canvas.height / 1.8);
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