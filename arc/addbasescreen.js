const ownerRole = "968183784438648863"
const adminRole = "968192732122210364"
const staffRole = "968191734653808692"
const collectorRole = "968191744246177812"

const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.run = async (client, message, args) => {

    if(message.member.roles.cache.has(ownerRole) || message.member.roles.cache.has(adminRole) || message.member.roles.cache.has(staffRole) || message.member.roles.cache.has(collectorRole) || message.author.id === "312734500880646145") {
        const attachment = message.attachments.first()
        if(attachment) {
            if(args) {
                let messages = [];
                args.forEach(arg => {
                    messages.push(arg)
                });

                let msg = messages.join(' ')
                let channel = client.channels.cache.get("968197449082621952")

                const embed = new Discord.MessageEmbed()
                .setTitle(`Submitted by: ${message.author.tag}`)
                .setDescription(`${msg}`)
                .setImage(`${attachment.url}`)
                .setColor(0xff00d0)
                .setTimestamp()
                channel.send({embeds:[embed]})

                message.reply(`Image successfully archived!`)
            } else if(!args) {
                let channel = client.channels.cache.get("968197449082621952")
                const embed = new Discord.MessageEmbed()
                .setTitle(`Submitted by: ${message.author.tag}`)
                .setImage(`${attachment.url}`)
                .setColor(0xff00d0)
                .setTimestamp()
                channel.send({embeds:[embed]})

                message.reply(`Image successfully archived!`)
            }
        } else {
            message.reply(`Give me an image to send!`)
        }
    } else {ff
        message.reply(`You do not have permission to use this command!`)
    }
}
module.exports.help = {
    name: "addbasescreenshot",
    aliases: ['basescreenshotadd']
}