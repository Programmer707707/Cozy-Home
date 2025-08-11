import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Product = {
  id: number;
  image: string;
  cost: number;
  name: string;
};

export type CartItem = Product & { qty: number };

type CartState = {
  items: CartItem[];
  addItem: (p: Product) => void;
  removeItem: (id: number) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (p) => {
        const items = [...get().items];
        const idx = items.findIndex(i => i.id === p.id);
        if (idx > -1) {
          items[idx] = { ...items[idx], qty: items[idx].qty + 1 };
        } else {
          items.push({ ...p, qty: 1 });
        }
        set({ items });
      },
      removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((n, i) => n + i.qty, 0),
      total: () => get().items.reduce((sum, i) => sum + i.cost * i.qty, 0),
    }),
    {
      name: 'cozy-cart',
      storage: createJSONStorage(() => localStorage), 
      partialize: (s) => ({ items: s.items }),
    }
  )
);
