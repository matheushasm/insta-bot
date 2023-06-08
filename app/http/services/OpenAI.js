require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

    //Connection
const configuration = new Configuration({
    organization: process.env.OPENAI_API_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function createDescription (prompt) {

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 99
    });

    return completion.data.choices[0].text.trim();
}

module.exports = {
    createDescription
}