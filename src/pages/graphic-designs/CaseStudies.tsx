
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const CaseStudies = () => {
  const relatedProjects = [
    {
      title: "Social Media Campaigns",
      description: "Social media and advertising campaigns that separated Shopmonkey in the Automotive software community.",
      path: "/graphic-designs/social-media",
      image: "/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png"
    },
    {
      title: "Data-Driven eBooks",
      description: "Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less.",
      path: "/graphic-designs/data-driven-ebooks",
      image: "/lovable-uploads/5e6af2ef-afda-4354-a360-56b751c12cff.png"
    }
  ];
  
  return (
    <ProjectDetailLayout 
      title="Case Studies" 
      backTo="/graphic-designs"
      backLabel="Back to Marketing Designs"
      headerImage="/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png"
      projectDetails={{
        timeline: "3 weeks to build the template, 1wk per Case Study",
        responsibilities: "Research, Design Templates, Illustration",
        results: "35% of sales team reported using case studies as critical closing tools"
      }}
      relatedProjects={relatedProjects}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <h2 className="text-2xl font-display font-semibold mb-4">Project Process</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Background</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            Shopmonkey's sales team struggled to convince prospects that the software would work for their specific shop setup. Without relatable examples, potential customers couldn't visualize how the product would solve their unique challenges.
          </p>
          <p>
            The automotive repair industry includes diverse business types, from general repair to specialized services like custom builds, tire shops, and dealership service departments. Each has unique workflows, challenges, and needs that require different software configurations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Creating a Design System</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            We created a flexible design system that maintained brand consistency while allowing for customization based on each shop's personality. We paired professional photography with data visualizations to balance emotional appeal with concrete results.
          </p>
        </div>
      </div>
     
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Sales Enablement & Customer Validation</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
          The case studies became critical assets in the sales process, with 35% of the sales team reporting they regularly use them to overcome objections and close deals. The average time to close for deals where case studies were shared decreased by 18 days.
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default CaseStudies;
