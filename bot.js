
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on(  +'ready', () => {
    console.log('I am ready!');
});



client.on('message', message => {
    if (message.content === prefix +'ping') {
    	message.channel.send('PONG!');
  	}
 if (message.content === prefix +'Ping') {
    	message.channel.send('PONG!');
  	}
});

   client.on('message', message => {
   if (message.content === prefix +'dj') {
        message.channel.send("here is a link to Dj_Ghostly-Stars website  https://djghostlystar.wixsite.com/dj-ghostly-star");
 
  	}
         if (message.content === prefix +'Dj') {
        message.channel.send("here is a link to Dj_Ghostly-Stars website   https://djghostlystar.wixsite.com/dj-ghostly-star");
 
  	}
        if (message.content === prefix +'DJ') {
        message.channel.send("here is a link to Dj_Ghostly-Stars website   https://djghostlystar.wixsite.com/dj-ghostly-star");
 
  	}
          if (message.content === prefix +'Ghostly') {
        message.channel.send("here is a link to Dj_Ghostly-Stars website   https://djghostlystar.wixsite.com/dj-ghostly-star");
 
  	}
        if (message.content === prefix +'ghostly') {
        message.channel.send("here is a link to Dj_Ghostly-Stars website   https://djghostlystar.wixsite.com/dj-ghostly-star");
 
  	}
       
});


  client.on('message', message => {
   if (message.content === prefix +'Scopez') {
        message.channel.send("here is a link to Scopezs website  https://tjsharkey08.wixsite.com/logoandbanners");
 
  	}
         if (message.content === prefix +'scopez') {
        message.channel.send("here is a link to Scopezs website   https://tjsharkey08.wixsite.com/logoandbanners");
 
  	}
        if (message.content === prefix +'site') {
        message.channel.send("here is a link to Scopezs website   hhttps://tjsharkey08.wixsite.com/logoandbanners");
 
  	}
          if (message.content === prefix +'Site') {
        message.channel.send("here is a link to Scopezs website  https://tjsharkey08.wixsite.com/logoandbanners");
 
  	}
    
       
});
 
 

    
client.on('message', message => {
    if (message.content === prefix +'help') {
    	message.channel.send('Hello im Assasin , my commands are the following with out quotation marks ,  " !help " , " !ping " , " !dj ", " !ghostly " . ');
  	}
});
//menu stuff 

/*
client.on('message', message => {
    if (message.content === prefix +'status') {
    	message.channel.send('BOT = online, menu = Offline/detected.');
  	}
        if (message.content === prefix +'s') {
            message.channel.send('BOT = online, menu = Offline/detected.');
        }
    
});

*/

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

