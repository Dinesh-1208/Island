
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { LogIn } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    
    // Simulate login process
    setTimeout(() => {
      setLoggingIn(false);
      setShowWelcome(true);
      
      toast({
        title: "Login successful!",
        description: "Welcome to Island Paradise",
      });
      
      // Redirect after welcome animation completes
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-6">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-island-blue via-island-teal to-island-orange -z-10 opacity-80" />
      
      {/* Wave overlay */}
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-repeat bg-[length:400px_400px] opacity-5 animate-wave -z-10" />
      
      {/* Animated floating circles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-island-pink opacity-10 blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Login card */}
      <AnimatePresence mode="wait">
        {!showWelcome ? (
          <motion.div
            key="login-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-md glass-card p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-white/70">Sign in to continue your island adventure</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="glass border-white/30 bg-white/10 placeholder:text-white/40 h-12"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="glass border-white/30 bg-white/10 placeholder:text-white/40 h-12"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 button-glow rounded-full text-white"
                disabled={loggingIn}
              >
                {loggingIn ? (
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="mr-3">Logging in</span>
                    <motion.div
                      className="w-2 h-2 rounded-full bg-white mx-0.5"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-white mx-0.5"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-white mx-0.5"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                    />
                  </motion.div>
                ) : (
                  <span className="flex items-center">
                    <LogIn className="w-5 h-5 mr-2" /> Sign In
                  </span>
                )}
              </Button>
              
              <div className="text-center mt-4">
                <a href="#" className="text-sm hover:underline text-white/70">Forgot your password?</a>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="welcome-message"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl font-bold text-white mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              Welcome Back!
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Your island adventure awaits...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
