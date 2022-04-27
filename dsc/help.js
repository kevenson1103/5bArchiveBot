const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(`
**ITEM ARCHIVE COMMANDS:**
a.addkit (a.kitadd)
a.addbook (a.bookadd)
a.addmap (a.mapadd)
a.addbanner (a.banneradd)
a.addcollectible (a.collectibleadd)

**IMAGE/VIDEO ARCHIVE COMMANDS**
a.addbasescreenshot (a.basescreenshotadd)
a.addgriefscreenshot (a.griefscreenshotadd)
a.addbaserender (a.baserenderadd)
a.addspawnrender (a.spawnrenderadd)
a.add2020screenshot (a.2020screenshotadd)
a.add2020video (a.2020videoadd)

**DISCORD ARCHIVE COMMANDS**
a.addgroup (a.groupadd)
a.addmarket (a.marketadd)
a.addcommunity (a.communityadd)

**MISC COMMANDS:**
a.help (a.commands) (a.cmds)
a.test
`)
.setThumbnail(`https://cdn.discordapp.com/attachments/396858990858076180/968322376687300678/IMG_5208.jpg`)
.setFooter(`Note: Archive commands can only be used by collectors, or admins.`)
.setColor(0xff00d0)
.setTimestamp()
message.channel.send({embeds:[embed]})
}
module.exports.help = {
    name: "help",
    aliases: ['commands', 'cmds']
}