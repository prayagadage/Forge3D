import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

const STORAGE_KEY = '3dp_cart';

function loadCart() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const showToast = useCallback((message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const addItem = useCallback((product, options = {}, quantity = 1) => {
    setItems(prev => {
      const key = `${product.id}-${JSON.stringify(options)}`;
      const existing = prev.find(i => i.key === key);
      if (existing) {
        return prev.map(i => i.key === key ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { key, product, options, quantity }];
    });
    showToast(`${product.name} added to cart`);
  }, [showToast]);

  const removeItem = useCallback((key) => {
    setItems(prev => prev.filter(i => i.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity < 1) return;
    setItems(prev => prev.map(i => i.key === key ? { ...i, quantity } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, isOpen, setIsOpen,
      addItem, removeItem, updateQuantity, clearCart,
      itemCount, cartTotal,
      toast, setToast,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
