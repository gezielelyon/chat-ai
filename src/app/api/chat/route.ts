import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(request: Request) {
  const { messages } = await request.json()

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages
  })

  return result.toAIStreamResponse() 
}