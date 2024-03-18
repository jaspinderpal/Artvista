import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/LoginForm/LoginForm';
import Registration from './Components/Registration/Registration';
import ProductDetails from './Pages/Product';
import { CartProvider } from './CartContext'; // Import CartProvider
import CartView from './Components/Cart/cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider> {/* Wrap your application with CartProvider */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartView />} />

          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
