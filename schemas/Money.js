const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    id: String,
    Wallet: Number,
    Bank: Number,
    Phone: Number,
    Laptop: Number,
    Lootbox: Number,
    EpicLootbox: Number,
    LegLootbox: Number,
    gun: Number,
    fox: Number,
    tiger: Number,
    eagle: Number,
    bear: Number,
    fishing: Number,
    fish: Number,
    fishrare: Number,
    fishepic: Number,
    fishleg: Number,
    banknote: Number,
    bread: Number,
    bacon: Number,
    candy: Number,
    wekymoon: Number,
    wekyripoff: Number,
    wekytrophy: Number
})
module.exports = mongoose.model('MoneyData', profileSchema)