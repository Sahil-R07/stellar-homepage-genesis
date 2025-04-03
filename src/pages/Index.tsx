
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Menu, 
  X, 
  ArrowRight, 
  Rocket, 
  Globe, 
  Search, 
  Users, 
  Mail 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stars, setStars] = useState<{ id: number; size: number; top: string; left: string; delay: number }[]>([]);
  
  // Generate random stars for the background
  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, (_, index) => ({
      id: index,
      size: Math.random() * 3 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const testimonials = [
    {
      id: 1,
      quote: "StellarInsights revolutionized how our research team analyzes astronomical data.",
      author: "Dr. Sarah Chen",
      role: "Astrophysicist, MIT"
    },
    {
      id: 2,
      quote: "The patterns we discovered using StellarInsights led to our breakthrough publication.",
      author: "Prof. James Wilson",
      role: "Astronomy Department, CalTech"
    },
    {
      id: 3,
      quote: "As an amateur astronomer, StellarInsights helps me understand the cosmos better than ever.",
      author: "Michael Rodriguez",
      role: "Astronomy Enthusiast"
    }
  ];

  const services = [
    {
      id: 1,
      icon: <Rocket className="h-12 w-12 text-stellar-bright-purple" />,
      title: "Space Exploration Data",
      description: "Access real-time data from space missions and explorations across the solar system and beyond."
    },
    {
      id: 2,
      icon: <Globe className="h-12 w-12 text-stellar-accent-blue" />,
      title: "Celestial Mapping",
      description: "Interactive maps of stars, planets, and galaxies with detailed information and visualizations."
    },
    {
      id: 3,
      icon: <Search className="h-12 w-12 text-stellar-accent-cyan" />,
      title: "Astronomical Analysis",
      description: "Powerful tools to analyze astronomical data with advanced AI and pattern recognition."
    },
    {
      id: 4,
      icon: <Users className="h-12 w-12 text-stellar-bright-purple" />,
      title: "Scientific Community",
      description: "Connect with astronomers and enthusiasts around the world to collaborate and share insights."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background stars */}
      {stars.map((star) => (
        <div 
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 relative z-10">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="w-8 h-8 text-stellar-bright-purple mr-2" />
            <span className="text-2xl font-bold text-white">StellarInsights</span>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="text-white hover:text-stellar-bright-purple transition-colors">Home</a></li>
            <li><a href="#about" className="text-white hover:text-stellar-bright-purple transition-colors">About</a></li>
            <li><a href="#services" className="text-white hover:text-stellar-bright-purple transition-colors">Services</a></li>
            <li><a href="#testimonials" className="text-white hover:text-stellar-bright-purple transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="text-white hover:text-stellar-bright-purple transition-colors">Contact</a></li>
          </ul>
          
          <Button className="hidden md:flex bg-stellar-bright-purple hover:bg-stellar-accent-blue text-white transition-colors">
            Get Started
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-stellar-deep-purple bg-opacity-95 z-50 md:hidden">
            <div className="flex justify-end p-6">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white" 
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col space-y-8 text-center">
                <li><a href="#home" className="text-xl text-white hover:text-stellar-bright-purple" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" className="text-xl text-white hover:text-stellar-bright-purple" onClick={toggleMenu}>About</a></li>
                <li><a href="#services" className="text-xl text-white hover:text-stellar-bright-purple" onClick={toggleMenu}>Services</a></li>
                <li><a href="#testimonials" className="text-xl text-white hover:text-stellar-bright-purple" onClick={toggleMenu}>Testimonials</a></li>
                <li><a href="#contact" className="text-xl text-white hover:text-stellar-bright-purple" onClick={toggleMenu}>Contact</a></li>
                <li>
                  <Button className="bg-stellar-bright-purple hover:bg-stellar-accent-blue text-white transition-colors">
                    Get Started
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto py-16 md:py-28 px-4 relative">
        <div className="absolute -z-10 inset-0 opacity-30">
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Unlock the Mysteries of the Universe
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-stellar-text-light/80">
            Advanced data analytics and insights from across the cosmos, 
            delivering astronomical discoveries directly to researchers and enthusiasts alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-stellar-bright-purple hover:bg-stellar-accent-blue transition-colors text-lg py-6 px-8">
              Explore the Cosmos
            </Button>
            <Button variant="outline" className="border-stellar-bright-purple text-stellar-bright-purple hover:bg-stellar-bright-purple/10 transition-colors text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4 relative">
        <div className="glass-card p-8 md:p-12 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-stellar-bright-purple">StellarInsights</span>
            </h2>
            <div className="h-1 w-24 bg-stellar-bright-purple mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Bringing the Universe Closer to You</h3>
              <p className="text-lg mb-6 text-stellar-text-light/80">
                Founded by a team of astrophysicists and data scientists, StellarInsights makes complex astronomical 
                data accessible and meaningful for researchers, educators, and space enthusiasts.
              </p>
              <p className="text-lg mb-8 text-stellar-text-light/80">
                Our platform combines real-time space mission data, historical astronomical observations, and 
                cutting-edge analytics to help you discover patterns and insights across the cosmos.
              </p>
              <Button className="flex items-center space-x-2 bg-stellar-accent-blue hover:bg-stellar-bright-purple transition-colors">
                <span>Our Story</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-stellar-bright-purple/30 to-stellar-accent-blue/30 flex items-center justify-center animate-float">
                <div className="absolute inset-4 rounded-full bg-gradient-to-tl from-stellar-bright-purple/20 to-stellar-accent-cyan/20 backdrop-blur-md"></div>
                <div className="relative z-10">
                  <Star className="h-20 w-20 text-white animate-pulse-light" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-stellar-bright-purple">Services</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-stellar-text-light/80">
            Discover how StellarInsights can enhance your understanding of the cosmos
          </p>
          <div className="h-1 w-24 bg-stellar-bright-purple mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="glass-card p-8 transition-transform hover:scale-105 group">
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center group-hover:text-stellar-bright-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-stellar-text-light/80 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-stellar-bright-purple">Testimonials</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-stellar-text-light/80">
            Hear from researchers and enthusiasts who've transformed their understanding of space
          </p>
          <div className="h-1 w-24 bg-stellar-bright-purple mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-card p-8 flex flex-col h-full">
              <div className="mb-6 text-4xl text-stellar-bright-purple">"</div>
              <p className="text-lg mb-6 flex-grow text-stellar-text-light/90">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-bold text-stellar-bright-purple">{testimonial.author}</p>
                <p className="text-sm text-stellar-text-light/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <div className="glass-card p-8 md:p-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated with <span className="text-stellar-bright-purple">Cosmic Discoveries</span>
              </h2>
              <p className="text-lg mb-8 text-stellar-text-light/80">
                Join our newsletter to receive the latest insights, discoveries, and updates from the frontiers of space exploration.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <Mail className="h-5 w-5 text-stellar-bright-purple" />
                <span>contact@stellarinsights.com</span>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 placeholder:text-white/30 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 placeholder:text-white/30 w-full"
                  />
                </div>
                <Button className="w-full bg-stellar-bright-purple hover:bg-stellar-accent-blue transition-colors">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 px-4 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Star className="w-6 h-6 text-stellar-bright-purple mr-2" />
            <span className="text-xl font-bold">StellarInsights</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-stellar-text-light/60">
              © {new Date().getFullYear()} StellarInsights. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
