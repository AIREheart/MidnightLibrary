import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export async function generateBookSummary(title: string, author: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Generate a concise, engaging, one-paragraph summary for the book "${title}" by ${author}. The summary should capture the main premise and tone of the book without revealing major spoilers.`;
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    // @ts-ignore - The text accessor is a function in some environments.
    return response.text();
  } catch (error) {
    console.error("Error generating summary with Gemini API:", error);
    throw new Error("Failed to fetch summary from Gemini API.");
  }
}