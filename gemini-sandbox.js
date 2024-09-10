/**
 * Import the Google Generative AI library.
 */
import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Initialize the Google Generative AI instance with API key.
 */
const genAI = new GoogleGenerativeAI('AIzaSyAGXxnpHpaCCPpZPIeOVOctmWIn8AXW0wQ');

/**
 * Get the Gemini 1.5 Flash generative model.
 */
const model = genAI.getGenerativeModel({
  // Other models: https://ai.google.dev/gemini-api/docs/models/gemini
  model: "gemini-1.5-flash"
});

/**
 * User prompt to be passed to the model.
 */
let prompt = "Why is the sky blue?";

/**
 * Pass the prompt to the model and generate a response.
 */
const aiResponse = await model.generateContent(prompt);

/**
 * Log the generated response to the console.
 */
console.log(aiResponse.response.text());