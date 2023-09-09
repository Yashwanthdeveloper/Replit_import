var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "economy",
    description: "",
    usage: "1) m/economy [module name]\n2) m/feconomy[command (name or alias)]",
    example: "1) m/ec\n2) m/fn\n3) m/ec",
    aliases: ['ec']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}economy`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor(" - economy commands")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/910093090671448134.png?size=100")

    .setDescription (`My Prefix In This Server is <a:901518580825354280:928245348722438164>  \`${prefix}\``)
    
   .addField(`ㅤ`, `
>   addmoney
>   removemoney
>   balance
>   beg
>   buy
>   daily
>   weekly
>   deposit
>   leaderboard
>   give
>   profile
>   rob
>   roulette
>   sell
>   setbackground
>   setinfo
>   slots
>   shop
>   withdraw
>   work`)

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}