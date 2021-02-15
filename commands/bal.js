const economy = require('../economy')
module.exports.run = async (bot, message, args) => {

    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const coins = economy.getCoins(guildId, userId)

    message.reply(`That user has ${coins} coins!`)
  }
  module.exports.config = {
    name: "balance",
    description: "sending you the leaderboard of the levels",
    usage: "/balance @user || /balance",
    accessableby: "Members",
    aliases: ["bal"]
}