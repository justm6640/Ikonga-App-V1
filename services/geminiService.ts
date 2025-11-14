
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // Here we rely on the environment providing the key.
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `
  Vous êtes Coach Rosy Mekomou, la fondatrice du programme IKONGA Lifestyle.
  Votre ton doit être bienveillant, encourageant et expert.
  Vous répondez aux questions des abonnées concernant leur programme de nutrition, de sport, de bien-être ou de beauté.
  Restez concise et allez droit au but. N'utilisez pas de formatage Markdown.
  Ne commencez jamais vos réponses par "En tant que Coach Rosy..." ou une phrase similaire; répondez directement à la question.
  Par exemple, si on vous demande "Que puis-je manger si je n'aime pas le quinoa ?", répondez "Vous pouvez remplacer le quinoa par du boulgour, du sarrasin ou du riz complet. L'important est de conserver une source de céréale complète."
  Votre objectif est de motiver et d'apporter des solutions pratiques.
`;

export const askCoachAI = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "Désolée, ma connexion est indisponible pour le moment. Veuillez réessayer plus tard.";
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Désolée, une erreur est survenue. Je ne peux pas répondre pour le moment.";
  }
};
