// Shared type definitions for the support agent app.
// Keeping these in one place makes it easy to connect a real AI API later.

export type Role = 'user' | 'agent';

export interface Message {
  id: string;
  role: Role;
  text: string;
  timestamp: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  availability: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
  rating: number;
}

export type OrderStage =
  | 'Order Placed'
  | 'Packed'
  | 'Shipped'
  | 'Out for Delivery'
  | 'Delivered';

export interface OrderStatus {
  id: string;
  product: string;
  date: string;
  stage: OrderStage;
  trackingId: string;
  estimatedDelivery: string;
}
