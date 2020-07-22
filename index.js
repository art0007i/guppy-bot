const Discord = require("discord.js");
const client = new Discord.Client();

var emojis = [];
var checkin = false;

client.once("ready", () => {
	console.log("I AM READY")
	client.guilds.cache.get("672716920180703242").emojis.cache.forEach(emoji => {
		if(emoji.name.toLowerCase().includes("guppy")){
			emojis.push(emoji.id);
		}
	});
	console.log(emojis);
});

client.on("message", message => {
	if(message.author.bot){return;}
	if(message.mentions.has(client.user)){
		if(checkin){
			message.channel.send("i will now stop reacting");
			checkin = false;
		}
		else{
			message.channel.send("i will now start reacting");
			checkin = true;
		}
	}
	else if(checkin){
		emojis.slice(Math.floor(Math.random() * 5) + 15).forEach(e => {
			message.react(e);
		});
	}
});
client.on("rateLimit", rateLimitInfo => {
	//console.log(rateLimitInfo);
});

client.login("NzM1NDA0MTMxNTAxNjA0ODY2.XxfwfQ.Jj2izdykyk85Xcdtu5MQgdhhDa4");