const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    id: {
      type: String,
      required: true
  },
    Wallet: {
      type: Number,
      default: 100
  },
    Bank: {
      type: Number,
      default: 0
    },
    Phone: {
        type: Number,
        default: 0
      },
    Laptop: {
        type: Number,
        default: 0
      },
    Lootbox: {
        type: Number,
        default: 0
      },
    EpicLootbox: {
        type: Number,
        default: 0
      },
    LegLootbox: {
        type: Number,
        default: 0
      },
    gun: {
        type: Number,
        default: 0
      },
    fox: {
        type: Number,
        default: 0
      },
    tiger: {
        type: Number,
        default: 0
      },
    eagle: {
        type: Number,
        default: 0
      },
    bear: {
        type: Number,
        default: 0
      },
    fishing: {
        type: Number,
        default: 0
      },
    fish: {
        type: Number,
        default: 0
      },
    fishrare: {
        type: Number,
        default: 0
      },
    fishepic: {
        type: Number,
        default: 0
      },
    fishleg: {
        type: Number,
        default: 0
      },
    banknote: {
        type: Number,
        default: 0
      },
    bread: {
        type: Number,
        default: 0
      },
    bacon: {
        type: Number,
        default: 0
      },
    candy: {
        type: Number,
        default: 0
      },
    wekymoon: {
        type: Number,
        default: 0
      },
    wekyripoff: {
        type: Number,
        default: 0
      },
    wekytrophy: {
        type: Number,
        default: 0
      }
})
module.exports = mongoose.model('MoneyData', profileSchema)