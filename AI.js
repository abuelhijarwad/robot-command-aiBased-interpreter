const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


const arr = {
    'command': "this is suposed to be one of the following: ['walk','dance','run'] if none say none",
    'value': "this is supposed to be the value of the act in mm if it is in other unit transfer it, if no value put 0",
    'direction': "it means the direction of the act with a degree angel clock wise forward is zero.."
}


async function analyzeForCommand(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: 
    "I will give you a promot that is suposed to be command for robot,"
    + " please infer what the comand wants and return json as this: "
    +JSON.stringify(arr)
    +" ,the promot is: "
     + prompt }],
    });
    return (response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports.analyze = (analyzeForCommand);