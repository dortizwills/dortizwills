
import React from 'react';
import { Link } from 'react-router-dom';
import QuickLinkCard from '../components/QuickLinkCard';

const ProductDesigns = () => {
  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-lg text-gray-600 mb-2">My Work</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">UX/UI Designs</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore my user experience and interface design projects. Each one represents a unique challenge and solution in creating meaningful digital experiences.
          </p>
        </div>
        
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold mb-6">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              to="/product-designs/quick-services"
              className="group block"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="/lovable-uploads/2fad7cda-021e-4386-83c6-7b65f6b7d71f.png" 
                  alt="Quick Services" 
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl font-medium mb-1 group-hover:text-designer-red transition-colors">
                Quick Services
              </h3>
              <p className="text-gray-600">
                Reduce checkout times to 2-3 minutes for automotive shops
              </p>
            </Link>
            
            <Link 
              to="/product-designs/camping-app"
              className="group block"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png" 
                  alt="Camping Made Easy" 
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl font-medium mb-1 group-hover:text-designer-red transition-colors">
                Camping Made Easy
              </h3>
              <p className="text-gray-600">
                Making the outdoors accessible for any experience level
              </p>
            </Link>
            
            <Link 
              to="/product-designs/gourmet-recipes"
              className="group block"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" 
                  alt="Gourmet Recipes" 
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl font-medium mb-1 group-hover:text-designer-red transition-colors">
                Gourmet Recipes
              </h3>
              <p className="text-gray-600">
                Forgetting a recipe shouldn't stop you from getting gourmet recipes
              </p>
            </Link>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold mb-6">In Progress</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/product-designs/adhere-plus"
              className="group block"
            >
              <div className="overflow-hidden rounded-lg mb-4 relative">
                <img 
                  src="/lovable-uploads/Adhere++Hero.png" 
                  alt="Adhere+" 
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  In Progress
                </div>
              </div>
              <h3 className="font-display text-xl font-medium mb-1 group-hover:text-designer-red transition-colors">
                Adhere+
              </h3>
              <p className="text-gray-600">
                0 to 1 web and branding design for a Adhere Plus's flagship app
              </p>
            </Link>
            
            <Link 
              to="/product-designs/grammy-museum"
              className="group block"
            >
              <div className="overflow-hidden rounded-lg mb-4 relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Grammy Museum" 
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  In Progress
                </div>
              </div>
              <h3 className="font-display text-xl font-medium mb-1 group-hover:text-designer-red transition-colors">
                Grammy Museum
              </h3>
              <p className="text-gray-600">
                Redesigning the Grammy Museum's digital experience
              </p>
            </Link>
          </div>
        </section>
        
        <section>
          <h2 className="font-display text-2xl font-semibold mb-6">Additional Projects</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickLinkCard 
              title="Mobile Apps"
              description="Various mobile app design projects"
              href="/product-designs/mobile-apps"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDesigns;
