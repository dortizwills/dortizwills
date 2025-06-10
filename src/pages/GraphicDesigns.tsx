
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Mail, RefreshCcw, Share2, FileText, Tent, ArrowRight } from 'lucide-react';

const MarketingDesigns = () => {
  const projects = [
    {
      title: "Data-Driven eBooks",
      description: "Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less",
      icon: <Book size={24} className="text-designer-red" />,
      path: "/graphic-designs/data-driven-ebooks",
      image: "/lovable-uploads/3132f8cd-a1d3-4166-8782-cee980f9043d.png"
    },
    {
      title: "Email Marketing Campaigns",
      description: "Email marketing campaigns for an audience that is not reading inclined",
      icon: <Mail size={24} className="text-designer-red" />,
      path: "/graphic-designs/email-marketing",
      image: "/lovable-uploads/3b9e02c1-446c-48b1-9c63-d01152ab0b67.png"
    },
    {
      title: "Refining Product Illustrations",
      description: "Rebranding assets for Series C funding that refined Shopmonkey's brand",
      icon: <RefreshCcw size={24} className="text-designer-red" />,
      path: "/graphic-designs/product-illustrations",
      image: "/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png"
    },
    {
      title: "Social Media Campaigns",
      description: "Social media and advertising campaigns that separated Shopmonkey in the Automotive software community",
      icon: <Share2 size={24} className="text-designer-red" />,
      path: "/graphic-designs/social-media",
      image: "/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png"
    },
    {
      title: "Case Studies",
      description: "Story telling case studies that encapsulate success stories from different automotive shops – from repair to custom builds",
      icon: <FileText size={24} className="text-designer-red" />,
      path: "/graphic-designs/case-studies",
      image: "/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png"
    },
    {
      title: "Event Designs",
      description: "Booth and event designs displaying Shopmonkey's friendly brand towards a skeptical crowd at SEMA – The largest tradeshow in the automotive sphere",
      icon: <Tent size={24} className="text-designer-red" />,
      path: "/graphic-designs/event-designs",
      image: "/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png"
    }
  ];

  return (
    <div className="sm:pl-[220px] pl-0">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">Visual Designs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.title} 
              to={project.path}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="aspect-video bg-designer-gray flex items-center justify-center overflow-hidden relative">
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

export default MarketingDesigns;
