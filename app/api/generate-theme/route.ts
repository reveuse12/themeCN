import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

async function generateThemeWithGemini(prompt: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const instruction = `You are a theme generator for a Next.js application using Tailwind CSS and shadcn/ui. Based on the user's prompt, generate a theme with the following properties:

- id: a unique identifier for the theme (e.g., 'ocean-breeze')
- name: a user-friendly name for the theme (e.g., 'Ocean Breeze')
- description: a brief description of the theme
- colors: an object of HSL color values for the following properties: background, foreground, card, cardForeground, popover, popoverForeground, primary, primaryForeground, secondary, secondaryForeground, muted, mutedForeground, accent, accentForeground, destructive, destructiveForeground, border, input, ring
- fonts: an object with a single property, 'sans', which is the name of the font to use (e.g., 'var(--font-inter)')

The output should be a valid JSON object. Do not include any other text or explanations in your response.

Prompt: ${prompt}`;

  const result = await model.generateContent(instruction);
  const response = await result.response;
  const text = await response.text();

  return JSON.parse(text);
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const theme = await generateThemeWithGemini(prompt);
    return NextResponse.json(theme);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while generating the theme.' }, { status: 500 });
  }
}
