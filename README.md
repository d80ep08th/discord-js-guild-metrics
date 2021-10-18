# discord-js-guild-metrics

## Install packages required for bot
```
make bot
```
requires node -v ==> v16.6.0 or higher

## deploy-commands.js

This file will be used to register and update the slash commands for your bot application.
You only need to run node deploy-commands.js once. You should only run it again if you add or edit existing commands.
```
node deploy-commands.js
```
## Start the bot
```
node index.js
```

## Environment
```
CLIENT_ID= id of the bot application
GUILD_ID= id of the server whose information is retrieved
DISCORD_TOKEN= token assosciated with the bot
```
