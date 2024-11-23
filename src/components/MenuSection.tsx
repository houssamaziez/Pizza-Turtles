import React, { useState } from 'react';
import MenuItem from './MenuItem';

const categories = [
  'Pizza',
  'Main Course',
  'Seafood',
  'Desserts',
  'Beverages'
];

const menuItems = {
  'Pizza': [
    {
      name: "Pizza",
      price: '120',
      description: 'Classic French onion soup topped with melted Gruyère cheese and crusty baguette.',
      ingredients: ['Caramelized Onions', 'Beef Broth', 'Gruyère', 'Baguette'],
      images: [
        'https://chocolate-frog-334123.hostingersite.com//images/56947072_2184185985008805_730063832373788672_n%20(1).jpg',
        'https://chocolate-frog-334123.hostingersite.com//images/56947072_2184185985008805_730063832373788672_n%20(1).jpg'
      ]
    },
    {
      name: 'Escargots de Bourgogne',
      price: '18.00',
      description: 'Burgundy snails baked in garlic-herb butter, served with crusty bread.',
      ingredients: ['Snails', 'Garlic Butter', 'Fresh Herbs', 'Bread'],
      images: [
        'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?auto=format&fit=crop&q=80'
      ]
    }
  ],
  'Main Course': [
    {
      name: 'Coq au Vin',
      price: '32.00',
      description: 'Braised chicken in red wine sauce with pearl onions, mushrooms, and lardons.',
      ingredients: ['Free-range Chicken', 'Red Wine', 'Pearl Onions', 'Mushrooms'],
      images: [
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80'
      ]
    },
    {
      name: 'Beef Bourguignon',
      price: '36.00',
      description: 'Slow-cooked beef in red wine with vegetables and herbs.',
      ingredients: ['Prime Beef', 'Red Wine', 'Root Vegetables', 'Fresh Herbs'],
      images: [
        'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80'
      ]
    }
  ],
  'Seafood': [
    {
      name: 'Bouillabaisse',
      price: '42.00',
      description: 'Traditional Provençal fish stew served with rouille and crusty bread.',
      ingredients: ['Fresh Fish', 'Shellfish', 'Saffron', 'Vegetables'],
      images: [
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80'
      ]
    },
    {
      name: 'Sole Meunière',
      price: '38.00',
      description: 'Dover sole in brown butter sauce with lemon and parsley.',
      ingredients: ['Dover Sole', 'Brown Butter', 'Lemon', 'Parsley'],
      images: [
        'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?auto=format&fit=crop&q=80'
      ]
    }
  ],
  'Desserts': [
    {
      name: 'Crème Brûlée',
      price: '12.00',
      description: 'Classic vanilla custard with caramelized sugar crust.',
      ingredients: ['Vanilla Bean', 'Heavy Cream', 'Farm Eggs', 'Sugar'],
      images: [
        'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80'
      ]
    },
    {
      name: 'Tarte Tatin',
      price: '14.00',
      description: 'Upside-down caramelized apple tart served with crème fraîche.',
      ingredients: ['Apples', 'Caramel', 'Butter Pastry', 'Crème Fraîche'],
      images: [
        'https://images.unsplash.com/photo-1621955964441-c173e01c135b?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1621955964570-ac94651c4dab?auto=format&fit=crop&q=80'
      ]
    }
  ],
  'Beverages': [
    {
      name: 'French Wine Selection',
      price: '15.00',
      description: 'Curated selection of regional French wines by the glass.',
      ingredients: ['Red Wine', 'White Wine', 'Rosé', 'Champagne'],
      images: [
        'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&q=80'
      ]
    },
    {
      name: 'Artisanal Cocktails',
      price: '16.00',
      description: 'Signature cocktails crafted with French spirits and fresh ingredients.',
      ingredients: ['Premium Spirits', 'Fresh Fruits', 'Herbs', 'House Syrups'],
      images: [
        'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80'
      ]
    }
  ]
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated menu featuring classic French cuisine with a modern twist.
            Each dish is crafted with the finest ingredients and traditional techniques.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;