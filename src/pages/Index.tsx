
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Map, Hotel, Utensils, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1]
    }
  })
};

const HomePage = () => {
  const { scrollY } = useScroll();
  
  // Section refs for viewport detection
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  // Viewport detection
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 });
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  const featureCards = [
    {
      title: "View Sites",
      description: "Discover breathtaking viewpoints and hidden beaches around the island.",
      icon: <Map className="w-10 h-10" />,
      color: "from-island-blue to-island-teal",
      link: "/sites"
    },
    {
      title: "Hotel Booking",
      description: "Find and book your perfect accommodation with ocean views and luxury amenities.",
      icon: <Hotel className="w-10 h-10" />,
      color: "from-island-teal to-island-green",
      link: "/hotels"
    },
    {
      title: "Restaurants",
      description: "Taste local cuisine and international dishes at our partner restaurants.",
      icon: <Utensils className="w-10 h-10" />,
      color: "from-island-orange to-island-pink",
      link: "/restaurants"
    },
    {
      title: "Treasure Hunt",
      description: "Embark on an exciting adventure to find hidden treasures across the island.",
      icon: <Compass className="w-10 h-10" />,
      color: "from-island-purple to-island-indigo",
      link: "/treasure-hunt"
    }
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-island-blue via-island-teal to-island-purple -z-10" />
        
        {/* Animated wave pattern */}
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
        
        {/* Hero content */}
        <motion.div 
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={0}
          >
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1 text-sm mb-4">
              Welcome to Paradise
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={1}
          >
            Discover the Magic of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Island Paradise</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={2}
          >
            Immerse yourself in crystal clear waters, pristine beaches, and unforgettable experiences on our tropical paradise.
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="button-glow rounded-full px-8 py-6 h-auto text-white text-lg">
              Start Exploring
            </Button>
            <Button variant="outline" className="glass rounded-full px-8 py-6 h-auto text-white text-lg border-white/30 backdrop-blur-sm hover:bg-white/20">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-20 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-island-blue/10 to-island-light -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={0}
            className="text-center mb-16"
          >
            <span className="inline-block bg-island-blue/10 text-island-blue rounded-full px-4 py-1 text-sm mb-4">
              Explore Our Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Perfect Getaway</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create unforgettable memories on our beautiful island
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                custom={index + 1}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="glass-card p-8 group transition-all duration-500 hover:bg-white/30"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-white bg-gradient-to-br ${card.color} group-hover:scale-110 transition-transform duration-500`}>
                  {card.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                
                <Link 
                  to={card.link} 
                  className="inline-flex items-center font-medium text-island-blue group-hover:text-island-indigo transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-20 px-6 relative overflow-hidden bg-island-dark text-white"
      >
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-repeat bg-[length:400px_400px] opacity-5 -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              custom={0}
            >
              <span className="inline-block bg-white/10 text-white rounded-full px-4 py-1 text-sm mb-4">
                About Our Island
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">A Tropical Paradise Awaits You</h2>
              <p className="text-lg text-white/80 mb-6">
                Nestled in the heart of the crystal blue ocean, our island offers a perfect blend of adventure, relaxation, and natural beauty. With pristine beaches, lush forests, and vibrant coral reefs, there's something for everyone.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Whether you're seeking thrilling water sports, tranquil spa retreats, or cultural experiences, our island paradise promises unforgettable memories that will last a lifetime.
              </p>
              <Button className="button-glow rounded-full px-8 py-6 h-auto text-white text-lg">
                Discover More
              </Button>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              custom={1}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden animated-border">
                <img 
                  src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
                  alt="Island Paradise" 
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs"
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
              >
                <h3 className="text-xl font-bold mb-2">Crystal Clear Waters</h3>
                <p className="text-white/80">
                  Our beaches feature some of the clearest waters in the world, perfect for snorkeling and diving.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
