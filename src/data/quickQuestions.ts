// Quick-question buttons shown under the chat input.
// Each button sends a natural-language question to the bot.
export interface QuickQuestion {
  label: string;
  question: string;
}

export const quickQuestions: QuickQuestion[] = [
  { label: 'Track Order', question: 'How can I track my order?' },
  { label: 'Return Product', question: 'How can I return a product?' },
  { label: 'Refund Status', question: 'What is the refund policy?' },
  { label: 'Delivery Info', question: 'How long does delivery take?' },
  { label: 'Cancel Order', question: 'Can I cancel my order?' },
];
