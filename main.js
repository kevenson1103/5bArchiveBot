const tStart = +new Date()

const config = require("./config.json")
const token = config.token

const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('fs');

client.on('ready', () => {
    console.log(`${client.user.username} is online and active in ${client.guilds.cache.size} servers!`)
    const tEnd = +new Date()
    console.log(`Init Time: ${tEnd - tStart}ms`)
    console.log(`////////////////////////////////////////`)
})

client.commands = new Discord.Collection(); //command collection init
client.aliases = new Discord.Collection(); //command alias collection init

fs.readdir("./arc/", (err, files) => { //This block of code reads each .js file in the commands folder and loads it into the commands collection
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js"); //makes sure each file it loads ends with .js
    if(jsfile.length <= 0){
        return console.log("no commands found"); //if no commands, it will log this in console. You should never see this
    }

    jsfile.forEach((f) => {
        let props = require(`./arc/${f}`); 
        console.log(`${f} loaded!`); //Logs this for each file successfully loaded
        client.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        })
    })
})

fs.readdir("./dsc/", (err, files) => { //This block of code reads each .js file in the commands folder and loads it into the commands collection
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js"); //makes sure each file it loads ends with .js
    if(jsfile.length <= 0){
        return console.log("no commands found"); //if no commands, it will log this in console. You should never see this
    }

    jsfile.forEach((f) => {
        let props = require(`./dsc/${f}`); 
        console.log(`${f} loaded!`); //Logs this for each file successfully loaded
        client.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        })
    })
})

client.on("messageCreate", async message => {
    if(message.channel.type === "dm") return;
    if(message.author.id === client.user.id) return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefix: config.prefix
        }
    }
    let prefix = prefixes[message.guild.id].prefix;

    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g); //splits each arg into a seperate value and into an array to be read later like args[0], args[1]. all depending in if they exist.
    let cmd = args.shift().toLowerCase();
    let command;

    if(client.commands.has(cmd)){
        command = client.commands.get(cmd);
    } else if(client.aliases.has(cmd)){
        command = client.commands.get(client.aliases.get(cmd));
    }

    try{
        command.run(client, message, args); //executes the command
    } catch (e){
        return;
    }


})

client.login(`${token}`)