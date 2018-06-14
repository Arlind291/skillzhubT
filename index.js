const Discord = require("discord.js");
const client = new Discord.Client();

const PREFIX = "sh!"

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
  console.log("Ready");
  bot.user.setActivity("With Arlind");
  bot.user.setStatus("dnd");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    //PING
    case "ping":
    message.channel.sendMessage("Pinging...").then((mes) => {
      mes.edit(`Pong! :ping_pong: ${message.author.toString()} API is ${bot.ping.toFixed()}ms`)
      message.channel.send
    });
    break;
    
    //BOTINFO
    case "serverinfo":
    var embed = new Discord.RichEmbed()
    .setDescription("***Server Information***")
    .addField("Name", "SkillzHub")
    .addField("Created at", message.guild.createdAt)
    .addField("Member Count", message.guild.memberCount)
    .addField("Server Reigon :flag_eu:", message.guild.region)
    .addField("Channels", bot.channels.size)
    .addField("Roles", message.guild.roles.size)
    .addField("ID:", "375635880313880586")
    .setColor(14177041)
    .setThumbnail(bot.user.avatarURL)
    message.channel.sendEmbed(embed);
    break;
    case 'ban':   
    if (message.content.startsWith(PREFIX + "ban")) {
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission to ban members!");
      if (!message.mentions.members.first()) return message.reply("Usage: " + PREFIX + "ban <@user> [reason]");
      message.guild.member(message.mentions.users.first()).ban();
     message.channel.sendMessage('***Member banned!***');
        };
        break;
        case 'kick':
        if (message.content.startsWith(PREFIX + "kick")) {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have permission to kick members!");
            if (!message.mentions.members.first()) return message.reply("Usage: " + PREFIX + "kick <@user> [reason]");
            message.guild.member(message.mentions.users.first()).kick();
            message.channel.sendMessage('***Member kicked!***');
        };
        break;
      
    
    
    default:
    message.channel.sendMessage("Invalid Command :shrug:");
  }
 

})
client.login(process.env.BOT_TOKEN);
