import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-600">Pizza Turtles</h3>
            <p className="text-gray-400">
              Experience the finest French cuisine in an elegant atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-600 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-600 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-600 transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Gourmet Street</li>
              <li>Cityville, ST 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@lamaison.com</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 12pm - 11pm</li>
              <li>Saturday: 11am - 11pm</li>
              <li>Sunday: 11am - 10pm</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-600"
              />
              <button className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pizza Turtles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;