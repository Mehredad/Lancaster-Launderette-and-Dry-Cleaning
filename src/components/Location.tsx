
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../utils/animations';

const Location = () => {
  const { ref: infoRef, isRevealed: infoRevealed } = useScrollReveal();
  const { ref: mapRef, isRevealed: mapRevealed } = useScrollReveal();
  
  const openingHours = [
    { day: 'Monday - Friday', hours: '7:30 AM - 9:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 5:00 PM' }
  ];

  return (
    <section id="location" className="section-padding bg-gray-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Find Us</h2>
          <div className="h-1 w-20 bg-blue mx-auto mb-6"></div>
          <p className="text-gray-dark">
            Conveniently located in the heart of Lancaster. Drop by for your laundry needs or just to enjoy a cup of coffee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div 
            ref={infoRef}
            className={`transition-all duration-700 ${
              infoRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
              <div className="space-y-8">
                {/* Address */}
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-blue-light rounded-full flex items-center justify-center">
                      <MapPin size={20} className="text-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-dark">
                      39 Dalton Square<br />
                      Lancaster LA1 1PP<br />
                      United Kingdom
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/vRroxApT8qSnXkU87" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-blue hover:text-blue-dark transition-colors"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
                
                {/* Opening Hours */}
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-blue-light rounded-full flex items-center justify-center">
                      <Clock size={20} className="text-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                    <table className="w-full">
                      <tbody>
                        {openingHours.map((item, index) => (
                          <tr key={index} className="border-b last:border-b-0 border-gray-light">
                            <td className="py-3 text-gray-dark">{item.day}</td>
                            <td className="py-3 font-medium text-right">{item.hours}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Contact */}
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-blue-light rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                    <p className="flex items-center text-gray-dark mb-1">
                      <span className="font-medium mr-2">Phone:</span>
                      <a href="tel:+441524596401" className="hover:text-blue transition-colors">01524 596401</a>
                    </p>
                    <p className="flex items-center text-gray-dark">
                      <span className="font-medium mr-2">Email:</span>
                      <a href="mailto:info@lancasterlaunderette.co.uk" className="hover:text-blue transition-colors">info@lancasterlaunderette.co.uk</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div 
            ref={mapRef}
            className={`transition-all duration-700 ${
              mapRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="rounded-xl overflow-hidden shadow-card h-full min-h-[400px] bg-white p-2">
              <iframe 
                title="Lancaster Launderette & Dry Cleaning Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.7963118139837!2d-2.8026941499307893!3d54.047843403868766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b9a307cc18883%3A0x1ee78861e56b55e5!2sLancaster%20Launderette%20%26%20Dry%20Cleaning!5e0!3m2!1sen!2suk!4v1713358193018!5m2!1sen!2suk" 
                className="w-full h-full min-h-[400px] rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
