const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());


app.post("/api/questions", async (req, res) => {
  try {
    const prompt = `
      Generate 5 multiple-choice questions in JSON format. 
      Each question should have:
      - "questionText": The text of the question.
      - "options": An array of 4 possible answers.
      - "correctAnswer": The correct answer as one of the options.
    `;

    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 300,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const data = response.data.choices[0].text;
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).send("Error fetching questions");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
