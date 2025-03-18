
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Star, Trophy, Leaf, Flame, Filter, ChevronDown, ChevronUp, CreditCard, Shell, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Enhanced restaurant data
const restaurants = [
  {
    id: 1,
    name: "Oceanside Grill",
    cuisine: "Seafood",
    description: "Fresh seafood grilled to perfection with a stunning view of the ocean. Specializing in local catch and traditional island recipes.",
    rating: 4.8,
    priceRange: "$$$",
    tags: ["Best Seller", "Ocean View"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 2,
    name: "Island Fusion",
    cuisine: "Fusion",
    description: "A unique blend of local and international flavors in a tropical setting. Our chef combines traditional island ingredients with global techniques.",
    rating: 4.7,
    priceRange: "$$$$",
    tags: ["Vegan Options", "Popular"],
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 3,
    name: "Beachside Café",
    cuisine: "Café",
    description: "Casual dining with specialty coffees, pastries, and light meals. Perfect for breakfast or a relaxing afternoon by the beach.",
    rating: 4.5,
    priceRange: "$$",
    tags: ["Breakfast", "Coffee"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 4,
    name: "Jungle Bistro",
    cuisine: "Local",
    description: "Authentic local cuisine surrounded by lush tropical vegetation. Farm-to-table dishes featuring ingredients from our own garden.",
    rating: 4.6,
    priceRange: "$$$",
    tags: ["Traditional", "Hot"],
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 5,
    name: "Sunset Lounge",
    cuisine: "International",
    description: "Upscale dining with panoramic sunset views. Enjoy craft cocktails and gourmet dishes while watching the sun sink into the ocean.",
    rating: 4.9,
    priceRange: "$$$$",
    tags: ["Romantic", "View"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 6,
    name: "Coconut Shack",
    cuisine: "Street Food",
    description: "Casual beach shack serving quick bites and refreshing drinks. Famous for fresh coconut water and local street food favorites.",
    rating: 4.3,
    priceRange: "$",
    tags: ["Quick Bites", "Beach"],
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  }
];

// Enhanced food menu items
const popularDishes = [
  {
    id: 1,
    name: "Grilled Island Fish",
    description: "Locally caught fish grilled with herbs and served with tropical salsa and coconut rice.",
    price: 28,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    tags: ["Best Seller"]
  },
  {
    id: 2,
    name: "Coconut Curry Shrimp",
    description: "Succulent shrimp in a creamy coconut curry sauce with jasmine rice and mango chutney.",
    price: 32,
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    tags: ["Spicy"]
  },
  {
    id: 3,
    name: "Tropical Fruit Plate",
    description: "Fresh selection of local fruits including mango, papaya, passion fruit, and dragon fruit.",
    price: 16,
    image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    tags: ["Vegan"]
  },
  {
    id: 4,
    name: "Island Lobster Tail",
    description: "Grilled spiny lobster tail basted with garlic butter and served with island slaw and plantains.",
    price: 45,
    image: "https://images.unsplash.com/photo-1533680890290-5dccd8d2e8ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    tags: ["Premium"]
  },
  {
    id: 5,
    name: "Volcano Chocolate Cake",
    description: "Warm chocolate cake with a molten center, topped with vanilla bean ice cream and caramelized banana.",
    price: 14,
    image: "https://images.unsplash.com/photo-1611329695518-1763fc1fcb81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    tags: ["Dessert"]
  },
  {
    id: 6,
    name: "Caribbean Jerk Chicken",
    description: "Traditional jerk-spiced chicken with rice and peas, fried plantains, and mango salsa.",
    price: 26,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    tags: ["Hot"]
  }
];

// Enhanced tag icons
const tagIcons = {
  "Best Seller": <Trophy className="w-3 h-3" />,
  "Vegan Options": <Leaf className="w-3 h-3" />,
  "Vegan": <Leaf className="w-3 h-3" />,
  "Spicy": <Flame className="w-3 h-3" />,
  "Hot": <Flame className="w-3 h-3" />,
  "Popular": <Star className="w-3 h-3" />,
  "Premium": <Shell className="w-3 h-3" />,
  "Romantic": <Heart className="w-3 h-3" />,
  "Dessert": <CreditCard className="w-3 h-3" />
};

const Restaurants = () => {
  const [filters, setFilters] = useState({
    cuisine: 'All',
    priceRange: 'All'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [orderItems, setOrderItems] = useState<number[]>([]);
  
  const cuisines = ['All', ...new Set(restaurants.map(restaurant => restaurant.cuisine))];
  const priceRanges = ['All', '$', '$$', '$$$', '$$$$'];
  
  const filteredRestaurants = restaurants.filter(restaurant => {
    return (filters.cuisine === 'All' || restaurant.cuisine === filters.cuisine) &&
           (filters.priceRange === 'All' || restaurant.priceRange === filters.priceRange);
  });
  
  const toggleFilter = () => {
    setShowFilters(!showFilters);
  };
  
  const handleFilterChange = (type: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };
  
  const addToOrder = (dishId: number) => {
    setOrderItems(prev => [...prev, dishId]);
    alert(`Item added to order! Total items: ${orderItems.length + 1}`);
  };
  
  return (
    <Layout>
      <div className="min-h-screen relative pt-24 pb-16 px-6">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-island-orange/20 to-island-light -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-island-orange/10 text-island-orange rounded-full px-4 py-1 text-sm mb-4">
              Culinary Delights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Island Dining Experiences</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the finest restaurants and flavors our island has to offer
            </p>
          </motion.div>
          
          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Button 
              variant="outline" 
              className="flex items-center gap-2 glass mb-4"
              onClick={toggleFilter}
            >
              <Filter className="w-4 h-4" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
            
            {showFilters && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="glass-card p-4 mb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Cuisine Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {cuisines.map(cuisine => (
                        <button
                          key={cuisine}
                          className={`px-3 py-1 rounded-full text-sm ${
                            filters.cuisine === cuisine 
                              ? 'bg-island-orange text-white' 
                              : 'bg-white/40 hover:bg-white/60'
                          }`}
                          onClick={() => handleFilterChange('cuisine', cuisine)}
                        >
                          {cuisine}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Price Range</h3>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map(price => (
                        <button
                          key={price}
                          className={`px-3 py-1 rounded-full text-sm ${
                            filters.priceRange === price 
                              ? 'bg-island-orange text-white' 
                              : 'bg-white/40 hover:bg-white/60'
                          }`}
                          onClick={() => handleFilterChange('priceRange', price)}
                        >
                          {price}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
          
          {/* Featured Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Featured Restaurants</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant, index) => (
                <motion.div 
                  key={restaurant.id}
                  className="glass-card overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 right-0 px-4 py-2 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
                      <span className="text-white text-sm">{restaurant.cuisine}</span>
                      <span className="text-white text-sm flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                        {restaurant.rating}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/50 to-transparent">
                      <span className="text-white text-sm">{restaurant.priceRange}</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{restaurant.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {restaurant.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="flex items-center text-xs bg-white/40 px-2 py-1 rounded-full"
                        >
                          {tag in tagIcons && (
                            <span className="mr-1">{tagIcons[tag as keyof typeof tagIcons]}</span>
                          )}
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link to={`/restaurants`}>
                      <Button className="w-full glass hover:bg-island-orange hover:text-white transition-colors">
                        View Menu
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Popular Dishes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Popular Island Dishes</h2>
              <Link to="/restaurants">
                <Button variant="outline" className="glass">View Full Menu</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDishes.map((dish, index) => (
                <motion.div 
                  key={dish.id}
                  className="glass-card overflow-hidden relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {dish.tags.map(tag => {
                      if (tag in tagIcons) {
                        return (
                          <div 
                            key={tag} 
                            className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-full"
                          >
                            {tagIcons[tag as keyof typeof tagIcons]}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{dish.name}</h3>
                      <span className="font-bold">${dish.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{dish.description}</p>
                    
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Button 
                        className="button-glow"
                        onClick={() => addToOrder(dish.id)}
                      >
                        Add to Order
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Restaurants;
