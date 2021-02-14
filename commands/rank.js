const Discord = require('discord.js')
const Levels = require('discord-xp')
const canvacord = require('canvacord')
module.exports.run = async (bot, message, args, client) => {
    const target = message.mentions.members.first() || message.author;

    const user = await Levels.fetch(target.id, message.guild.id)
    const neededXp = Levels.xpFor(parseInt(user.level) + 1);
    if (!user) return message,reply("You dont have any xp, try to be active");
    const rank = new canvacord.Rank()
    .setAvatar(target.displayAvatarURL({dynamic: false, format: 'png'}))
    .setCurrentXP(user.xp)
    .setRequiredXP(neededXp)
    .setStatus(target.presense.status)
    .setProgressBar("#00FF00", "COLOR")
    .setUsername(target.username)
    .setDiscriminator(target.discriminator)
    rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "rank.png")
        message.channel.send(attachment)
    })

}
module.exports.config = {
    name: "rank",
    description: "shows you your global rank!",
    usage: "/rank",
    accessableby: "Members",
    aliases: ["level"]
}