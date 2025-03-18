
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-island-blue to-island-purple opacity-80 -z-10" />
      
      {/* Wave overlay */}
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-repeat bg-[length:400px_400px] opacity-5 animate-wave -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-10 max-w-md text-center"
      >
        <motion.h1 
          className="text-8xl font-bold mb-6"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity
          }}
        >
          404
        </motion.h1>
        <h2 className="text-2xl font-bold mb-4">Oops! Page Not Found</h2>
        <p className="text-white/70 mb-8">
          It seems you've ventured into uncharted waters. This page doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="button-glow rounded-full px-6 py-3 h-auto">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to Shore
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
