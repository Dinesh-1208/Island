
import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, Hotel, Utensils, MapPin, LogIn, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const navLinks = [
    { to: '/', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { to: '/sites', icon: <MapPin className="w-5 h-5" />, label: 'View Sites' },
    { to: '/hotels', icon: <Hotel className="w-5 h-5" />, label: 'Hotels' },
    { to: '/restaurants', icon: <Utensils className="w-5 h-5" />, label: 'Restaurants' },
    { to: '/treasure-hunt', icon: <Map className="w-5 h-5" />, label: 'Treasure Hunt' },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile menu toggle */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          className="glass rounded-full w-10 h-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>
      
      {/* Desktop navigation */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-40">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="relative group">
            <div className={`p-3 rounded-full transition-all duration-300 ${
              isActive(link.to) 
                ? 'glass shadow-lg' 
                : 'hover:glass hover:shadow-md'
            }`}>
              {link.icon}
            </div>
            <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-sm whitespace-nowrap pointer-events-none transition-opacity duration-300">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
      
      {/* Mobile navigation overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 glass z-40 flex items-center justify-center lg:hidden"
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`flex items-center gap-3 p-3 rounded-full transition-all duration-300 ${
                  isActive(link.to) 
                    ? 'bg-white/20 shadow-lg' 
                    : 'hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
            <Link 
              to="/login" 
              className="mt-4 flex items-center gap-3 px-6 py-3 rounded-full bg-island-blue text-white hover:shadow-lg hover:shadow-island-blue/20 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
          </div>
        </motion.div>
      )}
      
      {/* Login button (desktop) */}
      <div className="hidden lg:block fixed top-8 right-8 z-40">
        <Link to="/login">
          <Button className="button-glow rounded-full px-6 py-6 h-auto text-white">
            <LogIn className="w-5 h-5 mr-2" /> Login
          </Button>
        </Link>
      </div>
      
      {/* Main content */}
      <main className="flex-1 w-full">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
