
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const MobileApps = () => {
  const relatedProjects = [
    {
      title: "Adhere Plus",
      description: "0 to 1 web and branding design for Adhere Plus's flagship app.",
      path: "/product-designs/adhere-plus",
      image: "/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png"
    },
    {
      title: "Non-Profit Redesign",
      description: "Redesigning the Non-Profit's digital experience to showcase history and education.",
      path: "/product-designs/grammy-museum",
      image: "/lovable-uploads/e9d967b1-2ea7-4ffe-9768-e4c16c1de3ed.png"
    }
  ];

  return (
    <ProjectDetailLayout 
      title="Mobile App Explorations" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
      headerImage="/lovable-uploads/05689ef5-c838-4296-bfa6-611beb9222ca.png"
      projectDetails={{
        timeline: "4 Weeks Total: 1-3 weeks per app, 2 apps",
        responsibilities: "Branding, User flows, Mobile iOS Design, Prototyping, User Testing",
        results: "Securing future client partnerships following project funding"
      }}
      showWipTag={true}
      relatedProjects={relatedProjects}
    >
      <div className="space-y-12">
        {/* Overview Section */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-display font-semibold">Overview</h2>
          </div>
          <div className="col-span-2">
            <p className="text-gray-700 leading-relaxed mb-6">
              Collection of mobile application designs created for startup companies. These projects focused on delivering apps that effectively communicate the client's vision while exploring innovative brand directions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Each mobile app project begins with extensive user research and competitive analysis to understand the target market and identify opportunities for innovation.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-display font-semibold">My Process</h2>
          </div>
          <div className="col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-medium mb-3">Research & Discovery</h3>
                <p className="text-gray-700 leading-relaxed">
                  I start by understanding the target audience, their pain points, and the competitive landscape. This research phase helps identify unique opportunities and ensures the app will solve real user problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-medium mb-3">Wireframing & Prototyping</h3>
                <p className="text-gray-700 leading-relaxed">
                  Multiple wireframing iterations are created and tested with representative users to ensure optimal flow and functionality. Interactive prototypes help refine the user journey before moving into final visual design.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-medium mb-3">Visual Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  The final designs incorporate custom iconography, typography, and color schemes that reflect each brand's unique personality while maintaining usability best practices across different device sizes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-display font-semibold">Status</h2>
          </div>
          <div className="col-span-2">
            <p className="text-gray-700 leading-relaxed mb-4">
              This portfolio section is currently being expanded with detailed case studies from my mobile app design work.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>More content coming soon!</strong> Check back for in-depth looks at specific mobile app projects, including user research findings, design iterations, and final outcomes.
            </p>
          </div>
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default MobileApps;
