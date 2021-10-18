PROJECT_NAME=discord bot counts members

bot:
	@npm install discord.js dotenv
	@npm install @discordjs/builders @discordjs/rest discord-api-types

cmd:
	@node deploy-commands.js

count:
	@node index.js
