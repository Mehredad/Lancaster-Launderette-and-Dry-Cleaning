
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '../utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollToElement = useSmoothScroll();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (elementId: string) => {
    scrollToElement(elementId);
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white shadow-elegant backdrop-blur-lg bg-opacity-90' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div 
            className="text-2xl md:text-3xl font-semibold flex items-center gap-2"
            onClick={() => handleNavClick('hero')}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue rounded-full flex items-center justify-center text-white">
              L
            </div>
            <span className="hidden sm:block">Lancaster</span>
            <span className="text-blue hidden sm:block">Launderette</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Services', id: 'services' },
            { name: 'Cafe', id: 'cafe' },
            { name: 'Location', id: 'location' },
            { name: 'Reviews', id: 'testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative text-charcoal hover:text-blue transition-colors duration-200 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-charcoal focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-24 px-6 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex flex-col space-y-6">
          {[
            { name: 'Services', id: 'services' },
            { name: 'Cafe', id: 'cafe' },
            { name: 'Location', id: 'location' },
            { name: 'Reviews', id: 'testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="py-3 text-xl text-charcoal border-b border-gray-light hover:text-blue transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
