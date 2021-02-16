
module.exports.run = async (bot, message, args, client) => {
    let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get('778518819055861761');

      if (!args[0])
        return message.channel.send("You did not specify your message");
      user.user
        .send(args.slice(0).join(" ") + `\n ${message.author.username}#${message.author.discriminator}`)
        .then(() => message.channel.send(`Thanks for the suggestion/bug! It will be rated/fixed by Face in some time!`));
    }

  module.exports.config = {
    name: "suggest",
    description: "a comamnd to tell a suggestion to the bot owner or to report a bug",
    usage: "/suggest",
    accessableby: "Members",
    aliases: ["report", "bug", "suggestion"]
}