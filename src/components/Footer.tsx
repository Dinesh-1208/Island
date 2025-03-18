
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-island-dark text-white py-12 px-6 relative overflow-hidden">
      <button onClick={() => window.open('https://retro-island-adventure.vercel.app/', '_blank')}>Click me To go to the Retro Style</button>
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-repeat bg-[length:400px_400px] opacity-5 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Island Paradise</h3>
            <p className="text-white/80 mb-4">Experience the ultimate tropical getaway with unforgettable adventures and luxury accommodations.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-island-blue transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-island-blue transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-island-blue transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/sites" className="text-white/80 hover:text-white transition-colors">View Sites</Link>
              </li>
              <li>
                <Link to="/hotels" className="text-white/80 hover:text-white transition-colors">Hotels</Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-white/80 hover:text-white transition-colors">Restaurants</Link>
              </li>
              <li>
                <Link to="/treasure-hunt" className="text-white/80 hover:text-white transition-colors">Treasure Hunt</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-island-blue" />
                <span className="text-white/80">123 Paradise Island, Tropical Ocean</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-island-blue" />
                <span className="text-white/80">info@islandparadise.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-island-blue" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-island-blue"
              />
              <button className="bg-island-blue hover:bg-island-blue/80 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Island Paradise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
