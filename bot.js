const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === prefix +'ping') {
    	message.channel.send('PONG!');
  	}
 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.VlWxmrr8NQbg3UDqcNkx8fOXCc_1efuO);
