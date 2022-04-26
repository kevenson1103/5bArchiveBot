const ownerRole = "968183784438648863"
const adminRole = "968192732122210364"
const staffRole = "968191734653808692"
const collectorRole = "968191744246177812"

module.exports.run = async (client, message, args) => {
    if(message.member.roles.cache.has(ownerRole) || message.member.roles.cache.has(adminRole) || message.member.roles.cache.has(staffRole) || message.member.roles.cache.has(collectorRole) || message.author.id === "312734500880646145") {
        message.reply(`this works`)
    } else {
        message.reply(`You do not have permission to use this command!`)
    }
}
module.exports.help = {
    name: "addcommunity",
    aliases: ['communityadd']
}