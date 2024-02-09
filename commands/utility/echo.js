const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
			.setRequired(true)),
      async execute(interaction) {
        const userInput = interaction.options.getString('input');
        await interaction.reply(`You said: ${userInput}`);
      }  
}


	
//     ),
//   async execute(interaction) {
//     const userInput = interaction.options.getString('input');
//     await interaction.reply(userInput || "You didn't provide any input!");
//     await wait(2_000);
//     await interaction.deleteReply();
//   },