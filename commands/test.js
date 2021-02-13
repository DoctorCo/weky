module.exports.run = async (bot, message, args, client) => {
let Canvacord = require('canvacord')
const Canvas = require('canvas')
let layer = await Canvas.loadImage(Canvacord.assets("IMAGE").FACEPALM);
let canvas = Canvas.createCanvas(632, 357);
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 632, 357);
let avatar = await Canvas.loadImage(image);
ctx.drawImage(avatar, 199, 112, 235, 235);
ctx.drawImage(layer, 0, 0, 632, 357);
return canvas.toBuffer();
}
module.exports.config = {
    name: "burn",
    description: "a burning image effect command",
    usage: "/burn",
    accessableby: "Members",
    aliases: ["fire"]
}