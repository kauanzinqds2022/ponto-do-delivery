import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { DeliverySignup } from './pages/DeliverySignup';
import { DeliveryProfile } from './pages/DeliveryProfile';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
              <Navbar />
              <main className="pt-16">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/delivery/signup" element={<DeliverySignup />} />
                  <Route path="/delivery/profile" element={<DeliveryProfile />} />
                </Routes>
              </main>
            </div>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;