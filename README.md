# AI E-commerce Customer Support Agent

A modern, responsive web app that simulates an AI-powered customer support chatbot for an e-commerce store. Customers can ask about orders, delivery, returns, refunds, and general shopping help — and get instant, friendly answers from a predefined response engine.

![Tech](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3-teal)

---

## Features

### 1. Home Page
- Project title and short description
- "Start Chat" call-to-action button
- Trust badges (Fast Delivery, Easy Returns, Secure Shopping)

### 2. Customer Support Chatbot
- Modern chat interface with distinct customer and AI agent bubbles
- Text input with send button
- Press **Enter** to send
- "AI Support Agent" label with online status indicator
- Typing indicator while the agent "thinks"

### 3. Predefined AI Responses
The chatbot intelligently matches keywords in the customer's message to friendly, helpful answers covering:
- Where is my order?
- How can I return a product?
- What is the refund policy?
- How long does delivery take?
- Can I cancel my order?
- How can I track my order?
- Do you have cash on delivery?
- How can I contact support?

### 4. Quick Question Buttons
One-tap buttons that automatically send a question to the bot:
- Track Order
- Return Product
- Refund Status
- Delivery Info
- Cancel Order

### 5. Product Information Section
Sample product cards showing:
- Product name
- Price
- Category
- Availability (In Stock / Low Stock / Out of Stock)
- Rating and product image

### 6. Order Support / Tracking
Interactive order tracker with a visual progress bar through five stages:
1. Order Placed
2. Packed
3. Shipped
4. Out for Delivery
5. Delivered

### 7. Chat History
- Full conversation stays visible during the session
- "Clear Chat" button to reset the conversation

### 8. Responsive Design
Fully responsive across desktop, laptop, tablet, and mobile.

---

## Tech Stack
- **React 18** — UI library
- **Vite 5** — build tool and dev server
- **TypeScript** — type safety
- **Tailwind CSS 3** — styling
- **lucide-react** — icons

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The app runs at `http://localhost:5173` by default.

---

## Project Structure

```
src/
├── App.tsx                  # Root component — assembles all sections
├── main.tsx                 # React entry point
├── index.css                # Global styles + Tailwind
├── types.ts                 # Shared TypeScript types
├── data/
│   ├── products.ts          # Sample product catalog
│   ├── orders.ts            # Sample order + delivery stages
│   ├── responses.ts         # Predefined AI response engine
│   └── quickQuestions.ts    # Quick-question button config
└── components/
    ├── Navbar.tsx           # Top navigation bar
    ├── Hero.tsx             # Landing hero section
    ├── ProductsSection.tsx  # Featured products grid
    ├── OrderTracking.tsx    # Order tracking visualizer
    └── Chatbot.tsx          # Chat interface + logic
```

---

## How the AI Agent Works

The chatbot uses a **predefined keyword-matching engine** (`src/data/responses.ts`) instead of an external paid AI API. Each rule maps a set of keywords to a friendly, helpful response. When a user sends a message, the engine scans for matching keywords and returns the first matching reply — or a helpful fallback.

This structure is intentionally simple so a **real AI API can be connected later** by replacing the `getBotResponse` function with an API call (e.g. to OpenAI, Gemini, or a custom backend). The rest of the chat interface requires no changes.

---

## Customization

- **Add products:** edit `src/data/products.ts`
- **Add order stages / sample order:** edit `src/data/orders.ts`
- **Change AI responses:** edit `src/data/responses.ts`
- **Change quick questions:** edit `src/data/quickQuestions.ts`
- **Change theme colors:** edit the `brand` color scale in `tailwind.config.js`

---

## License

This project is open source and free to use for learning and prototyping.
