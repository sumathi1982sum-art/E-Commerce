import { Star, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { products } from '@/data/products';

// Maps availability to a coloured badge.
const availabilityStyles: Record<string, { bg: string; text: string; icon: typeof CheckCircle2 }> = {
  'In Stock': { bg: 'bg-green-50', text: 'text-green-700', icon: CheckCircle2 },
  'Low Stock': { bg: 'bg-amber-50', text: 'text-amber-700', icon: AlertCircle },
  'Out of Stock': { bg: 'bg-red-50', text: 'text-red-700', icon: XCircle },
};

function ProductsSection() {
  return (
    <section id="products" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Products</h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          A selection of items from our store. Ask the support agent about any of them.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p) => {
          const avail = availabilityStyles[p.availability];
          const AvailIcon = avail.icon;
          return (
            <div
              key={p.id}
              className="group bg-white rounded-2xl shadow-soft border border-slate-200 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-card"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur text-[11px] font-medium text-slate-600 px-2 py-1 rounded-md">
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="flex items-center gap-1 mb-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-medium text-slate-600">{p.rating.toFixed(1)}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm leading-snug min-h-[2.5rem]">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">${p.price.toFixed(2)}</span>
                  <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-md ${avail.bg} ${avail.text}`}>
                    <AvailIcon className="w-3 h-3" />
                    {p.availability}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductsSection;
