import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import ProductDetail from './pages/ProductDetail';
import CustomPrint from './pages/CustomPrint';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import MaterialGuide from './pages/MaterialGuide';
import './index.css';

function Toast() {
  const { toast } = useCart();
  return (
    <div className={`toast ${toast ? 'toast--visible' : ''}`} role="status" aria-live="polite">
      ✓ {toast}
    </div>
  );
}

function ScrollToTop() {
  // ponytail: minimal scroll reset — no extra dependency
  const { pathname } = window.location;
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return null;
}

function AppLayout() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/custom-print" element={<CustomPrint />} />
        <Route path="/materials" element={<MaterialGuide />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </BrowserRouter>
  );
}
