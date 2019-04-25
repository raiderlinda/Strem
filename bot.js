const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "R";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!~ Raider ,,,`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

const developers = ["562313255322779657"]
const adminprefix = "R";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'p')) {
    client.user.setGame(argresult);
      message.channel.send(`:white_check_mark:`)
  } else 
     if (message.content === (adminprefix + "leaveserver")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`:white_check_mark:`)
  } else 
  if (message.content.startsWith(adminprefix + 'l')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`:white_check_mark:`)
  } else 
  if (message.content.startsWith(adminprefix + 's')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`:white_check_mark:`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`:white_check_mark:`)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`:white_check_mark:`);
}
});

client.login(process.env.BOT_TOKEN);
