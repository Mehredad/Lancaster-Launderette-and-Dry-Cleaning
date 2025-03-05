
import { Coffee } from 'lucide-react';
import { useScrollReveal } from '../utils/animations';
import { useState } from 'react';

const Cafe = () => {
  const { ref: sectionRef, isRevealed: sectionRevealed } = useScrollReveal();
  const { ref: imageRef, isRevealed: imageRevealed } = useScrollReveal();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section id="cafe" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-blue-light opacity-30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div 
            ref={imageRef}
            className={`relative rounded-2xl overflow-hidden shadow-elegant transition-all duration-1000 ${
              imageRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Cozy cafe inside Lancaster Launderette" 
              className="w-full h-auto"
            />
            
            {/* Floating Coffee Icon */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-elegant animate-float">
              <Coffee size={32} className="text-blue" />
            </div>
          </div>
          
          {/* Text Content */}
          <div 
            ref={sectionRef}
            className={`flex flex-col space-y-6 transition-all duration-1000 delay-200 ${
              sectionRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="flex items-center">
              <div className="h-0.5 w-12 bg-blue mr-4"></div>
              <span className="text-blue font-medium text-sm uppercase tracking-wider">Our Coffee Shop</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Enjoy a Coffee or Sandwich While Laundrying
            </h2>
            
            <p className="text-gray-dark text-lg">
              Why wait elsewhere when you can enjoy freshly brewed coffee and delicious snacks in our comfortable café area? Our café offers a relaxing atmosphere with free WiFi to make your laundry experience enjoyable.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-light flex items-center justify-center">
                  <Coffee size={14} className="text-blue" />
                </div>
                <span>Premium coffee and tea selection</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-light flex items-center justify-center">
                  <Coffee size={14} className="text-blue" />
                </div>
                <span>Fresh sandwiches and pastries</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-light flex items-center justify-center">
                  <Coffee size={14} className="text-blue" />
                </div>
                <span>Comfortable seating with power outlets</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-light flex items-center justify-center">
                  <Coffee size={14} className="text-blue" />
                </div>
                <span>Free high-speed WiFi</span>
              </li>
            </ul>
            
            <button 
              onClick={toggleMenu}
              className="mt-4 px-8 py-4 bg-blue text-white rounded-lg font-medium hover:bg-blue-dark transition-all duration-300 self-start hover:translate-y-[-4px] hover:shadow-lg"
            >
              View Our Menu
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu Modal */}
      {showMenu && (
        <div className="fixed inset-0 bg-charcoal/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-elegant max-w-2xl w-full max-h-[80vh] overflow-auto animate-scale">
            <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Café Menu</h3>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-blue">Hot Drinks</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Espresso</span>
                    <span className="font-medium">£2.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Americano</span>
                    <span className="font-medium">£2.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cappuccino</span>
                    <span className="font-medium">£2.80</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Latte</span>
                    <span className="font-medium">£2.80</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hot Chocolate</span>
                    <span className="font-medium">£3.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tea (various)</span>
                    <span className="font-medium">£2.30</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-blue">Cold Drinks</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Iced Coffee</span>
                    <span className="font-medium">£3.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Iced Tea</span>
                    <span className="font-medium">£2.80</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mineral Water</span>
                    <span className="font-medium">£1.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Soft Drinks</span>
                    <span className="font-medium">£1.80</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue">Food</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Croissant</span>
                    <span className="font-medium">£2.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pain au Chocolat</span>
                    <span className="font-medium">£2.70</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cheese & Ham Sandwich</span>
                    <span className="font-medium">£4.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chicken & Avocado Sandwich</span>
                    <span className="font-medium">£4.80</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vegetarian Sandwich</span>
                    <span className="font-medium">£4.30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cake Slice (various)</span>
                    <span className="font-medium">£3.50</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t">
              <p className="text-sm text-gray-medium italic">
                All items are prepared fresh daily. Please ask our staff about allergen information.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cafe;
