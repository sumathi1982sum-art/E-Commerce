import { useState, useRef, useEffect } from 'react';
import {
  Send,
  Trash2,
  Headset,
  User,
  Sparkles,
} from 'lucide-react';
import type { Message } from '@/types';
import { getBotResponse } from '@/data/responses';
import { quickQuestions } from '@/data/quickQuestions';

interface ChatbotProps {
  registerStartHandler: (fn: () => void) => void;
}

// Small helper to create a message object.
function makeMessage(role: 'user' | 'agent', text: string): Message {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    role,
    text,
    timestamp: Date.now(),
  };
}

function Chatbot({ registerStartHandler }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Greeting shown when the chat is first opened.
  const greeting =
    "Hi! I'm your AI Support Agent. Ask me about your order, returns, refunds, delivery, or tap a quick question below.";

  // Initialise with a single agent greeting.
  useEffect(() => {
    setMessages([makeMessage('agent', greeting)]);
  }, []);

  // Auto-scroll to the newest message.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Allow the navbar / hero "Start Chat" button to focus the input.
  useEffect(() => {
    registerStartHandler(() => {
      inputRef.current?.focus();
      document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [registerStartHandler]);

  // Send a user message and produce a simulated agent reply.
  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setMessages((prev) => [...prev, makeMessage('user', trimmed)]);
    setInput('');
    setIsTyping(true);

    // Simulate a short "thinking" delay before the agent replies.
    window.setTimeout(() => {
      const reply = getBotResponse(trimmed);
      setMessages((prev) => [...prev, makeMessage('agent', reply)]);
      setIsTyping(false);
    }, 700);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function clearChat() {
    setMessages([makeMessage('agent', greeting)]);
    setInput('');
  }

  return (
    <section id="chat" className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Chat with our AI Support Agent</h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Get instant help with orders, returns, refunds, and delivery.
        </p>
      </div>

      {/* Chat window */}
      <div className="bg-white rounded-3xl shadow-card border border-slate-200 overflow-hidden flex flex-col h-[560px]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Headset className="w-5 h-5" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-brand-700 rounded-full" />
            </div>
            <div>
              <p className="font-semibold text-sm">AI Support Agent</p>
              <p className="text-[11px] text-brand-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-300 rounded-full" />
                Online · Typically replies instantly
              </p>
            </div>
          </div>
          <button
            onClick={clearChat}
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear Chat
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto chat-scroll bg-slate-50 px-4 py-5 space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-end gap-2.5 animate-pop-in ${
                m.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Avatar */}
              <div
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  m.role === 'user'
                    ? 'bg-slate-200 text-slate-600'
                    : 'bg-brand-600 text-white'
                }`}
              >
                {m.role === 'user' ? <User className="w-4 h-4" /> : <Headset className="w-4 h-4" />}
              </div>

              {/* Bubble */}
              <div
                className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed shadow-soft ${
                  m.role === 'user'
                    ? 'bg-brand-600 text-white rounded-2xl rounded-br-md'
                    : 'bg-white text-slate-700 rounded-2xl rounded-bl-md border border-slate-200'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-end gap-2.5 animate-pop-in">
              <div className="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center">
                <Headset className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3.5 shadow-soft">
                <div className="flex gap-1.5">
                  <span className="typing-dot w-2 h-2 bg-slate-400 rounded-full" />
                  <span className="typing-dot w-2 h-2 bg-slate-400 rounded-full" />
                  <span className="typing-dot w-2 h-2 bg-slate-400 rounded-full" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick question chips */}
        <div className="px-3 py-2.5 bg-white border-t border-slate-100 flex gap-2 overflow-x-auto chat-scroll">
          {quickQuestions.map((q) => (
            <button
              key={q.label}
              onClick={() => send(q.question)}
              disabled={isTyping}
              className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3 py-1.5 rounded-full transition-colors disabled:opacity-50"
            >
              <Sparkles className="w-3 h-3" />
              {q.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 bg-white border-t border-slate-100">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-slate-100 focus:bg-white text-sm text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3 border border-transparent focus:border-brand-300 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-soft transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Chatbot;
