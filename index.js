const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

dotenv.config();
token = process.env.DISCORD_TOKEN

client.once('ready', () => {
	console.log('Ready to count members!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'server') {
		await interaction.reply(`Total members in server: ${interaction.guild.memberCount}`);
	}
});

client.login(token);
