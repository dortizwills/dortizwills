
import React from 'react';
import { Link } from 'react-router-dom';
import { FileCode, Tent, BookOpen, Smartphone, Briefcase } from 'lucide-react';

const ProductDesigns = () => {
  const projects = [
    {
      title: "Redesigning \"Quick Services\"",
      description: "Reduce checkout times to 2-3 minutes, because quick service transactions shouldn't take 10-15 minutes",
      icon: <FileCode className="text-designer-red" size={24} />,
      path: "/product-designs/quick-services",
      image: "/lovable-uploads/2fad7cda-021e-4386-83c6-7b65f6b7d71f.png"
    },
    {
      title: "Camping Made Easy",
      description: "Camping shouldn't be hard, or that's what this app helps users to think. Camp no matter your skill level",
      icon: <Tent className="text-designer-red" size={24} />,
      path: "/product-designs/camping-app",
      image: "/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png"
    },
    {
      title: "Gourmet Recipes Anytime",
      description: "Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are",
      icon: <BookOpen className="text-designer-red" size={24} />,
      path: "/product-designs/gourmet-recipes",
      image: "/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png"
    },
    {
      title: "Adhere+",
      description: "0 to 1 web and branding design for a Adhere Plus's flagship app",
      icon: <Briefcase className="text-designer-red" size={24} />,
      path: "/product-designs/adhere-plus"
    },
    {
      title: "Mobile App Explorations",
      description: "Cold selling mobile applications for startup companies. Delivering apps that deliver vision and brand exploration",
      icon: <Smartphone className="text-designer-red" size={24} />,
      path: "/product-designs/mobile-apps"
    }
  ];

  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">UXUI Designs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.title} 
              to={project.path}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="aspect-video bg-designer-gray flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  project.icon
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <span className="text-designer-red font-medium hover:underline">
                  View Case Study
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductDesigns;
