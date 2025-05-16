
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const AdherePlus = () => {
  const relatedProjects = [
    {
      title: "Gourmet Recipes",
      description: "Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are.",
      path: "/product-designs/gourmet-recipes",
      image: "/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png"
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
      title="Adhere+" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
      headerImage="/lovable-uploads/29069577-2147-4695-ad1d-2d8a46ff7653.png"
      projectDetails={{
        timeline: "3 Months",
        responsibilities: "Branding, UX/UI Design, Design System Creation",
        results: "100% client satisfaction, on-time delivery"
      }}
      relatedProjects={relatedProjects}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <h3 className="text-xl font-display font-medium mb-3">Challenge</h3>
        <h3 className="text-xl font-display font-medium mb-3">Approach</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Design Process</h2>
        <h3 className="text-xl font-display font-medium mb-3">Research</h3>
        <h3 className="text-xl font-display font-medium mb-3">User Testing</h3>
        <h3 className="text-xl font-display font-medium mb-3">Final Design</h3>
      </div>
      
      <div>
        <p className="mb-6">
          0 to 1 web and branding design for Adhere Plus's flagship app. This project involved creating a complete brand identity and user experience for a new product in the market.
        </p>
        
        <p className="mb-6">
          The client needed a comprehensive design solution that would help establish their brand while delivering an intuitive user experience for their innovative product.
        </p>
        
        <div className="aspect-video bg-designer-gray rounded-lg flex items-center justify-center mb-8">
          <p className="text-gray-500">Project image coming soon</p>
        </div>
        
        <p className="mb-6">
          Our research began with a deep dive into the competitive landscape and understanding the target audience's needs. We conducted interviews with potential users to gather insights that would inform our design decisions.
        </p>
        
        <p className="mb-6">
          We created multiple prototypes and tested them with real users, iterating based on their feedback. This ensured that the final product would meet user expectations and business goals.
        </p>
        
        <div className="aspect-video bg-designer-gray rounded-lg flex items-center justify-center mb-8">
          <p className="text-gray-500">Design process image coming soon</p>
        </div>
        
        <p className="mb-6">
          The final design included a comprehensive design system, brand guidelines, and fully functional UI components. The client was extremely satisfied with the results and the product is currently in development.
        </p>
      </div>
    </ProjectDetailLayout>
  );
};

export default AdherePlus;
