
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { useSmoothScroll } from '../utils/animations';

const Footer = () => {
  const scrollToElement = useSmoothScroll();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center text-white font-semibold mr-3">
                L
              </div>
              <div className="text-xl font-semibold">
                Lancaster<span className="text-blue ml-1">Launderette</span>
              </div>
            </div>
            
            <p className="text-gray-medium mb-6">
              Professional laundry and dry cleaning services with a cozy café inside. We're dedicated to keeping your clothes fresh and your experience enjoyable.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue/20 flex items-center justify-center hover:bg-blue transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue/20 flex items-center justify-center hover:bg-blue transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue/20 flex items-center justify-center hover:bg-blue transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Café', id: 'cafe' },
                { name: 'Location', id: 'location' },
                { name: 'Reviews', id: 'testimonials' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToElement(item.id)}
                    className="text-gray-medium hover:text-blue transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Laundry Service',
                'Wash & Fold',
                'Wash & Iron',
                'Dry Cleaning',
                'Shirt Service',
                'Duvet Cleaning',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToElement('services')}
                    className="text-gray-medium hover:text-blue transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-blue mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-medium">
                  39 Dalton Square<br />
                  Lancaster LA1 1PP<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex">
                <Phone size={20} className="text-blue mr-3 flex-shrink-0" />
                <a href="tel:+441524596401" className="text-gray-medium hover:text-blue transition-colors">
                  01524 596401
                </a>
              </li>
              <li className="flex">
                <Mail size={20} className="text-blue mr-3 flex-shrink-0" />
                <a href="mailto:info@lancasterlaunderette.co.uk" className="text-gray-medium hover:text-blue transition-colors">
                  info@lancasterlaunderette.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-dark/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-medium text-sm mb-4 md:mb-0">
            © {currentYear} Lancaster Launderette & Dry Cleaning. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-medium hover:text-blue text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-medium hover:text-blue text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
