
import { Star } from 'lucide-react';
import { useScrollReveal } from '../utils/animations';
import { useState, useEffect, useRef } from 'react';

interface TestimonialProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Testimonial = ({ name, rating, comment, date }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl shadow-card p-6 h-full flex flex-col hover-lift">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-light flex items-center justify-center text-blue font-semibold mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-medium">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index}
            size={16}
            className={index < rating ? "text-blue fill-blue" : "text-gray-light"}
          />
        ))}
      </div>
      
      <p className="text-gray-dark flex-grow">{comment}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-light">
        <p className="text-sm text-gray-medium">Google Review</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  
  const testimonials = [
    {
      name: "Emma Johnson",
      rating: 5,
      comment: "Absolutely love this launderette! The service is quick and my clothes always come back perfectly clean. The coffee shop is a bonus - great cappuccinos!",
      date: "2 months ago"
    },
    {
      name: "David Wilson",
      rating: 5,
      comment: "Best dry cleaning in London. They managed to remove a stain from my favorite jacket that I thought was ruined. Will definitely use their services again.",
      date: "1 month ago"
    },
    {
      name: "Sarah Thompson",
      rating: 4,
      comment: "Very convenient service. I drop off my laundry in the morning and pick it up the next day all clean and folded. The café area is a nice touch too.",
      date: "3 weeks ago"
    },
    {
      name: "Michael Brown",
      rating: 5,
      comment: "I've been using this Launderette for over a year now. The staff are friendly and professional, and the quality of the cleaning is consistently excellent.",
      date: "2 weeks ago"
    },
    {
      name: "Jennifer Smith",
      rating: 5,
      comment: "The wash & fold service is a lifesaver for me. Everything comes back neatly folded and smelling fresh. Love that I can have a coffee while I wait.",
      date: "1 week ago"
    },
    {
      name: "Robert Taylor",
      rating: 4,
      comment: "Great service for bed linens and duvets. They came back looking brand new. Prices are reasonable for the quality you get.",
      date: "5 days ago"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const scrollAmount = 320; // Adjust based on card width + gap
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const container = scrollRef.current;
      setScrollPosition(container.scrollLeft);
      setMaxScroll(container.scrollWidth - container.clientWidth);
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial calculation
      setMaxScroll(container.scrollWidth - container.clientWidth);
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gray-light">
      <div className="container-custom max-w-6xl mx-auto px-8 md:px-12">
        <div 
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            titleRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What Our Customers Say</h2>
          <div className="h-1 w-20 bg-blue mx-auto mb-6"></div>
          <div className="flex items-center justify-center mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star 
                  key={index}
                  size={24}
                  className="text-blue fill-blue"
                />
              ))}
            </div>
            <span className="ml-2 font-semibold">4.8 out of 5</span>
          </div>
          <p className="text-gray-dark">
            Based on 120+ Google reviews from our satisfied customers. We pride ourselves on delivering exceptional service every time.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          {/* Scroll Controls */}
          <div className="absolute top-1/2 -left-5 lg:-left-8 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('left')}
              disabled={scrollPosition <= 0}
              className={`w-10 h-10 rounded-full bg-white shadow-elegant flex items-center justify-center transition-all ${
                scrollPosition <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-light'
              }`}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-5 lg:-right-8 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('right')}
              disabled={scrollPosition >= maxScroll}
              className={`w-10 h-10 rounded-full bg-white shadow-elegant flex items-center justify-center transition-all ${
                scrollPosition >= maxScroll ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-light'
              }`}
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Testimonials Carousel */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar px-2"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[280px] max-w-[280px] md:min-w-[320px] md:max-w-[320px] flex-shrink-0">
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
          
          {/* Scroll Position Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => {
              const isActive = 
                scrollPosition >= (index * maxScroll / Math.ceil(testimonials.length / 3)) && 
                scrollPosition < ((index + 1) * maxScroll / Math.ceil(testimonials.length / 3));
              
              return (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? 'bg-blue w-6' : 'bg-gray-medium opacity-40'
                  }`}
                  onClick={() => {
                    if (!scrollRef.current) return;
                    const targetScroll = (index * maxScroll / Math.ceil(testimonials.length / 3));
                    scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
                  }}
                />
              );
            })}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://maps.app.goo.gl/vRroxApT8qSnXkU87" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue text-blue rounded-lg hover:bg-blue-light transition-all duration-300"
          >
            <Star size={18} className="mr-2" />
            <span>Leave a Review on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
