
import { Check } from 'lucide-react';
import { useScrollReveal } from '../utils/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  selfServicePrice?: string;
  time: string;
  index: number;
}

const ServiceCard = ({ title, description, features, price, selfServicePrice, time, index }: ServiceCardProps) => {
  const { ref, isRevealed } = useScrollReveal();
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-xl shadow-card hover-lift p-6 transition-all duration-500 delay-${index * 100} ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="h-full flex flex-col">
        <h3 className="text-xl font-semibold text-charcoal mb-2">{title}</h3>
        <p className="text-gray-medium mb-6">{description}</p>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <div className="mr-2 mt-1 bg-blue-light rounded-full p-1">
                  <Check size={14} className="text-blue" />
                </div>
                <span className="text-gray-dark">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t border-gray-light pt-4 mt-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-medium">Drop-off price:</span>
            <span className="font-semibold text-blue text-lg">{price}</span>
          </div>
          
          {selfServicePrice && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-medium">Self-service:</span>
              <span className="font-semibold text-charcoal">{selfServicePrice}</span>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-medium">Time:</span>
            <span className="font-semibold text-charcoal">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  
  const services = [
    {
      title: "Laundry Service",
      description: "Complete washing and drying service for all your everyday clothes.",
      features: [
        "Up to 10 lb/ 4.5 kg per load",
        "Gentle washing cycles",
        "Suitable for all regular fabrics",
        "Folded and packaged"
      ],
      price: "£15 per load",
      selfServicePrice: "£7 per load",
      time: "24 hours"
    },
    {
      title: "Wash & Fold",
      description: "We wash, dry and fold your clothes neatly for easy storage.",
      features: [
        "Up to 10 lb/ 4.5 kg per load",
        "Organized by type and color",
        "Stain treatment included",
        "Ready for drawer storage"
      ],
      price: "£16 per load",
      selfServicePrice: "£7 per load",
      time: "24 hours"
    },
    {
      title: "Wash & Iron",
      description: "Complete service including washing, drying, and professional ironing.",
      features: [
        "Up to 10 lb/ 4.5 kg per load",
        "Steam ironing",
        "Crease removal",
        "Hung or folded as preferred"
      ],
      price: "£22 per load",
      time: "48 hours"
    },
    {
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics and formal wear.",
      features: [
        "Suitable for sensitive fabrics",
        "Stain removal specialists",
        "Eco-friendly cleaning agents",
        "Pressed and hung"
      ],
      price: "From £8 per item",
      time: "3-5 days"
    },
    {
      title: "Shirt Service",
      description: "Professional cleaning and pressing for all types of shirts.",
      features: [
        "Hand-finished collars and cuffs",
        "Starch options available",
        "Packaged on hangers or folded",
        "Business and casual shirts"
      ],
      price: "£4.50 per shirt",
      time: "48 hours"
    },
    {
      title: "Duvet Service",
      description: "Deep cleaning for all types and sizes of duvets and comforters.",
      features: [
        "All sizes from Single to Super King",
        "Dust mite removal",
        "Feather and synthetic fillings",
        "Fresh scented"
      ],
      price: "From £20",
      time: "3-5 days"
    },
    {
      title: "Bed Linen Cleaning",
      description: "Refresh your sheets, pillowcases, and other bed linens.",
      features: [
        "High-temperature washing",
        "Stain treatment",
        "Crisp ironing",
        "Neatly folded"
      ],
      price: "£18 per set",
      time: "48 hours"
    },
    {
      title: "Leather Cleaning",
      description: "Specialist cleaning for leather jackets, skirts and trousers.",
      features: [
        "Gentle cleaning process",
        "Conditioning treatment",
        "Color restoration",
        "Protection application"
      ],
      price: "From £35",
      time: "7-10 days"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-light">
      <div className="container-custom">
        <div 
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            titleRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Premium Laundry Services</h2>
          <div className="h-1 w-20 bg-blue mx-auto mb-6"></div>
          <p className="text-gray-dark">
            We offer a complete range of laundry and dry cleaning services to keep your clothes and fabrics looking fresh and pristine. Each service is delivered with care and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              features={service.features}
              price={service.price}
              selfServicePrice={service.selfServicePrice}
              time={service.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
