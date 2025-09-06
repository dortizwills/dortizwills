
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import ImageModal from '../components/ImageModal';

const GrammyMuseum = () => {
  const relatedProjects = [
    {
      title: "Mobile Apps",
      description: "Collection of mobile app designs for various clients across different industries.",
      path: "/mobile-apps",
      image: "/lovable-uploads/05689ef5-c838-4296-bfa6-611beb9222ca.png"
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
        projectDetails={{
          timeline: "6 Weeks Total: 4 weeks for sitewide branding and design system, 2 additional weeks for final designs",
          responsibilities: "Branding, User flows, Responsive Design, Usability Testing, Prototyping, Project Management",
          results: "100% client satisfaction, Roadmap in place for development this year"
        }}
        showWipTag={true}
        tagType="WIP"
        relatedProjects={relatedProjects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
            
            <p className="mb-6">
              This project focuses on creating an engaging and interactive platform that brings the Grammy Museum MS's rich content to life online. The goal was to create an immersive, educational experience that would engage visitors of all ages and encourage donations and event bookings.
            </p>
            
            <div className="mb-6">
              <video 
                src="/lovable-uploads/Grammy Museum/Grammy Museum 2.mp4" 
                controls 
                className="w-full rounded-lg"
                poster="/lovable-uploads/Grammy Museum/Slide 1.png"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div className="space-y-6">
            <ImageModal 
              src="/lovable-uploads/Grammy Museum/Slide 1.png" 
              alt="Grammy Museum MS Redesign - Slide 1" 
            />
            <ImageModal 
              src="/lovable-uploads/Grammy Museum/Slide 2.png" 
              alt="Grammy Museum MS Redesign - Slide 2" 
            />
            <ImageModal 
              src="/lovable-uploads/Grammy Museum/Slide 3.png" 
              alt="Grammy Museum MS Redesign - Slide 3" 
            />
            <ImageModal 
              src="/lovable-uploads/Grammy Museum/Slide 4.png" 
              alt="Grammy Museum MS Redesign - Slide 4" 
            />
            <ImageModal 
              src="/lovable-uploads/Grammy Museum/Slide 5.png" 
              alt="Grammy Museum MS Redesign - Slide 5" 
            />
          </div>
        </div>
      </ProjectDetailLayout>
  );
};

export default GrammyMuseum;
