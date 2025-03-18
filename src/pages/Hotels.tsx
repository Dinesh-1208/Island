
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Star, Users, ArrowLeft, ArrowRight, Wifi, Tv, Coffee, Bath } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

// Placeholder hotel data
const hotels = [
  {
    id: 1,
    name: "Ocean Paradise Resort",
    description: "Luxury resort with stunning ocean views and private beach access.",
    price: 299,
    rating: 4.8,
    amenities: ["wifi", "tv", "coffee", "bath"],
    location: "North Shore",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    ]
  },
  {
    id: 2,
    name: "Sunset Bay Villas",
    description: "Exclusive villas perfect for watching the spectacular island sunsets.",
    price: 399,
    rating: 4.9,
    amenities: ["wifi", "tv", "coffee", "bath"],
    location: "West Bay",
    images: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1587874522487-fe10e9d4ebb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    ]
  },
  {
    id: 3,
    name: "Tropical Garden Inn",
    description: "Boutique hotel surrounded by lush tropical gardens and exotic wildlife.",
    price: 199,
    rating: 4.6,
    amenities: ["wifi", "coffee", "bath"],
    location: "Central Hills",
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    ]
  }
];

const Hotels = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [guests, setGuests] = useState(2);
  const [activeSlides, setActiveSlides] = useState<{ [key: number]: number }>({});
  
  const handlePrevSlide = (hotelId: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [hotelId]: ((prev[hotelId] || 0) - 1 + hotels.find(h => h.id === hotelId)!.images.length) % hotels.find(h => h.id === hotelId)!.images.length
    }));
  };
  
  const handleNextSlide = (hotelId: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [hotelId]: ((prev[hotelId] || 0) + 1) % hotels.find(h => h.id === hotelId)!.images.length
    }));
  };
  
  // Icon mapping
  const amenityIcons = {
    wifi: <Wifi className="w-4 h-4" />,
    tv: <Tv className="w-4 h-4" />,
    coffee: <Coffee className="w-4 h-4" />,
    bath: <Bath className="w-4 h-4" />
  };
  
  return (
    <Layout>
      <div className="min-h-screen relative pt-24 pb-16 px-6">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-island-teal/20 to-island-light -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-island-teal/10 text-island-teal rounded-full px-4 py-1 text-sm mb-4">
              Luxury Accommodations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From luxurious resorts to cozy villas, discover the perfect accommodation for your island getaway
            </p>
          </motion.div>
          
          {/* Search and Filter Section */}
          <motion.div 
            className="glass-card p-6 mb-12 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Date Picker */}
            <div>
              <p className="text-sm font-medium mb-2">Check-in Date</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="glass w-[240px] justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Guests */}
            <div>
              <p className="text-sm font-medium mb-2">Guests</p>
              <div className="glass flex items-center p-1 rounded-md border border-white/30">
                <button 
                  onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                >
                  -
                </button>
                <div className="flex-1 text-center">
                  <Users className="inline-block mr-1 w-4 h-4" />
                  <span>{guests}</span>
                </div>
                <button 
                  onClick={() => setGuests(prev => prev + 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Search Button */}
            <div className="flex items-end">
              <Button className="button-glow h-10">
                Search Availability
              </Button>
            </div>
          </motion.div>
          
          {/* Hotel Listings */}
          <div className="space-y-12">
            {hotels.map((hotel, index) => (
              <motion.div 
                key={hotel.id}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {/* Image Carousel */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div className="relative w-full h-full">
                      {hotel.images.map((image, imgIndex) => (
                        <motion.div 
                          key={imgIndex}
                          className="absolute inset-0"
                          initial={false}
                          animate={{ 
                            opacity: (activeSlides[hotel.id] || 0) === imgIndex ? 1 : 0,
                            scale: (activeSlides[hotel.id] || 0) === imgIndex ? 1 : 1.1
                          }}
                          transition={{ duration: 0.7 }}
                        >
                          <img 
                            src={image} 
                            alt={`${hotel.name} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Carousel Controls */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                      {hotel.images.map((_, imgIndex) => (
                        <button 
                          key={imgIndex} 
                          className={`w-2 h-2 rounded-full transition-all ${
                            (activeSlides[hotel.id] || 0) === imgIndex 
                              ? 'bg-white scale-125' 
                              : 'bg-white/40'
                          }`}
                          onClick={() => setActiveSlides(prev => ({ ...prev, [hotel.id]: imgIndex }))}
                        />
                      ))}
                    </div>
                    
                    <button 
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
                      onClick={() => handlePrevSlide(hotel.id)}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
                      onClick={() => handleNextSlide(hotel.id)}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Hotel Details */}
                  <div className="p-6 lg:col-span-2">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-2xl font-bold">{hotel.name}</h2>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span>{hotel.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-island-teal/10 text-island-teal rounded-full px-3 py-1 text-xs">
                        {hotel.location}
                      </span>
                      
                      {/* Amenities */}
                      {hotel.amenities.map((amenity) => (
                        <span 
                          key={amenity}
                          className="bg-white/40 rounded-full w-8 h-8 flex items-center justify-center"
                          title={amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                        >
                          {amenityIcons[amenity as keyof typeof amenityIcons]}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap justify-between items-end mt-6">
                      <div>
                        <span className="text-3xl font-bold">${hotel.price}</span>
                        <span className="text-gray-600"> / night</span>
                      </div>
                      
                      <Button className="button-glow">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hotels;
