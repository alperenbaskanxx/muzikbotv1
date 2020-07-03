const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed();
embed.setDescription("Beni Davet Etmek İçin [TIKLA](https://discordapp.com/oauth2/authorize?client_id=670306586975141938&scope=bot&permissions=8)")

message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['davet'],
permLevel: 0
}

exports.help = {
name: 'davet',

}
o ( ) // İçine Davet