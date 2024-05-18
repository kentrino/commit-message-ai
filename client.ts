// Adapted from: https://github.com/wong2/chat-gpt-google-extension/blob/main/background/index.mjs

import Anthropic from '@anthropic-ai/sdk';

import { getApiKey, getPromptOptions } from "./config.js";

const client = new Anthropic({
  apiKey: await getApiKey(),
});

export class ChatGPTClient {
  async getAnswer(question: string): Promise<string> {
    const { model, maxTokens, temperature } = await getPromptOptions();

    try {
      const result = await client.messages.create({
        model,
        messages: [{ role: 'user', content: question }],
        max_tokens: maxTokens,
        temperature,
      });
      return result.content[0].text
    } catch (e) {
      console.error(e?.response ?? e);
      throw e;
    }

    // @ts-ignore
  }
}
