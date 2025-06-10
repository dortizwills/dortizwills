
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

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
        title="Non-Profit Redesign" 
        backTo="/product-designs"
        backLabel="Back to UXUI Designs"
        headerImage="/lovable-uploads/e9d967b1-2ea7-4ffe-9768-e4c16c1de3ed.png"
        projectDetails={{
          timeline: "In Progress",
          responsibilities: "UX/UI Design, Interactive Experience Design, Content Strategy",
          results: "Ongoing project with positive client feedback on initial deliverables"
        }}
        relatedProjects={relatedProjects}
      >
        <div>
          <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
          <h3 className="text-xl font-display font-medium mb-3">Challenge</h3>
          <h3 className="text-xl font-display font-medium mb-3">Goals</h3>
          
          <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Design Approach</h2>
          <h3 className="text-xl font-display font-medium mb-3">User Research</h3>
          <h3 className="text-xl font-display font-medium mb-3">Content Strategy</h3>
          <h3 className="text-xl font-display font-medium mb-3">Interactive Elements</h3>
          
          <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Current Status</h2>
          <h3 className="text-xl font-display font-medium mb-3">Design Phase</h3>
          <h3 className="text-xl font-display font-medium mb-3">Next Steps</h3>
        </div>
        
        <div>
          <p className="mb-6">
            Redesigning a non-profit organization's digital experience to showcase their mission and educational content. This project focuses on creating an engaging and interactive platform that brings the organization's rich content to life online.
          </p>
          
          <p className="mb-6">
            The non-profit organization needed a way to extend their physical presence into the digital realm, making their exhibits and educational materials accessible to supporters worldwide. The goal was to create an immersive, educational experience that would engage visitors of all ages.
          </p>
          
          <div className="aspect-video bg-designer-gray rounded-lg flex items-center justify-center mb-8">
            <p className="text-gray-500">Project image coming soon</p>
          </div>
          
          <p className="mb-6">
            We began by researching how various audiences interact with non-profit content online. We conducted interviews with supporters, educators, and community members to understand their expectations for a digital organization experience.
          </p>
          
          <p className="mb-6">
            Working closely with organizational stakeholders, we developed a content strategy that balances educational value with engagement. Each section was structured to tell a compelling story while providing in-depth information for those who want to learn more.
          </p>
          
          <div className="aspect-video bg-designer-gray rounded-lg flex items-center justify-center mb-8">
            <p className="text-gray-500">Design mockups coming soon</p>
          </div>
          
          <p className="mb-6">
            Interactive elements were a key focus of the design, allowing users to explore content and experiences in an engaging way. We created prototypes for virtual experiences and timeline-based exploration of the organization's impact.
          </p>
          
          <p className="mb-6">
            The project is currently in the design phase, with wireframes and initial UI concepts approved by stakeholders. We're now refining the visual design and preparing interactive prototypes for user testing.
          </p>
          
          <p className="mb-6">
            Next steps include user testing with diverse audiences, refinement based on feedback, and preparation for development handoff. The project is on track for a phased launch beginning next quarter.
          </p>
        </div>
      </ProjectDetailLayout>
  );
};

export default GrammyMuseum;
