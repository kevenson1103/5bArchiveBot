/*
-- from kev

    this is a TEST FILE, just so i can test new features without messing up any existing commands.

*/

const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.run = async (client, message, args) => {

    if(message.author.id === "312734500880646145") {
        if(message.toString().includes(`youtube.com/watch`)) {
            const messages = [];
            args.forEach(arg => {
                messages.push(arg)
            });

            const msg = messages.join(' ')

                message.reply(`

This is what your message will look like, are you sure you would like to archive it?:

**Submitted by: ${message.author.tag}**
${msg}
                `).then(botMsg => {
                    botMsg.react('👍')
                    botMsg.react('👎')

                    let filter = []

                    botMsg.awaitReactions( filter, { max: 1, time: 60000, errors: ['time'] } )
                    .then(collected => {
                        if(Discord.MessageReaction.emoji === '👍') {
                            let channel = client.channels.cache.get("968325940839088148")
    
                            channel.send(`
                            **Submitted by: ${message.author.tag}**
                            ${msg}
                            `)
                            botMsg.reply(`Video successfully archived!`)
                        } else if(Discord.MessageReaction.emoji === '👎') {
                            return botMsg.reply(`Cancelled!`)
                        }
                    })
                })
        } else {
            message.reply(`Give me a video to archive!`)
        }
    } else {
        message.reply(`You do not have permission to use this command!`)
    }
}
module.exports.help = {
    name: "addvtest",
    aliases: ['vtestadd']
}

/*
                    client.on("messageReactionAdd", (reaction, user) => {
                        if(reaction.message.id === botMsg.id) {
                            if(reaction.emoji.name === '👍') {
                                if(user.bot) {return} 
                                let channel = client.channels.cache.get("968325940839088148")
    
                                channel.send(`
                                **Submitted by: ${message.author.tag}**
                                ${msg}
                                `)
                                botMsg.reply(`Video successfully archived!`)
                            } else if(reaction.emoji.name === '👎') {
                                return botMsg.reply(`Cancelling!`)
                            } else {
                                return
                            }
                        }
                    })
*/