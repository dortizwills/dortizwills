
import React from 'react';

const GraphicDesigns = () => {
  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">Graphic Designs</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div 
              key={item} 
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square bg-designer-gray flex items-center justify-center">
                <span className="text-gray-400">Design {item}</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-lg font-medium mb-1">Design Project {item}</h3>
                  <p className="text-sm">Branding / Illustration</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GraphicDesigns;
