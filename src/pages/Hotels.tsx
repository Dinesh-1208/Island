import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { format, addDays } from 'date-fns';
import { Calendar as CalendarIcon, Star, Users, ArrowLeft, ArrowRight, Wifi, Tv, Coffee, Bath, Snowflake, Car, Baby, Utensils, Check, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const hotels = [
  {
    id: 1,
    name: "Ocean Paradise Resort",
    description: "Luxury resort with stunning ocean views and private beach access. Enjoy world-class dining, spa services, and water activities.",
    price: 299,
    rating: 4.8,
    amenities: ["wifi", "tv", "coffee", "bath", "ac", "parking", "restaurant", "family"],
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
    description: "Exclusive villas perfect for watching the spectacular island sunsets. Each villa features a private pool and butler service.",
    price: 399,
    rating: 4.9,
    amenities: ["wifi", "tv", "coffee", "bath", "ac", "parking", "restaurant"],
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
    description: "Boutique hotel surrounded by lush tropical gardens and exotic wildlife. Perfect for nature lovers and eco-tourism.",
    price: 199,
    rating: 4.6,
    amenities: ["wifi", "coffee", "bath", "family"],
    location: "Central Hills",
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    ]
  },
  {
    id: 4,
    name: "Island Cove Resort",
    description: "Family-friendly resort with activities for all ages. Features a water park, kids club, and various dining options.",
    price: 249,
    rating: 4.7,
    amenities: ["wifi", "tv", "coffee", "bath", "ac", "parking", "restaurant", "family"],
    location: "East Beach",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    ]
  },
  {
    id: 5,
    name: "Seaside Bungalows",
    description: "Cozy bungalows right on the beach. Simple, comfortable accommodations with amazing ocean views and atmosphere.",
    price: 179,
    rating: 4.5,
    amenities: ["wifi", "coffee", "bath"],
    location: "South Point",
    images: [
      "https://images.unsplash.com/photo-1602002418211-ad67c8340dc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    ]
  }
];

const Hotels = () => {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(addDays(new Date(), 3));
  const [guests, setGuests] = useState(2);
  const [children, setChildren] = useState(0);
  const [activeSlides, setActiveSlides] = useState<{ [key: number]: number }>({});
  const [advancedOptions, setAdvancedOptions] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSearch = () => {
    console.log("Searching for hotels with the following criteria:");
    console.log({
      checkInDate,
      checkOutDate,
      guests,
      children,
      ...formData
    });
    
    alert("Search executed! Check the console for details.");
  };
  
  const amenityIcons = {
    wifi: <Wifi className="w-4 h-4" />,
    tv: <Tv className="w-4 h-4" />,
    coffee: <Coffee className="w-4 h-4" />,
    bath: <Bath className="w-4 h-4" />,
    ac: <Snowflake className="w-4 h-4" />,
    parking: <Car className="w-4 h-4" />,
    family: <Baby className="w-4 h-4" />,
    restaurant: <Utensils className="w-4 h-4" />
  };
  
  return (
    <Layout>
      <div className="min-h-screen relative pt-24 pb-16 px-6">
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
          
          <motion.div 
            className="glass-card p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium mb-2">Check-in Date</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="glass w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkInDate ? format(checkInDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Check-out Date</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="glass w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOutDate ? format(checkOutDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                      fromDate={checkInDate ? addDays(checkInDate, 1) : undefined}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Adults</p>
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
              
              <div>
                <p className="text-sm font-medium mb-2">Children</p>
                <div className="glass flex items-center p-1 rounded-md border border-white/30">
                  <button 
                    onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">
                    <Child className="inline-block mr-1 w-4 h-4" />
                    <span>{children}</span>
                  </div>
                  <button 
                    onClick={() => setChildren(prev => prev + 1)}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <button 
                onClick={() => setAdvancedOptions(!advancedOptions)}
                className="flex items-center text-sm text-island-teal font-medium"
              >
                {advancedOptions ? <ChevronUp className="w-4 h-4 mr-1" /> : <ChevronDown className="w-4 h-4 mr-1" />}
                {advancedOptions ? "Hide" : "Show"} advanced options
              </button>
            </div>
            
            {advancedOptions && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              >
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className="glass" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="glass" 
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    className="glass" 
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Special Requests</label>
                  <Input 
                    type="text" 
                    name="specialRequests" 
                    value={formData.specialRequests} 
                    onChange={handleInputChange} 
                    className="glass" 
                    placeholder="Ocean view, high floor, etc."
                  />
                </div>
              </motion.div>
            )}
            
            <div className="flex justify-center">
              <Button className="button-glow h-10 px-8" onClick={handleSearch}>
                Search Availability
              </Button>
            </div>
          </motion.div>
          
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
                  
                  <div className="p-6 lg:col-span-2">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-2xl font-bold">{hotel.name}</h2>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span>{hotel.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    
                    <div className="mb-4">
                      <span className="bg-island-teal/10 text-island-teal rounded-full px-3 py-1 text-xs inline-flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {hotel.location}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      {hotel.amenities.map((amenity) => (
                        <div 
                          key={amenity}
                          className="flex items-center bg-white/40 rounded-full px-2 py-1"
                          title={amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                        >
                          {amenityIcons[amenity as keyof typeof amenityIcons]}
                          <span className="ml-1 text-xs capitalize">{amenity}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap justify-between items-end mt-6">
                      <div>
                        <span className="text-3xl font-bold">${hotel.price}</span>
                        <span className="text-gray-600"> / night</span>
                      </div>
                      
                      <Link to={`/hotels/${hotel.id}`}>
                        <Button className="button-glow">
                          Book Now
                        </Button>
                      </Link>
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
