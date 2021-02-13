module.exports.run = async (bot, message, args, client) => {
let Canvacord = require('canvacord')
const canvas = new Canvacord.burn();
const member = message.mentions.members.first() || message.member;
const avatar = await canvas(member.user.displayAvatarURL({ format: 'jpg' }));
message.channel.send(avatar);
}
module.exports.config = {
    name: "burn",
    description: "a burning image effect command",
    usage: "/burn",
    accessableby: "Members",
    aliases: ["fire"]
}