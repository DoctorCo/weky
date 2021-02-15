const mongo = require('./index.js')
const profileSchema = require('./shemas/profile-schema')
modules.exports = (client) => {}
module.exports.getCoins = async (guildId, userId) => {
    return await mongo().then(mongoose => {
        try {
            console.log(`Running findOne()`)

            const result = await profileSchema.findOne({
                guildId,
                userId
            })

            console.log(`RESULT:`, result)
            const coins = 0
            if (result){
                coins = result.coins
            } else {
                console.log(`Inserting a document`)
                await new profileSchema({
                    guildID,
                    userId,
                    coins
                }).save()
            }
        } finally {
            mongoose.connection.close()
        }
    })
}