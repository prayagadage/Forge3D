'use client';

import { CartProvider, useCart } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

function Toast() {
  const { toast } = useCart();
  return (
    <div className={`toast ${toast ? 'toast--visible' : ''}`} role="status" aria-live="polite">
      ✓ {toast}
    </div>
  );
}

export default function Providers({ children }) {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <Toast />
      {children}
      <Footer />
    </CartProvider>
  );
}
