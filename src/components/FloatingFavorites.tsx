import React, { useState } from 'react';
import { Heart, X, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFavorites } from '../context/FavoritesContext';

const FloatingFavorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      x: 20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition relative"
      >
        <Heart className="w-6 h-6" fill={favorites.length > 0 ? "currentColor" : "none"} />
        {favorites.length > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center"
          >
            {favorites.length}
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-4 border-b bg-amber-50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Your Favorites</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-amber-100 rounded-full transition"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
              {favorites.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-8 text-center"
                >
                  <Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No favorites yet</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Click the heart icon on menu items to add them here
                  </p>
                </motion.div>
              ) : (
                <div className="divide-y">
                  <AnimatePresence>
                    {favorites.map((item) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        className="p-4 hover:bg-gray-50 transition group"
                      >
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                <span className="text-amber-600 font-medium">${item.price}</span>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeFavorite(item.name)}
                                className="p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition opacity-0 group-hover:opacity-100"
                              >
                                <Trash2 className="w-4 h-4" />
                              </motion.button>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingFavorites;