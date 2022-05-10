const oldRole = "968191860013162596"

const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.run = async (client, message, args) => {

    if(message.member.roles.cache.has(oldRole) || message.author.id === "312734500880646145") {
        const attachment = message.attachments.first()
        if(attachment) {
            if(args) {
                let messages = [];
                args.forEach(arg => {
                    messages.push(arg)
                });

                let msg = messages.join(' ')
                let channel = client.channels.cache.get("968865223266172938")

                const embed = new Discord.MessageEmbed()
                .setTitle(`Submitted by: ${message.author.tag}`)
                .setDescription(`${msg}`)
                .setImage(`${attachment.url}`)
                .setColor(0xff00d0)
                .setTimestamp()
                channel.send({embeds:[embed]})

                message.reply(`2020 Screenshot successfully archived!`)
            } else if(!args) {
                let channel = client.channels.cache.get("968865223266172938")
                const embed = new Discord.MessageEmbed()
                .setTitle(`Submitted by: ${message.author.tag}`)
                .setImage(`${attachment.url}`)
                .setColor(0xff00d0)
                .setTimestamp()
                channel.send({embeds:[embed]})

                message.reply(`2020 Screenshot successfully archived!`)
            }
        } else {
            message.reply(`Give me a screenshot to archive!`)
        }
    } else {
        message.reply(`You do not have permission to use this command!`)
    }
}
module.exports.help = {
    name: "add2020screenshot",
    aliases: ['2020screenshotadd']
}