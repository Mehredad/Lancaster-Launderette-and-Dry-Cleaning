
import { ArrowDown } from 'lucide-react';
import { useScrollReveal, useSmoothScroll } from '../utils/animations';

const Hero = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();
  const scrollToElement = useSmoothScroll();

  return (
    <section 
      id="hero" 
      className="relative min-h-[100vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-light opacity-30 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-blue-light opacity-20 rounded-full blur-3xl animate-pulse-soft animation-delay-500"></div>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div 
          ref={titleRef} 
          className={`flex flex-col space-y-8 transition-all duration-1000 delay-100 ${
            titleRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center">
            <div className="h-0.5 w-12 bg-blue mr-4"></div>
            <span className="text-blue font-medium uppercase tracking-wider text-sm">Welcome to Lancaster Launderette</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-charcoal">
            Grab a coffee, <span className="text-gradient">laundry today</span>, but not naked tomorrow!
          </h1>
          
          <p className="text-gray-dark text-lg md:text-xl max-w-lg">
            Experience premium laundry services with a coffee shop inside. Clean clothes and good vibes all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => scrollToElement('services')}
              className="px-8 py-4 bg-blue text-white rounded-lg font-medium hover:bg-blue-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToElement('location')}
              className="px-8 py-4 border-2 border-blue text-blue rounded-lg font-medium hover:bg-blue-light transition-all duration-300 transform hover:-translate-y-1"
            >
              Find Us
            </button>
          </div>
        </div>
        
        {/* Image */}
        <div 
          ref={contentRef}
          className={`relative transition-all duration-1000 delay-300 ${
            contentRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
            <div className="absolute inset-0 bg-gradient-to-t from-blue/20 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Modern laundry service with coffee shop" 
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-elegant animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-light rounded-full flex items-center justify-center text-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-medium">Quick service</p>
                <p className="text-charcoal font-semibold">Ready in 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <button 
          onClick={() => scrollToElement('services')} 
          className="flex flex-col items-center text-gray-medium hover:text-blue transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
