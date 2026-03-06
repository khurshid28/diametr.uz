import { Navigate } from 'react-router-dom'

export default function Home() {
  return <Navigate to="/store" replace />
}


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
