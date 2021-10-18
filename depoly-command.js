const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');

dotenv.config();
clientId = process.env.CLIENT_ID
guildId = process.env.GUILD_ID
token = process.env.DISCORD_TOKEN

const commands = [
		new SlashCommandBuilder().setName('count').setDescription('Replies with total member count in server!')

]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
