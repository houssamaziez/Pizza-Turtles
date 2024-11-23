import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingFavorites from './components/FloatingFavorites';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <About />
        <MenuSection />
        <MapSection />
        <Footer />
        <FloatingFavorites />
      </div>
    </FavoritesProvider>
  );
}

export default App;