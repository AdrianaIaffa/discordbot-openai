// Require the necessary discord.js classes
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');
const { OpenAI } = require('openai');


// --------- DOT ENV CONFIG -----------//

dotenv.config();
const token = process.env.DISCORD_TOKEN;
const openaiToken = process.env.OPENAI_TOKEN; 
const openai = new OpenAI({ apiKey: openaiToken });

console.log(process.env.A);
console.log(process.env.B);
console.log(process.env.DISCORD_TOKEN);
console.log(process.env.CLIENT_ID);
console.log(process.env.GUILD_ID);

// ---------- GUILDS - Create a new client instance --------------//

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
]  
});

//-------- COLLECTIONS ----------//
client.commands = new Collection();

//------------ LOAD COMMANDS - CLIENT COMMANDS --------------//


const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// ------------- DYNAMICALLY RETRIEVE EVENT FILEs IN THE EVENTS FOLDER -------------//

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}



client.login(token);


