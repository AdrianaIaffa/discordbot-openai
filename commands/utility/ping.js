const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		// console.log('Command data:', this.data); 
		// console.log('Interaction:', interaction); 
		await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
	},
};