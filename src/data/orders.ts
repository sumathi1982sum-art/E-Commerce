import type { OrderStatus } from '@/types';

// Sample order used by the order-tracking section.
// The stages are ordered so the tracker can highlight progress.
export const orderStages: OrderStatus['stage'][] = [
  'Order Placed',
  'Packed',
  'Shipped',
  'Out for Delivery',
  'Delivered',
];

export const sampleOrder: OrderStatus = {
  id: 'ORD-100245',
  product: 'Wireless Noise-Cancelling Headphones',
  date: 'Sep 12, 2026',
  stage: 'Out for Delivery',
  trackingId: 'TRK-9X4-2271',
  estimatedDelivery: 'Sep 16, 2026',
};
