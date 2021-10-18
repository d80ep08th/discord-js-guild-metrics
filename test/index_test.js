const test = require('ava');
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const counter = require('../index.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

dotenv.config();
clientId = process.env.CLIENT_ID
guildId = process.env.GUILD_ID
token = process.env.DISCORD_TOKEN


test('if getMembers function work correctly', t => {

  t.true(!(counter.getMembers) == 0);
});
