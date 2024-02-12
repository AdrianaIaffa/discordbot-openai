const { OpenAI } = require('openai');
const dotenv = require('dotenv');

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

// module.exports = {
//     name: 'messageCreate',
//     async execute(message) {
//         console.log('Message received:', message.content);

//         // Check if the message author is a bot
//         if (message.author.bot) return;

//         if (message.content === '!hello') {
//             message.channel.send('Hello!');
//         }

//         // Send the user's message to OpenAI for completion
//         // const prompt = message.content;
//         if (!message.content.startsWith('!')) {
//             try {
//                 const openaiResponse = await openai.chat.completions.create({
//                     model: 'gpt-3.5-turbo',
//                     messages: [{ role: 'user', content: message.content }],
//                 });
    
//                 // Send OpenAI response back to the channel
//                 message.channel.send(openaiResponse.data.choices[0].message.content);
//                 console.log('OpenAI Response:', openaiResponse.data.choices[0].message.content);

//             } catch (error) {
//                 console.error('Error processing message:', error);
//                 message.channel.send('Sorry, I encountered an error.');
//             }
//         }
//     }
// };


// const { OpenAI } = require('openai');
// const dotenv = require('dotenv');

// dotenv.config();
// const openaiToken = process.env.OPENAI_TOKEN;

// const openai = new OpenAI({ apiKey: openaiToken });

// module.exports = {
//     name: 'messageCreate',
//     async execute(message) {
//         console.log('Message received:', message.content);

//         // Check if the message author is a bot
//         if (message.author.bot) return;

//         if (message.content === '!hello') {
//             // Send "Hello!" to the same channel
//             message.channel.send('Hello!');

//         // Send the user's message to OpenAI for completion
//         // const prompt = message.content;
//         if (!message.content.startsWith('!')) {
//             try {
//                 const openaiResponse = await openai.chat.create({
//                     model: 'gpt-3.5-turbo-1106', // Or any other suitable model
//                     messages: [{ role: 'user', content: message.content }],
//                 }, { apiKey: openaiToken });
    
//                 // Send OpenAI response back to the channel
//                 message.channel.send(openaiResponse.data.choices[0].message.content);
//             } catch (error) {
//                 console.error('Error processing message:', error);
//                 message.channel.send('Sorry, I encountered an error.');
//             }
//         }}}}

//         try {
//             const response = await openai.chat.completions.create({
//                 model: 'gpt-3.5-turbo',
//                 messages: [{ role: 'user', content: prompt }],
//                 temperature: 0.7
//             });

//             // Send the response from OpenAI back to the Discord channel
//             message.channel.send(response.data.choices[0].message.content);
//         } catch (error) {
//             console.error('Error while querying OpenAI:', error);
//             message.channel.send('There was an error while processing your request.');
//         }
//     }
// };


// module.exports = {
//     name: 'messageCreate',
//     execute(message) {
//         console.log('Message received:', message.content);

//         // Check if the message author is a bot
//         if (message.author.bot) return;

//         // Check if the message content is "!hello"
//         if (message.content === '!hello') {
//             // Send "Hello!" to the same channel
//             message.channel.send('Hello!');
//         } else if (message.content === '!ping') {
//             // Send "Pong!" to the same channel
//             message.channel.send('Pong!');
//         } else if (message.content.startsWith('!say')) {
//             // Extract the text to say from the message content
//             const text = message.content.slice('!say'.length).trim();
            
//             // Send the extracted text to the same channel
//             message.channel.send(text);
//         }
//     }
// };
