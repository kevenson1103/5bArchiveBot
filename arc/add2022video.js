const oldRole = "968191860013162596"
const midRole = "968191860671647764"
const newRole = "968191861548261386"

const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.run = async (client, message, args) => {

    if(message.member.roles.cache.has(oldRole) || message.member.roles.cache.has(midRole) || message.member.roles.cache.has(newRole) || message.author.id === "312734500880646145") {
        if(message.toString().includes(`youtube.com/watch`)) {
            let messages = [];
            args.forEach(arg => {
                messages.push(arg)
            });

            let msg = messages.join(' ')

            let channel = client.channels.cache.get("970398426611208223")
                channel.send(`
**Submitted by: ${message.author.tag}**
${msg}
                `)
                message.reply(`2020 video successfully archived!`)
        } else {
            message.reply(`Give me a video to archive!`)
        }
    } else {
        message.reply(`You do not have permission to use this command!`)
    }
}
module.exports.help = {
    name: "add2021video",
    aliases: ['2021videoadd']
}