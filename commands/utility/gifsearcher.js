const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const guiphyToken = process.env.GUIPHY_TOKEN;
const guiphyEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${guiphyToken}&limit=4&q=`;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gifsearch')
        .setDescription('Search for a gif')
        .addStringOption(option => option.setName('query').setDescription('What to search for').setRequired(true)),
    async execute(interaction) {
        if (!interaction.isCommand()) return;

        const { commandName, options } = interaction;

        if (commandName === 'gifsearch') {
            const query = options.getString('query');

            // Fetch a random GIF based on the user's query
            const gifUrl = await this.fetchRandomGif(query);

            // Send the GIF URL as a reply
            await interaction.reply(gifUrl);
        }
    },

    // Function to fetch a random GIF from Giphy based on the user's query
    async fetchRandomGif(query) {
        // Make a request to the custom Giphy endpoint to search for GIFs based on the user's query
        const response = await axios.get(`${guiphyEndpoint}${encodeURIComponent(query)}`);
        const json = response.data;
    
        // Check if any GIFs were found
        if (json.data.length === 0) {
            return 'No GIF found for your query';
        }
    
        // Select a random GIF from the array of GIFs
        const randomIndex = Math.floor(Math.random() * json.data.length);
        const gifUrl = json.data[randomIndex].images.original.url;
    
        return gifUrl;
    }
    
};
