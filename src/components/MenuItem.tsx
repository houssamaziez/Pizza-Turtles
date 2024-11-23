import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  ingredients: string[];
  images: string[];
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, description, ingredients, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isItemFavorite = isFavorite(name);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = () => {
    if (isItemFavorite) {
      removeFavorite(name);
    } else {
      addFavorite({ name, price, description, image: images[0] });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src={images[currentImageIndex]}
          alt={name}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <button
              onClick={toggleFavorite}
              className={`p-1 rounded-full transition ${
                isItemFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className="w-5 h-5" fill={isItemFavorite ? "currentColor" : "none"} />
            </button>
          </div>
          <span className="text-lg font-medium text-amber-600">{price} DA</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {ingredient}
              </span>
            ))}
          </div>P
        </div>
      </div>
    </div>
  );
};

export default MenuItem;