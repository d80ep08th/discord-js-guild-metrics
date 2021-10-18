# discord-js-guild-metrics

The Intents.FLAGS.GUILDS intents option is necessary for your client to work properly.
node -v ==> v16.6.0 or higher
```
npm install discord.js
npm install dotenv
```

##deploy-commands.js

This file will be used to register and update the slash commands for your bot application.
```
npm install @discordjs/builders @discordjs/rest discord-api-types
```
You only need to run node deploy-commands.js once. You should only run it again if you add or edit existing commands.
```
node deploy-commands.js
```
