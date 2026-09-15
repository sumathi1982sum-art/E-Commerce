import { useState } from 'react';
import {
  Package,
  Box,
  Truck,
  MapPin,
  CheckCircle2,
  Search,
  PackageCheck,
} from 'lucide-react';
import { sampleOrder, orderStages } from '@/data/orders';
import type { OrderStage } from '@/types';

// Icon for each stage of the delivery journey.
const stageIcons: Record<OrderStage, typeof Package> = {
  'Order Placed': Package,
  Packed: Box,
  Shipped: PackageCheck,
  'Out for Delivery': Truck,
  Delivered: CheckCircle2,
};

function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [showResult, setShowResult] = useState(false);

  // The current stage index — used to highlight completed steps.
  const currentIndex = orderStages.indexOf(sampleOrder.stage);

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    setShowResult(true);
  }

  return (
    <section id="tracking" className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Track Your Order</h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Enter your order ID to see live delivery status.
          </p>
        </div>

        {/* Lookup form */}
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="e.g. ORD-100245"
              className="w-full bg-white text-sm text-slate-800 placeholder-slate-400 rounded-xl pl-10 pr-4 py-3 border border-slate-200 focus:border-brand-300 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl shadow-soft transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Track
          </button>
        </form>

        {/* Result */}
        {showResult && (
          <div className="mt-8 bg-white rounded-2xl shadow-card border border-slate-200 p-6 sm:p-8 animate-pop-in">
            {/* Order summary */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
              <div>
                <p className="text-xs text-slate-500">Order ID</p>
                <p className="font-bold text-slate-900">{sampleOrder.id}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Product</p>
                <p className="font-medium text-slate-700 text-sm">{sampleOrder.product}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Tracking ID</p>
                <p className="font-medium text-slate-700 text-sm">{sampleOrder.trackingId}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Est. Delivery</p>
                <p className="font-medium text-slate-700 text-sm">{sampleOrder.estimatedDelivery}</p>
              </div>
            </div>

            {/* Progress tracker */}
            <div className="pt-6">
              <div className="flex items-center justify-between relative">
                {/* Background line */}
                <div className="absolute top-5 left-0 right-0 h-1 bg-slate-200 rounded-full" />
                {/* Progress line */}
                <div
                  className="absolute top-5 left-0 h-1 bg-brand-600 rounded-full transition-all duration-500"
                  style={{ width: `${(currentIndex / (orderStages.length - 1)) * 100}%` }}
                />
                {/* Steps */}
                {orderStages.map((stage, i) => {
                  const Icon = stageIcons[stage];
                  const done = i <= currentIndex;
                  return (
                    <div key={stage} className="relative z-10 flex flex-col items-center gap-2 flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                          done
                            ? 'bg-brand-600 border-brand-600 text-white'
                            : 'bg-white border-slate-300 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-[10px] sm:text-xs font-medium text-center leading-tight ${
                          done ? 'text-slate-900' : 'text-slate-400'
                        }`}
                      >
                        {stage}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-medium px-4 py-3 rounded-xl">
              <Truck className="w-4 h-4" />
              Your order is currently: <span className="font-bold">{sampleOrder.stage}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default OrderTracking;
