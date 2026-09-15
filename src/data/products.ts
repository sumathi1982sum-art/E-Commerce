import type { Product } from '@/types';

// Sample product catalog used by the product showcase section.
// In a real app this would come from your e-commerce backend / database.
export const products: Product[] = [
  {
    id: 'p1',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 149.99,
    category: 'Audio',
    availability: 'In Stock',
    image:
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
  },
  {
    id: 'p2',
    name: 'Smart Fitness Watch',
    price: 89.99,
    category: 'Wearables',
    availability: 'Low Stock',
    image:
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.6,
  },
  {
    id: 'p3',
    name: 'Compact Mechanical Keyboard',
    price: 64.99,
    category: 'Accessories',
    availability: 'In Stock',
    image:
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
  },
  {
    id: 'p4',
    name: 'Ceramic Coffee Mug Set',
    price: 24.99,
    category: 'Home',
    availability: 'Out of Stock',
    image:
      'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.5,
  },
];
