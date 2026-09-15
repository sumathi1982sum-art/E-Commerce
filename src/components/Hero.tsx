import { MessageCircle, Sparkles, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface HeroProps {
  onStartChat: () => void;
}

// Landing hero: title, short description, CTA, and trust badges.
function Hero({ onStartChat }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-brand-100/50 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Customer Support
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            AI E-commerce<br />
            <span className="text-brand-600">Customer Support Agent</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Get instant, friendly answers about your orders, delivery, returns, and refunds — any time, day or night. Chat with our AI support agent and resolve your questions in seconds.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onStartChat}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-float transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chat
            </button>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 shadow-soft transition-colors"
            >
              Browse Products
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                <Truck className="w-5 h-5 text-brand-600" />
              </div>
              <p className="text-xs font-medium text-slate-600">Fast Delivery</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                <RotateCcw className="w-5 h-5 text-brand-600" />
              </div>
              <p className="text-xs font-medium text-slate-600">Easy Returns</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1.5">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-brand-600" />
              </div>
              <p className="text-xs font-medium text-slate-600">Secure Shopping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
