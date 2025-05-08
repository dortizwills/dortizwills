
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
      image: "/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png"
    }
  ];
  
  return (
    <ProjectDetailLayout 
      title="Case Studies" 
      backTo="/graphic-designs"
      backLabel="Back to Graphic Designs"
      headerImage="/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png"
      projectDetails={{
        timeline: "Ongoing, 18-month project",
        responsibilities: "Research, Interviewing, Narrative Development, Design, Illustration",
        results: "65% of sales team reported using case studies as critical closing tools"
      }}
      relatedProjects={relatedProjects}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <h3 className="text-xl font-display font-medium mb-3">Sales Challenge</h3>
        <h3 className="text-xl font-display font-medium mb-3">Industry Diversity</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">The Storytelling Process</h2>
        <h3 className="text-xl font-display font-medium mb-3">Research & Interviews</h3>
        <h3 className="text-xl font-display font-medium mb-3">Narrative Structure</h3>
        <h3 className="text-xl font-display font-medium mb-3">Design System</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Results & Impact</h2>
        <h3 className="text-xl font-display font-medium mb-3">Sales Enablement</h3>
        <h3 className="text-xl font-display font-medium mb-3">Customer Validation</h3>
        <h3 className="text-xl font-display font-medium mb-3">Marketing Asset</h3>
      </div>
      
      <div>
        <p className="mb-6">
          Shopmonkey's sales team struggled to convince prospects that the software would work for their specific shop setup. Without relatable examples, potential customers couldn't visualize how the product would solve their unique challenges.
        </p>
        
        <p className="mb-6">
          The automotive repair industry includes diverse business types, from general repair to specialized services like custom builds, tire shops, and dealership service departments. Each has unique workflows, challenges, and needs that require different software configurations.
        </p>
        
        <img src="/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png" alt="Case Study Overview" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          We developed a systematic approach to identify and document customer success stories. This involved data analysis to find shops with exceptional metrics, followed by in-depth interviews with owners, managers, and technicians to understand their transformation journey.
        </p>
        
        <p className="mb-6">
          Rather than focusing solely on features and benefits, we created a consistent narrative arc for each case study: the shop's history and unique character, challenges faced before Shopmonkey, implementation experience, and measurable results with emotional impact.
        </p>
        
        <img src="/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png" alt="Narrative Examples" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          We created a flexible design system that maintained brand consistency while allowing for customization based on each shop's personality. We paired professional photography with data visualizations to balance emotional appeal with concrete results.
        </p>
        
        <p className="mb-6">
          The case studies became critical assets in the sales process, with 65% of the sales team reporting they regularly use them to overcome objections and close deals. The average time to close for deals where case studies were shared decreased by 18 days.
        </p>
        
        <p className="mb-6">
          Featured shops reported significant benefits from participating, including local publicity, increased credibility, and networking opportunities with other shop owners. This created a pipeline of customers eager to be featured in future case studies.
        </p>
        
        <img src="/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png" alt="Customer Feedback" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          The case studies generated considerable organic engagement across marketing channels. When repurposed for social media, case study content achieved 3.2x higher engagement than other content types. The library of stories became Shopmonkey's most valuable content asset.
        </p>
      </div>
    </ProjectDetailLayout>
  );
};

export default CaseStudies;
