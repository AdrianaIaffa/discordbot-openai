const { OpenAI } = require('openai');
const dotenv = require('dotenv');
const { Events } = require('discord.js');


dotenv.config();
const openaiToken = process.env.OPENAI_TOKEN;

const openai = new OpenAI({ apiKey: openaiToken });

openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Test message' }],
}).then(response => {
    console.log('Connection to OpenAI successful:', response);
}).catch(error => {
    console.error('Connection to OpenAI failed:', error);
});

module.exports = {
    name: 'messageCreate', // This is the name of the event
    async execute(message) {
        if (message.author.bot || !message.content.startsWith('!')) return; 
        try {
            // Send the user message to OpenAI for completion
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message.content }],
            });

            // Extract completion from OpenAI response
            const response = completion.choices[0].message.content;

            // Send the completion back to the Discord channel
            await message.channel.send(response);
        } catch (error) {
            console.error('Error occurred while processing message:', error);
            await message.reply('An error occurred while processing your request. Please try again later.');
        }
    },
};
