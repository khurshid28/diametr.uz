import React, { useState, useCallback, useEffect } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import Navbar from "./sections/navbar"
import Main from "./sections/main"
import CategoryGrid from "./sections/categoryGrid"
import BannerSlider from "./sections/bannerSlider"
import Customer from "./sections/customer"
import HowItWorks from "./sections/howItWorks"
import Questions from "./sections/question"
import Writing from './sections/writing'
import Footer from './sections/footer'
import Shops from './sections/shops'
import GeoPermissionModal, { useGeoPermission } from '../common/GeoPermissionModal'
import AuthModal from '../auth/AuthModal'
import CartDrawer from '../cart/CartDrawer'
import SplashScreen from '../common/SplashScreen'
import { authService, AuthUser } from '../../service/authService'
import { useLang } from '../../context/AppContext'

export default function Home() {
  const { lang } = useLang()
  const location = useLocation()
  const navigate = useNavigate()
  const [user, setUser] = useState<AuthUser | null>(() => authService.getUser())
  const [authOpen, setAuthOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const geo = useGeoPermission()
  const [splashDone, setSplashDone] = useState(() => !!sessionStorage.getItem('diametr_splash'))

  const handleSplashDone = useCallback(() => {
    sessionStorage.setItem('diametr_splash', '1')
    navigate('/store')
  }, [navigate])

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      const id = state.scrollTo
      // clear state so it doesn't re-scroll on revisit
      window.history.replaceState({}, '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }, [location.state])

  const handleAuth = useCallback(() => {
    setUser(authService.getUser())
  }, [])

  const handleLogout = useCallback(() => {
    authService.logout()
    setUser(null)
  }, [])

  // Auto-logout when any API call returns 401
  useEffect(() => {
    const onUnauthorized = () => setUser(null)
    window.addEventListener('diametr:unauthorized', onUnauthorized)
    return () => window.removeEventListener('diametr:unauthorized', onUnauthorized)
  }, [])

  // If splash already played this session, skip straight to store
  if (splashDone) return <Navigate to="/store" replace />

  return (
    <div className={`Home w-screen relative flex flex-col overflow-x-hidden bg-white dark:bg-slate-900 transition-colors duration-300`}>
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}
      <Navbar
        user={user}
        onAuthClick={() => setAuthOpen(true)}
        onLogout={handleLogout}
        onCartClick={() => setCartOpen(true)}
      />
      {/* Spacer for fixed navbar */}
      <div className="h-[76px] flex-shrink-0" />
      <Main />
      <BannerSlider />
      <CategoryGrid />
      <Customer />
      <HowItWorks />
      <Shops />
      <Questions />
      <Writing />
      <Footer />

      {/* Geolocation permission modal */}
      {geo.show && (
        <GeoPermissionModal
          lang={lang}
          onClose={geo.close}
          onAllow={geo.allow}
        />
      )}

      {/* Auth modal */}
      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuth={handleAuth}
        lang={lang}
      />
      {/* Cart drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onAuthRequired={() => { setCartOpen(false); setAuthOpen(true) }}
        user={user}
      />
    </div>
  )
}
