
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
          
          <p className="mb-6">
            This project focuses on creating an engaging and interactive platform that brings the organization's rich content to life online. The goal was to create an immersive, educational experience that would engage visitors of all ages and encourage donations and event bookings.
          </p>
          
          <p className="mb-6">
            <strong>More content coming soon!</strong> Check back for in-depth looks at this specific project's design process, including brand exploration, responsive designs, accessibility iterations, and final designs.
          </p>
        </div>
      </ProjectDetailLayout>
  );
};

export default GrammyMuseum;
