// Predefined AI response engine.
// Instead of calling an external paid AI API, we match keywords in the
// customer's message to a set of friendly, helpful canned responses.
//
// The structure is intentionally simple so a real AI API can be dropped in
// later by replacing the `getBotResponse` function with an API call.

interface Rule {
  keywords: string[];
  response: string;
}

const rules: Rule[] = [
  {
    keywords: ['where', 'my order', 'order is', 'order status'],
    response:
      "You can track your order any time from the Order Tracking section on this page. Just enter your order ID and you'll see live status updates — from 'Order Placed' all the way to 'Delivered'. Want me to walk you through it?",
  },
  {
    keywords: ['return', 'return a product', 'return product'],
    response:
      "Returns are easy! You have 30 days from delivery to request a return. Go to your Orders page, select the item, and click 'Request Return'. We'll send you a prepaid return label and a refund once we receive the item.",
  },
  {
    keywords: ['refund', 'refund policy', 'refund status'],
    response:
      "Our refund policy is simple: once we receive and inspect your returned item, your refund is processed within 3–5 business days back to your original payment method. You can track the refund status from your Orders page.",
  },
  {
    keywords: ['delivery', 'how long', 'shipping time', 'delivery take'],
    response:
      "Standard delivery takes 3–5 business days, and express delivery arrives in 1–2 business days. Delivery is free on orders over $50. You'll get a tracking link by email as soon as your order ships.",
  },
  {
    keywords: ['cancel', 'cancel my order', 'cancel order'],
    response:
      "You can cancel an order within 1 hour of placing it — as long as it hasn't been packed yet. Go to Orders, open the order, and tap 'Cancel Order'. If it's already shipped, you can still return it for a full refund once it arrives.",
  },
  {
    keywords: ['track', 'track my order', 'tracking'],
    response:
      "Sure! Enter your tracking ID (e.g. TRK-9X4-2271) in the Order Tracking section below. You'll see each stage light up: Order Placed → Packed → Shipped → Out for Delivery → Delivered.",
  },
  {
    keywords: ['cash on delivery', 'cod', 'pay on delivery'],
    response:
      "Yes! We offer Cash on Delivery (COD) for orders up to $500. Just choose COD at checkout. For orders above $500, prepaid payment is required.",
  },
  {
    keywords: ['contact', 'support', 'talk to', 'human', 'agent'],
    response:
      "You can reach our human support team 24/7 by email at support@shopsmart.com or by phone at 1-800-SHOP-SMART. You can also use the live chat on this page and we'll get back to you instantly.",
  },
  {
    keywords: ['product', 'available', 'stock', 'buy'],
    response:
      "You can browse our featured products in the Products section on this page. Each card shows the price, category, and current availability. Let me know if you'd like more details on any item!",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
    response:
      "Hi there! I'm your AI Support Agent. I can help with orders, returns, refunds, delivery, and more. What can I do for you today?",
  },
  {
    keywords: ['thank', 'thanks', 'thank you'],
    response:
      "You're very welcome! Is there anything else I can help you with?",
  },
];

const fallback =
  "I'm here to help with orders, returns, refunds, delivery, cancellations, and product info. Could you tell me a little more about what you need? You can also tap one of the quick-question buttons below.";

// Find the first rule whose keywords appear in the user's message.
export function getBotResponse(userText: string): string {
  const text = userText.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some((kw) => text.includes(kw))) {
      return rule.response;
    }
  }
  return fallback;
}
