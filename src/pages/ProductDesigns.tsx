
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductDesigns = () => {
  const projects = [
    {
      title: "Quick Services",
      description: "Reduce checkout times to 2-3 minutes for automotive shops.",
      path: "/product-designs/quick-services",
      image: "/lovable-uploads/2fad7cda-021e-4386-83c6-7b65f6b7d71f.png"
    },
    {
      title: "Camping Made Easy",
      description: "Camping shouldn't be hard, or that's what this app helps users to think. Camp no matter your skill level.",
      path: "/product-designs/camping-app",
      image: "/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png"
    },
    {
      title: "Gourmet Recipes",
      description: "Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are.",
      path: "/product-designs/gourmet-recipes",
      image: "/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png"
    },
    {
      title: "Adhere+",
      description: "0 to 1 web and branding design for a Adhere Plus's flagship app.",
      path: "/product-designs/adhere-plus",
      image: "/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png"
    },
    {
      title: "Non-Profit Redesign",
      description: "Redesigning the Non-Profit's digital experience to showcase history and education.",
      path: "/product-designs/grammy-museum",
      image: "/lovable-uploads/e9d967b1-2ea7-4ffe-9768-e4c16c1de3ed.png",
      status: "WIP"
    },
    {
      title: "Mobile App Portfolio",
      description: "View a collection of my mobile app design work across various industries and platforms.",
      path: "/mobile-apps",
      image: "/lovable-uploads/05689ef5-c838-4296-bfa6-611beb9222ca.png",
      status: "WIP"
    }
  ];

  return (
    <div className="sm:pl-[220px] pl-0">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">UXUI Designs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.title} 
              to={project.path}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="aspect-video bg-designer-gray flex items-center justify-center overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-medium">{project.title}</h3>
                  {project.status && (
                    <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-designer-red font-medium">
                  <span className="mr-2">View Project</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductDesigns;
