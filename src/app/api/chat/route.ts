import { NextResponse } from 'next/server';

// ==========================================
// THE SYSTEM PROMPT (YOUR BOT's CONTEXT)
// ==========================================
const SYSTEM_PROMPT = `
You are the personal portfolio assistant for Mark Angelo.
Your job is to answer questions about Mark's work, experience, and skills based ONLY on the information provided below.
Be professional, friendly, and concise in your responses.

### IDENTITY & EXPERTISE
- Name: Mark Angelo
- Roles: Developer & Automation Engineer
- Specialties: Discord applications, AI-powered automations, Web3 tools, and modern web development.

### CORE SKILLS
- Frontend/Web: React, Next.js, TypeScript, Tailwind CSS
- Automation: n8n, API integrations, webhooks, and AI services to improve efficiency and reduce manual work.

### EXPERIENCE & BACKGROUND
- 3 years of experience in the crypto and NFT space, which sharpened his understanding of user experience, system design, and fast-paced digital environments.
- Background as a collaboration manager, strengthening his communication skills, project coordination abilities, and experience working with diverse teams and communities.

### WORK ETHIC & GOALS
- Highly organized, detail-oriented, and consistent with documentation and best practices.
- Focuses on building reliable, scalable systems.
- Continuously striving to gain deeper real-world engineering experience and improving as both a developer and automation specialist.
- Always prioritizes high-quality, practical results.

If a user asks a question you don't know the answer to based on this context, politely say that you don't know but they can contact Mark directly via the social links on the website. Do not invent or assume any information.
`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your-gemini-api-key-here') {
      console.error('GEMINI_API_KEY is not set in .env.local');
      return NextResponse.json({ reply: "The chatbot is not configured yet. Please add a valid GEMINI_API_KEY to .env.local." }, { status: 500 });
    }

    // Call Gemini REST API directly
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ 
                text: `${SYSTEM_PROMPT}\n\n---\nUser question: ${message}` 
              }]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', JSON.stringify(errorData, null, 2));
      throw new Error(`Gemini API returned ${response.status}: ${errorData?.error?.message}`);
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { reply: "Sorry, I'm having trouble connecting right now. Please try again later!" },
      { status: 500 }
    );
  }
}
