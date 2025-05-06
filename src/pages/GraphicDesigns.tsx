
import React from 'react';
import { Book, Mail, RefreshCcw, Share2, FileText, Tent } from 'lucide-react';

const GraphicDesigns = () => {
  const projects = [
    {
      title: "Data-Driven eBooks",
      description: "Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less",
      icon: <Book size={24} className="text-designer-red" />
    },
    {
      title: "Email Marketing Campaigns",
      description: "Email marketing campaigns for an audience that is not reading inclined",
      icon: <Mail size={24} className="text-designer-red" />
    },
    {
      title: "Rebranding Assets",
      description: "Rebranding assets for Series C funding that refined Shopmonkey's brand",
      icon: <RefreshCcw size={24} className="text-designer-red" />
    },
    {
      title: "Social Media Campaigns",
      description: "Social media and advertising campaigns that separated Shopmonkey in the Automotive software community",
      icon: <Share2 size={24} className="text-designer-red" />
    },
    {
      title: "Case Studies",
      description: "Story telling case studies that encapsulate success stories from different automotive shops – from repair to custom builds",
      icon: <FileText size={24} className="text-designer-red" />
    },
    {
      title: "Event Designs",
      description: "Booth and event designs displaying Shopmonkey's friendly brand towards a skeptical crowd at SEMA – The largest tradeshow in the automotive sphere",
      icon: <Tent size={24} className="text-designer-red" />
    }
  ];

  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-5xl font-bold mb-8">Graphic Designs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square bg-designer-gray flex items-center justify-center p-6 flex-col">
                {project.icon}
                <h3 className="mt-4 text-lg font-medium text-gray-700">{project.title}</h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
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
