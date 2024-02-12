// // In ai.js
// require('dotenv').config();
// const OpenAi = require("openai");
// const { Configuration, OpenAIApi } = require("openai");


// const openaiToken = process.env.OPENAI_API_KEY;

// const openaiClient = new OpenAi(openaiToken);

// const configuration = new Configuration({
//     apiKey: openaiClient,
// });
// const openai = new OpenAIApi(configuration);

// async function ask(prompt) {
//     const response = await openai.createCompletion({
//         model: "text-davinci-002",
//         prompt,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//     });
//     const answer = response.data.choices[0].text;
//     console.log(answer);
// }

// // Ask an example question
// ask("What are the names of the planets in the solar system?");
