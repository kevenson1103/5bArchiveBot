const ownerRole = "968183784438648863"
const adminRole = "968192732122210364"
const staffRole = "968191734653808692"
const collectorRole = "968191744246177812"

const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.run = async (client, message, args) => {

    if(message.member.roles.cache.has(ownerRole) || message.member.roles.cache.has(adminRole) || message.member.roles.cache.has(staffRole) || message.member.roles.cache.has(collectorRole) || message.author.id === "312734500880646145") {
        if(message.toString().includes(`https://discord.gg/`)) {
            let messages = [];
            args.forEach(arg => {
                messages.push(arg)
            });

            let msg = messages.join(' ')

            let channel = client.channels.cache.get("968197168420782091")
                channel.send(`
**Submitted by: ${message.author.tag}**
${msg}
                `)
                message.reply(`Group Discord successfully archived!`)
        } else {
            message.reply(`Give me a group Discord to archive!`)
        }
    } else {
        message.reply(`You do not have permission to use this command!`)
    }
}
module.exports.help = {
    name: "addgroup",
    aliases: ['groupadd']
}