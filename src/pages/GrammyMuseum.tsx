
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const GrammyMuseum = () => {
  const relatedProjects = [
    {
      title: "Mobile Apps",
      description: "Collection of mobile app designs for various clients across different industries.",
      path: "/mobile-apps",
      image: "/lovable-uploads/01e339c9-3a76-4ecb-9a6b-5e9aeb6592a7.png"
    },
    {
      title: "Adhere Plus",
      description: "0 to 1 web and branding design for Adhere Plus's flagship app.",
      path: "/product-designs/adhere-plus",
      image: "/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png"
    }
  ];

  return (
      <ProjectDetailLayout 
        title="Grammy Museum MS Redesign" 
        backTo="/product-designs"
        backLabel="Back to UXUI Designs"
        headerImage="/lovable-uploads/e9d967b1-2ea7-4ffe-9768-e4c16c1de3ed.png"
        showWipTag={false}
        relatedProjects={relatedProjects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-display font-semibold">Project Details</h2>
                  <span className="px-3 py-1 rounded text-sm font-medium bg-green-500 text-white">
                    NEW
                  </span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-3">Timeline</h3>
                    <p className="text-sm text-muted-foreground">6 Weeks Total: 4 weeks for sitewide branding and design system, 2 additional weeks for final designs</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-3">Responsibilities</h3>
                    <p className="text-sm text-muted-foreground">Branding, User flows, Responsive Design, Usability Testing, Prototyping, Project Management</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-3">Project Overview</h3>
                    <p className="text-sm text-muted-foreground">
                      This project focuses on creating an engaging and interactive platform that brings the Grammy Museum MS's rich content to life online. The goal was to create an immersive, educational experience that would engage visitors of all ages and encourage donations and event bookings.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-3">Results</h3>
                    <p className="text-sm text-muted-foreground">100% client satisfaction, ~15% boost in ticket sales since July, ~30% increase on Demo Page views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <video 
              src="/lovable-uploads/Grammy Museum/Grammy Museum 2.mp4" 
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-lg border border-[#F1F1FA]"
            >
              Your browser does not support the video tag.
            </video>
            
            <img 
              src="/lovable-uploads/Grammy Museum/Slide 2.png" 
              alt="Grammy Museum MS Redesign - Slide 2" 
              className="w-full rounded-lg border border-[#F1F1FA]"
            />
            <img 
              src="/lovable-uploads/Grammy Museum/Slide 3.png" 
              alt="Grammy Museum MS Redesign - Slide 3" 
              className="w-full rounded-lg border border-[#F1F1FA]"
            />
            <img 
              src="/lovable-uploads/Grammy Museum/Slide 4.png" 
              alt="Grammy Museum MS Redesign - Slide 4" 
              className="w-full rounded-lg border border-[#F1F1FA]"
            />
            <img 
              src="/lovable-uploads/Grammy Museum/Slide 5.png" 
              alt="Grammy Museum MS Redesign - Slide 5" 
              className="w-full rounded-lg border border-[#F1F1FA]"
            />
          </div>
        </div>
      </ProjectDetailLayout>
  );
};

export default GrammyMuseum;
