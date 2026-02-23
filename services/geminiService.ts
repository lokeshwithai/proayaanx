import { GoogleGenAI } from "@google/genai";
import { ResearchToolMode } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not set");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateResearchContent = async (
  mode: ResearchToolMode,
  input: string,
  context?: string
): Promise<string> => {
  try {
    const ai = getClient();
    let prompt = "";

    switch (mode) {
      case ResearchToolMode.BRAINSTORM:
        prompt = `You are a senior VLSI research assistant. The user is interested in the field of: "${input}". Provide 3-5 novel research paper topic ideas specifically for this field. For each topic, briefly explain the problem statement and potential methodology. Keep technical terms accurate (e.g., FinFET, GAA, NoC, UVM).`;
        break;
      case ResearchToolMode.SUMMARIZE:
        prompt = `You are a technical editor for IEEE journals. Please summarize the following research abstract or technical notes into a concise paragraph suitable for a paper introduction:\n\n"${input}"`;
        break;
      case ResearchToolMode.PROOFREAD:
        prompt = `You are a strict academic reviewer. Proofread the following text for grammar, clarity, and academic tone. Do not change the technical meaning, but enhance the flow:\n\n"${input}"`;
        break;
      default:
        prompt = input;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please ensure your API key is valid and try again.";
  }
};
