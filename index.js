const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

dotenv.config();
clientId = process.env.CLIENT_ID
guildId = process.env.GUILD_ID
token = process.env.DISCORD_TOKEN

function getMembers(GUILD_ID){
	let count = 0;
	const guild = client.guilds.cache.get(guildId);
	count = guild.memberCount;
	console.log("member count==>" +count);
	return count;
}


client.once('ready', () => {
	console.log('Ready to count members!');
	getMembers(guildId);
});


client.login(token);

