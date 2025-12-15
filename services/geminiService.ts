import { GoogleGenAI, Type } from "@google/genai";
import { RoastResponse } from "../types";

const API_KEY = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const analyzeScreenshot = async (base64Image: string): Promise<RoastResponse> => {
  if (!API_KEY) {
    throw new Error("Missing API Key");
  }

  // Remove data URL prefix if present (e.g., "data:image/png;base64,")
  const cleanBase64 = base64Image.split(',')[1] || base64Image;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/png",
              data: cleanBase64
            }
          },
          {
            text: `You are a brutal, neobrutalist UX designer known for tearing bad websites apart. 
            Look at this screenshot of a website hero section or landing page.
            
            1. Give me 3 bullet points of BRUTAL critique. Why does it suck? Be specific about copy, hierarchy, or visual clutter.
            2. Give it a score out of 10 (be harsh).
            3. Provide one "Quick Fix" - a specific actionable instruction to improve it immediately.
            
            Return the response in JSON format.`
          }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            critique: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 harsh critiques"
            },
            score: {
              type: Type.NUMBER,
              description: "Score out of 10"
            },
            fix: {
              type: Type.STRING,
              description: "One quick actionable fix"
            }
          },
          required: ["critique", "score", "fix"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as RoastResponse;
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    throw error;
  }
};