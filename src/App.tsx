

import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from './components/home/Home';
import NotFound from './components/404/notFound';
import CategoryPage from './pages/CategoryPage';
import ShopsPage from './pages/ShopsPage';
import ShopDetailPage from './pages/ShopDetailPage';
import { AppProvider } from './context/AppContext';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname])
  return null
}

function App() {


  return (
    <AppProvider>
      <CartProvider>
        <BrowserRouter >
          <ScrollToTop />
          <Routes >
            <Route path="/" >
              <Route index element={<Home />} />
              <Route path="category/:id" element={<CategoryPage />} />
              <Route path="shops" element={<ShopsPage />} />
              <Route path="shop/:id" element={<ShopDetailPage />} />
              {/* <Route path="blogs" element={<Blogs />} /> */}
              {/* <Route path="contact" element={<Contact />} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        closeButton={false}
      />
    </AppProvider>


 
  );
}

export default App;
