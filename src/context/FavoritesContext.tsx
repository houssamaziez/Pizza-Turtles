import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FavoriteItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (itemName: string) => void;
  isFavorite: (itemName: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface ToastProps {
  message: string;
  type: 'add' | 'remove';
  onComplete: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-24 right-6 z-50 px-4 py-2 rounded-lg shadow-lg ${
        type === 'add' ? 'bg-green-500' : 'bg-red-500'
      } text-white flex items-center gap-2`}
    >
      {message}
    </motion.div>
  );
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [toast, setToast] = useState<{ message: string; type: 'add' | 'remove' } | null>(null);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      const newFavorites = [...prev, item];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
    setToast({ message: 'Added to favorites', type: 'add' });
  };

  const removeFavorite = (itemName: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((item) => item.name !== itemName);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
    setToast({ message: 'Removed from favorites', type: 'remove' });
  };

  const isFavorite = (itemName: string) => {
    return favorites.some((item) => item.name === itemName);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onComplete={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};