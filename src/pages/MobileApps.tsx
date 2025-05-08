
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const MobileApps = () => {
  const relatedProjects = [
    {
      title: "Adhere Plus",
      description: "0 to 1 web and branding design for Adhere Plus's flagship app.",
      path: "/product-designs/adhere-plus",
      image: "/placeholder.svg"
    },
    {
      title: "Grammy Museum",
      description: "Redesigning the Grammy Museum's digital experience to showcase music history and education.",
      path: "/product-designs/grammy-museum",
      image: "/placeholder.svg"
    }
  ];

  return (
    <ProjectDetailLayout 
      title="Mobile App Explorations" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
      projectDetails={{
        timeline: "Various",
        responsibilities: "Mobile UI Design, Prototyping, User Testing",
        results: "Multiple successful launches across different platforms"
      }}
      relatedProjects={relatedProjects}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <p className="mb-6">
          Collection of mobile application designs created for startup companies. These projects focused on delivering apps that effectively communicate the client's vision while exploring innovative brand directions.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mt-8 mb-4">Design Process</h2>
        <h3 className="text-xl font-display font-medium mb-3">Research & Discovery</h3>
        <h3 className="text-xl font-display font-medium mb-3">Wireframing & Prototyping</h3>
        <h3 className="text-xl font-display font-medium mb-3">Visual Design</h3>
      </div>
      
      <div>
        <p className="mb-6">
          These mobile applications were designed with a focus on user experience, intuitive navigation, and visually appealing interfaces that align with each client's brand identity.
        </p>
        
        <div className="aspect-video bg-designer-gray rounded-lg flex items-center justify-center mb-8">
          <p className="text-gray-500">Project image coming soon</p>
        </div>
        
        <p className="mb-6">
          Each project began with extensive research into the target audience and competitive landscape. This allowed us to identify opportunities for innovation and create designs that would stand out in crowded app stores.
        </p>
        
        <p className="mb-6">
          Multiple wireframing iterations were created and tested with representative users to ensure optimal flow and functionality. Interactive prototypes helped refine the user journey before moving into final visual design.
        </p>
        
        <p className="mb-6">
          The final designs incorporated custom iconography, typography, and color schemes that reflected each brand's unique personality while maintaining usability best practices across different device sizes.
        </p>
      </div>
    </ProjectDetailLayout>
  );
};

export default MobileApps;
