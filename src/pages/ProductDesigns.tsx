
import React from 'react';

const ProductDesigns = () => {
  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">Product Designs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="aspect-video bg-designer-gray flex items-center justify-center">
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium mb-2">Project Title {item}</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of this product design project showcasing the problem solved and approach taken.
                </p>
                <a 
                  href={`/product-designs/project-${item}`} 
                  className="text-designer-red font-medium hover:underline"
                >
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductDesigns;
