
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { MapPin, Compass, Sparkles, Footprints, ChevronRight, ChevronDown, ChevronUp, Map as MapIcon, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// Placeholder treasure hunt data
const treasureHunt = {
  title: "The Lost Treasure of Captain Azure",
  description: "Follow the trail of clues left by the legendary Captain Azure to discover his hidden treasure chest filled with precious gems and gold coins!",
  totalClues: 5,
  completedClues: 2,
  image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
};

// Clues data
const clues = [
  {
    id: 1,
    title: "The Captain's Cove",
    hint: "Where waves crash against ancient rocks, a hidden entrance to a secret world awaits.",
    location: { lat: 120, long: 45 },
    completed: true,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 2,
    title: "Forest of Whispers",
    hint: "Listen to the songs of the birds as they guide you to a tree with roots that hide more than they seem.",
    location: { lat: 123, long: 47 },
    completed: true,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 3,
    title: "Moonlit Waterfall",
    hint: "When the moon shines brightest, stand behind the cascading waters to reveal a hidden path.",
    location: { lat: 125, long: 46 },
    completed: false,
    image: "https://images.unsplash.com/photo-1613126722867-2e5f71a8e3f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 4,
    title: "Coral Kingdom",
    hint: "Dive deep to find a garden of coral where a stone chest lies protected by colorful fish.",
    location: { lat: 126, long: 45 },
    completed: false,
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 5,
    title: "Treasure Chamber",
    hint: "Put together all the pieces of the map to reveal the final location of Captain Azure's legendary treasure!",
    location: { lat: 128, long: 48 },
    completed: false,
    image: "https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  }
];

const TreasureHunt = () => {
  const [expandedClue, setExpandedClue] = useState<number | null>(null);
  
  const toggleClue = (id: number) => {
    setExpandedClue(expandedClue === id ? null : id);
  };
  
  return (
    <Layout>
      <div className="min-h-screen relative pt-24 pb-16 px-6">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-island-purple/30 to-island-light -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-island-purple/10 text-island-purple rounded-full px-4 py-1 text-sm mb-4">
              Adventure Awaits
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Island Treasure Hunt</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Embark on an exciting treasure hunt and discover the hidden secrets of our island
            </p>
          </motion.div>
          
          {/* Hunt Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 mb-12 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative rounded-xl overflow-hidden animated-border">
                <img 
                  src={treasureHunt.image} 
                  alt={treasureHunt.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                
                {/* Animated treasure effect */}
                <motion.div 
                  className="absolute bottom-4 right-4"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity
                  }}
                >
                  <div className="w-16 h-16 rounded-lg bg-island-orange flex items-center justify-center text-white">
                    <Sparkles className="w-8 h-8" />
                  </div>
                </motion.div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">{treasureHunt.title}</h2>
                <p className="text-gray-600 mb-6">{treasureHunt.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Progress: {treasureHunt.completedClues} of {treasureHunt.totalClues} clues found
                    </span>
                    <span className="text-sm font-medium">
                      {Math.round((treasureHunt.completedClues / treasureHunt.totalClues) * 100)}%
                    </span>
                  </div>
                  <Progress value={(treasureHunt.completedClues / treasureHunt.totalClues) * 100} className="h-2" />
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="button-glow">
                    <MapIcon className="mr-2 h-4 w-4" /> View Map
                  </Button>
                  <Button variant="outline" className="glass">
                    <Compass className="mr-2 h-4 w-4" /> Join New Hunt
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Clue Path Visualization */}
          <div className="relative py-8 mb-12">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-island-blue via-island-purple to-island-pink" />
            
            {clues.map((clue, index) => (
              <motion.div 
                key={clue.id}
                className="relative mb-8 last:mb-0 pl-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                {/* Marker */}
                <motion.div 
                  className={`absolute left-8 top-0 w-8 h-8 rounded-full -translate-x-1/2 flex items-center justify-center ${
                    clue.completed 
                      ? 'bg-island-green text-white' 
                      : index === treasureHunt.completedClues 
                        ? 'bg-island-purple text-white animate-pulse' 
                        : 'bg-white/80 text-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                >
                  {clue.completed ? (
                    <CheckIcon className="w-4 h-4" />
                  ) : index === treasureHunt.totalClues - 1 ? (
                    <Trophy className="w-4 h-4" />
                  ) : (
                    <Footprints className="w-4 h-4" />
                  )}
                </motion.div>
                
                {/* Path to next marker */}
                {index < clues.length - 1 && (
                  <motion.div 
                    className={`absolute left-8 top-8 bottom-0 w-1 h-[calc(100%-2rem)] -translate-x-1/2 ${
                      clue.completed ? 'bg-island-green' : 'bg-white/20'
                    }`}
                    initial={{ height: 0 }}
                    animate={{ height: 'calc(100% - 2rem)' }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  />
                )}
                
                {/* Clue Card */}
                <div 
                  className={`glass-card overflow-hidden transition-all duration-300 ${
                    expandedClue === clue.id ? 'shadow-lg' : ''
                  }`}
                >
                  <div 
                    className="p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleClue(clue.id)}
                  >
                    <div className="flex items-center">
                      <div 
                        className={`w-3 h-3 rounded-full mr-3 ${
                          clue.completed 
                            ? 'bg-island-green' 
                            : index === treasureHunt.completedClues 
                              ? 'bg-island-purple animate-pulse' 
                              : 'bg-gray-300'
                        }`}
                      />
                      <h3 className="font-bold">{clue.title}</h3>
                    </div>
                    <div className="flex items-center">
                      {clue.completed && <span className="text-island-green text-sm mr-2">Completed</span>}
                      {expandedClue === clue.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                  
                  {/* Expanded content */}
                  {expandedClue === clue.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={clue.image} 
                          alt={clue.title} 
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Location pin */}
                        <motion.div 
                          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2"
                          whileHover={{ scale: 1.1 }}
                        >
                          <MapPin className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>
                      
                      <div className="p-4 pt-0 border-t border-white/10 mt-4">
                        <h4 className="font-medium text-lg mb-2">Hint:</h4>
                        <p className="text-gray-600 italic mb-4">{clue.hint}</p>
                        
                        <Button 
                          className={clue.completed ? 'bg-island-green hover:bg-island-green/90' : ''}
                          disabled={index > treasureHunt.completedClues}
                        >
                          {clue.completed ? 'Clue Found' : index === treasureHunt.completedClues ? 'Find This Clue' : 'Locked'}
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default TreasureHunt;
