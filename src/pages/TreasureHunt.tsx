
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { MapPin, Compass, Sparkles, Footprints, ChevronRight, ChevronDown, ChevronUp, Map as MapIcon, Trophy, Skull, Anchor, Swords, Ship } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

// Enhanced treasure hunt data
const treasureHunt = {
  title: "The Lost Treasure of Captain Blackbeard",
  description: "Legend has it that the notorious pirate Captain Blackbeard hid his most valuable treasures on our island before his final battle. Follow the ancient map, solve the riddles, and discover gold doubloons, precious gems, and artifacts that have remained hidden for centuries!",
  totalClues: 5,
  completedClues: 2,
  image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
};

// Enhanced clues data with pirate theme
const clues = [
  {
    id: 1,
    title: "The Captain's Cove",
    hint: "Where the waves crash against ancient rocks, and ships once sought shelter from storms. Look for the cave marked with the crossed swords symbol.",
    location: { lat: 120, long: 45 },
    completed: true,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    icon: <Anchor className="w-4 h-4" />
  },
  {
    id: 2,
    title: "Smuggler's Forest",
    hint: "The ancient trees whisper secrets of treasures buried beneath. Find the oak with the skull carved into its bark, then walk ten paces east.",
    location: { lat: 123, long: 47 },
    completed: true,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    icon: <Skull className="w-4 h-4" />
  },
  {
    id: 3,
    title: "Cursed Waterfall",
    hint: "The waters fall with a thunderous roar, concealing the entrance to a hidden cave. Wait for the full moon to reveal the pirate's mark on the rock face.",
    location: { lat: 125, long: 46 },
    completed: false,
    image: "https://images.unsplash.com/photo-1613126722867-2e5f71a8e3f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    icon: <Swords className="w-4 h-4" />
  },
  {
    id: 4,
    title: "Kraken's Reef",
    hint: "Dive deep where the coral forms the shape of a tentacled beast. Beneath the sunken ship lies a chest bound in rusted chains.",
    location: { lat: 126, long: 45 },
    completed: false,
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    icon: <Ship className="w-4 h-4" />
  },
  {
    id: 5,
    title: "Blackbeard's Chamber",
    hint: "Where X marks the spot on the ancient parchment, dig beneath the stone carved with a bearded skull. The final treasure awaits the brave.",
    location: { lat: 128, long: 48 },
    completed: false,
    image: "https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    icon: <Skull className="w-4 h-4" />
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
        {/* Background with pirate theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-island-purple/30 to-island-dark/50 -z-10" />
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-repeat bg-[length:400px_400px] opacity-5 -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-island-orange/20 text-island-orange rounded-full px-4 py-1 text-sm mb-4">
              Pirate Adventure
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Island Treasure Hunt</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Embark on an exciting treasure hunt to discover the legendary pirate's hidden gold
            </p>
          </motion.div>
          
          {/* Hunt Overview - Pirate Themed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 mb-12 relative overflow-hidden"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1535805530432-6b79f9cbf258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="flex flex-col md:flex-row gap-8 relative z-10">
              <div className="md:w-1/3 relative rounded-xl overflow-hidden animated-border">
                <img 
                  src={treasureHunt.image} 
                  alt={treasureHunt.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                
                {/* Animated treasure chest */}
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
                  <div className="w-20 h-20 rounded-lg bg-island-orange flex items-center justify-center text-white">
                    <Sparkles className="w-10 h-10" />
                  </div>
                </motion.div>
              </div>
              
              <div className="md:w-2/3 text-white">
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <Skull className="mr-3 w-8 h-8" />
                  {treasureHunt.title}
                </h2>
                <p className="text-white/90 mb-6 text-lg italic border-l-4 border-island-orange pl-4">
                  "{treasureHunt.description}"
                </p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Progress: {treasureHunt.completedClues} of {treasureHunt.totalClues} clues found
                    </span>
                    <span className="text-sm font-medium">
                      {Math.round((treasureHunt.completedClues / treasureHunt.totalClues) * 100)}%
                    </span>
                  </div>
                  <Progress value={(treasureHunt.completedClues / treasureHunt.totalClues) * 100} className="h-2 bg-white/20" />
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/treasure-hunt">
                    <Button className="button-glow bg-island-orange hover:bg-island-orange/90">
                      <MapIcon className="mr-2 h-4 w-4" /> View Treasure Map
                    </Button>
                  </Link>
                  <Link to="/treasure-hunt">
                    <Button variant="outline" className="glass border-white/30 text-white hover:bg-white/20">
                      <Compass className="mr-2 h-4 w-4" /> Join New Hunt
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Clue Path Visualization - Pirate Theme */}
          <div className="relative py-8 mb-12">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-island-orange via-island-purple to-island-pink" />
            
            {clues.map((clue, index) => (
              <motion.div 
                key={clue.id}
                className="relative mb-8 last:mb-0 pl-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                {/* Marker with pirate theme */}
                <motion.div 
                  className={`absolute left-8 top-0 w-8 h-8 rounded-full -translate-x-1/2 flex items-center justify-center ${
                    clue.completed 
                      ? 'bg-island-orange text-white' 
                      : index === treasureHunt.completedClues 
                        ? 'bg-island-purple text-white animate-pulse' 
                        : 'bg-white/80 text-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                >
                  {clue.completed ? (
                    <CheckIcon className="w-4 h-4" />
                  ) : index === treasureHunt.totalClues - 1 ? (
                    <Skull className="w-4 h-4" />
                  ) : (
                    clue.icon || <Footprints className="w-4 h-4" />
                  )}
                </motion.div>
                
                {/* Path to next marker */}
                {index < clues.length - 1 && (
                  <motion.div 
                    className={`absolute left-8 top-8 bottom-0 w-1 h-[calc(100%-2rem)] -translate-x-1/2 ${
                      clue.completed ? 'bg-island-orange' : 'bg-white/20'
                    }`}
                    initial={{ height: 0 }}
                    animate={{ height: 'calc(100% - 2rem)' }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  />
                )}
                
                {/* Clue Card with pirate theme */}
                <div 
                  className={`glass-card overflow-hidden transition-all duration-300 border-l-4 ${
                    clue.completed ? 'border-island-orange' : 
                    index === treasureHunt.completedClues ? 'border-island-purple' : 'border-transparent'
                  } ${
                    expandedClue === clue.id ? 'shadow-lg shadow-island-purple/20' : ''
                  }`}
                  style={{
                    backgroundImage: expandedClue !== clue.id ? "url('https://images.unsplash.com/photo-1535805530432-6b79f9cbf258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" : "",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay"
                  }}
                >
                  <div 
                    className={`p-4 cursor-pointer flex justify-between items-center relative ${
                      expandedClue !== clue.id ? 'bg-black/40 text-white' : ''
                    }`}
                    onClick={() => toggleClue(clue.id)}
                  >
                    <div className="flex items-center">
                      <div 
                        className={`w-3 h-3 rounded-full mr-3 ${
                          clue.completed 
                            ? 'bg-island-orange' 
                            : index === treasureHunt.completedClues 
                              ? 'bg-island-purple animate-pulse' 
                              : 'bg-gray-300'
                        }`}
                      />
                      <h3 className="font-bold flex items-center">
                        {clue.icon && <span className="mr-2">{clue.icon}</span>}
                        {clue.title}
                      </h3>
                    </div>
                    <div className="flex items-center">
                      {clue.completed && <span className="text-island-orange text-sm mr-2">Completed</span>}
                      {expandedClue === clue.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                  
                  {/* Expanded content with pirate theme */}
                  {expandedClue === clue.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img 
                          src={clue.image} 
                          alt={clue.title} 
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Pirate map overlay */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589218436045-ee320057f443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] opacity-40 mix-blend-overlay"></div>
                        
                        {/* Location pin */}
                        <motion.div 
                          className="absolute top-4 right-4 bg-island-orange/80 backdrop-blur-sm rounded-full p-2"
                          whileHover={{ scale: 1.1 }}
                        >
                          <MapPin className="w-5 h-5 text-white" />
                        </motion.div>
                        
                        {/* X marks the spot */}
                        {index === treasureHunt.totalClues - 1 && (
                          <motion.div
                            className="absolute bottom-4 right-4 text-4xl font-pirate text-island-orange"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            X
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="p-6 pt-0 border-t border-white/10 mt-4 bg-[url('https://images.unsplash.com/photo-1535805530432-6b79f9cbf258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-black/60 bg-blend-overlay text-white">
                        <h4 className="font-pirate text-xl mb-2 text-island-orange">Hint from Captain's Log:</h4>
                        <p className="text-white/90 italic mb-4 font-serif">{clue.hint}</p>
                        
                        <Link to="/treasure-hunt">
                          <Button 
                            className={clue.completed ? 'bg-island-orange hover:bg-island-orange/90' : ''}
                            disabled={index > treasureHunt.completedClues}
                          >
                            {clue.completed ? 'Clue Found' : index === treasureHunt.completedClues ? 'Find This Clue' : 'Locked'}
                            <ChevronRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
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
