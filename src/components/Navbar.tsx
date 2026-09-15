import { Headset, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onStartChat: () => void;
}

// Top navigation bar — brand on the left, quick "Start Chat" CTA on the right.
function Navbar({ onStartChat }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center shadow-soft">
            <Headset className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-slate-900 text-sm sm:text-base">ShopSmart</p>
            <p className="text-[11px] text-slate-500 hidden sm:block">AI Support Agent</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-brand-600 transition-colors">Home</a>
          <a href="#products" className="hover:text-brand-600 transition-colors">Products</a>
          <a href="#tracking" className="hover:text-brand-600 transition-colors">Track Order</a>
          <a href="#chat" className="hover:text-brand-600 transition-colors">Support</a>
        </nav>

        <button
          onClick={onStartChat}
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-soft transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">Start Chat</span>
          <span className="sm:hidden">Chat</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
