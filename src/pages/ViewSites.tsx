
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Search, MapPin, Waves, Sun, Mountain, Fish, TreePine, Bike, UtensilsCrossed, Camera } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const ViewSites = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Enhanced site data with more locations
  const sites = [
    {
      id: 1,
      name: "Crystal Bay",
      type: "Beach",
      description: "A secluded beach with crystal clear waters and white sand.",
      activities: ["Swimming", "Snorkeling", "Sunbathing"],
      image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <Waves className="w-4 h-4" />
    },
    {
      id: 2,
      name: "Sunrise Point",
      type: "Viewpoint",
      description: "The perfect spot to catch the sunrise over the ocean.",
      activities: ["Photography", "Hiking"],
      image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <Sun className="w-4 h-4" />
    },
    {
      id: 3,
      name: "Coral Garden",
      type: "Snorkeling",
      description: "Home to vibrant coral reefs and colorful marine life.",
      activities: ["Snorkeling", "Diving", "Boat Tours"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <Fish className="w-4 h-4" />
    },
    {
      id: 4,
      name: "Hidden Waterfall",
      type: "Nature",
      description: "A majestic waterfall tucked away in the lush jungle.",
      activities: ["Swimming", "Hiking", "Photography"],
      image: "https://images.unsplash.com/photo-1564500601744-5dca3c9038a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <TreePine className="w-4 h-4" />
    },
    {
      id: 5,
      name: "Blue Lagoon",
      type: "Beach",
      description: "Turquoise waters surrounded by dramatic cliffs and lush vegetation.",
      activities: ["Swimming", "Cliff Jumping", "Picnicking"],
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <Waves className="w-4 h-4" />
    },
    {
      id: 6,
      name: "Volcano Peak",
      type: "Hiking",
      description: "Trek to the top of our dormant volcano for breathtaking 360° views.",
      activities: ["Hiking", "Photography", "Wildlife Spotting"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <Mountain className="w-4 h-4" />
    },
    {
      id: 7,
      name: "Bamboo Forest",
      type: "Nature",
      description: "Explore the enchanting bamboo forest with trails for all skill levels.",
      activities: ["Hiking", "Biking", "Photography"],
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <TreePine className="w-4 h-4" />
    },
    {
      id: 8,
      name: "Coastal Trail",
      type: "Biking",
      description: "A scenic bike path along the coast with stunning ocean views.",
      activities: ["Biking", "Walking", "Bird Watching"],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <Bike className="w-4 h-4" />
    },
    {
      id: 9,
      name: "Fisherman's Cove",
      type: "Dining",
      description: "A quaint fishing village with fresh seafood and beautiful sunset views.",
      activities: ["Dining", "Photography", "Shopping"],
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <UtensilsCrossed className="w-4 h-4" />
    },
    {
      id: 10,
      name: "Moonlight Bay",
      type: "Photography",
      description: "The best spot on the island for night photography and stargazing.",
      activities: ["Stargazing", "Photography", "Camping"],
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      icon: <Camera className="w-4 h-4" />
    }
  ];
  
  // Filter sites based on search
  const filteredSites = searchTerm 
    ? sites.filter(site => 
        site.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        site.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        site.activities.some(activity => activity.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : sites;
  
  return (
    <Layout>
      <div className="min-h-screen relative pt-24 pb-16 px-6">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-island-blue/30 to-island-light -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-island-blue/10 text-island-blue rounded-full px-4 py-1 text-sm mb-4">
              Island Exploration
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Beautiful Sites</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the most breathtaking locations our island has to offer
            </p>
          </motion.div>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search for beaches, viewpoints, and more..." 
                className="glass pl-12 h-14 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
          
          {/* Map and Site Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map (Placeholder) */}
            <motion.div 
              className="lg:col-span-2 glass-card p-4 h-[600px] relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-island-blue/5" />
              <div className="relative h-full rounded-lg overflow-hidden">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Island Map" 
                  className="w-full h-full object-cover"
                />
                
                {/* Map pins */}
                {filteredSites.map((site, index) => (
                  <motion.div 
                    key={site.id}
                    className="absolute"
                    style={{ 
                      top: `${10 + (index % 5) * 15}%`, 
                      left: `${10 + (Math.floor(index / 5) * 25)}%` 
                    }}
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    <div className="relative group">
                      <motion.div 
                        className="w-6 h-6 bg-island-blue text-white rounded-full flex items-center justify-center cursor-pointer"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      >
                        <MapPin className="w-4 h-4" />
                      </motion.div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 glass-card p-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                        <p className="font-medium text-sm">{site.name}</p>
                        <div className="flex items-center text-xs text-white/70">
                          {site.icon}
                          <span className="ml-1">{site.type}</span>
                        </div>
                      </div>
                      
                      {/* Pulse effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-island-blue"
                        animate={{ 
                          scale: [1, 2],
                          opacity: [0.5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Site listing */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Popular Destinations</h2>
                <span className="text-sm text-island-blue">{filteredSites.length} locations</span>
              </div>
              
              <div className="h-[550px] overflow-y-auto pr-2 space-y-6">
                {filteredSites.map((site, index) => (
                  <Link to={`/sites`} key={site.id}>
                    <motion.div 
                      className="glass-card overflow-hidden group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={site.image} 
                          alt={site.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium flex items-center">
                          {site.icon}
                          <span className="ml-1">{site.type}</span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{site.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{site.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {site.activities.map((activity, idx) => (
                            <span key={idx} className="text-xs bg-white/40 px-2 py-1 rounded-full">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewSites;
