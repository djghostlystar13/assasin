
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";

client.on(  +'ready', () => {
    console.log('I am ready!');
});



client.on('message', message => {
    if (message.content === prefix +'ping') {
    	message.channel.send('PONG!');
  	}
 
});

   client.on('message', message => {
   if (message.content === prefix +'gta5-key') {
        message.channel.send('Please check your **DM**s');
      message.author.send('This code is your persional code do not share without quotation marks " Gta520172018 "');
  	}
});
 
 

    
client.on('message', message => {
    if (message.content === prefix +'help') {
    	message.channel.send('Hello im Ghostly-2.0, my commands are the following with out quotation marks , bot commands about the menu ! , " $status " , " $s " , " Download " , " $features " , " $gta5-key " ,  Other bot commands! " $help " , " $ping " , " $bing " . ');
  	}
});
//menu stuff 
client.on('message', message => {
    if (message.content === 'download') {
    	message.channel.send('the cheat is currently not available, please be patient as there is only one developer.');
  	}
          if (message.content === 'Download') {
            message.channel.send('the cheat is currently not available, please be patient as there is only one developer.');
        }
});

client.on('message', message => {
    if (message.content === prefix +'status') {
    	message.channel.send('BOT = online, menu = Offline/detected.');
  	}
        if (message.content === prefix +'s') {
            message.channel.send('BOT = online, menu = Offline/detected.');
        }
    
});

 
client.on('message', message => {
    if (message.content === prefix +'features') {
    	message.channel.send('List of features in the menu! Godmode , DemiGod , *Teleport , No Reload , Infinite Ammo , Bullet Damage , RP increase , Never wanted , Super jump , Fast run ,Vehicle god , No recoil , Set time . *means this feature is buggy and sometimes crashes game . ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

