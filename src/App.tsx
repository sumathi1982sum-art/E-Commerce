import { useCallback, useRef } from 'react';
import { Headset, Mail, Phone, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import OrderTracking from '@/components/OrderTracking';
import Chatbot from '@/components/Chatbot';

function App() {
  // Lets the navbar/hero "Start Chat" button focus the chat input.
  const startChatRef = useRef<() => void>(() => {});
  const registerStartHandler = useCallback((fn: () => void) => {
    startChatRef.current = fn;
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onStartChat={() => startChatRef.current()} />
      <Hero onStartChat={() => startChatRef.current()} />
      <ProductsSection />
      <OrderTracking />
      <Chatbot registerStartHandler={registerStartHandler} />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
                <Headset className="w-5 h-5 text-white" />
              </div>
              <p className="font-bold text-white">ShopSmart</p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your friendly AI-powered e-commerce support agent — here to help 24/7 with orders, returns, refunds, and delivery.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#tracking" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#chat" className="hover:text-white transition-colors">Support Chat</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Contact Us</p>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400" />
                support@shopsmart.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400" />
                1-800-SHOP-SMART
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-400" />
                Available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2026 ShopSmart. AI E-commerce Customer Support Agent. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default App;
