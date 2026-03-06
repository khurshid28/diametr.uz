
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from 'react';
import Home from './components/home/Home';
import NotFound from './components/404/notFound';
import CategoryPage from './pages/CategoryPage';
import ShopsPage from './pages/ShopsPage';
import ShopDetailPage from './pages/ShopDetailPage';
import StorePage from './pages/StorePage';
import { AppProvider } from './context/AppContext';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SplashScreen from './components/common/SplashScreen';

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname])
  return null
}

function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(() => !!sessionStorage.getItem('diametr_splash'))
  const handleDone = useCallback(() => {
    sessionStorage.setItem('diametr_splash', '1')
    setDone(true)
  }, [])
  return (
    <>
      {!done && <SplashScreen onDone={handleDone} />}
      {children}
    </>
  )
}

function App() {
  return (
    <AppProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <SplashWrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="store" element={<StorePage />} />
                <Route path="category/:id" element={<CategoryPage />} />
                <Route path="shops" element={<ShopsPage />} />
                <Route path="shop/:id" element={<ShopDetailPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </SplashWrapper>
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
