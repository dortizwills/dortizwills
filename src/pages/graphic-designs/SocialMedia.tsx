
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const SocialMedia = () => {
  const relatedProjects = [
    {
      title: "Email Marketing Campaigns",
      description: "Email marketing campaigns for an audience that is not reading inclined.",
      path: "/graphic-designs/email-marketing",
      image: "/lovable-uploads/9c0fc049-3139-426d-b3b9-b5e5f05219ac.png"
    },
    {
      title: "Case Studies",
      description: "Story telling case studies that encapsulate success stories from different automotive shops.",
      path: "/graphic-designs/case-studies",
      image: "/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png"
    }
  ];
  
  return (
    <ProjectDetailLayout 
      title="Social Media Campaigns" 
      backTo="/graphic-designs"
      backLabel="Back to Marketing Designs"
      headerImage="/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png"
      projectDetails={{
        timeline: "Ongoing, 12-month campaign",
        responsibilities: "Social Strategy, Content Creation, Visual Design, Analytics, Paid Social Management",
        results: "284% increase in engagement, 5.3x ROI on paid campaigns, 35% increase in brand mentions"
      }}
      relatedProjects={relatedProjects}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Campaign Strategy</h2>
        <h3 className="text-xl font-display font-medium mb-3">Industry Challenge</h3>
        <h3 className="text-xl font-display font-medium mb-3">Education vs. Promotion</h3>

        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Results & Impact</h2>
        <h3 className="text-xl font-display font-medium mb-3">Engagement Metrics</h3>
        <h3 className="text-xl font-display font-medium mb-3">Business Outcomes</h3>

      </div>
      
      <div>
        <p className="mb-6">
          The automotive software industry is historically resistant to new technology solutions, with shops often relying on legacy systems or paper processes. Shopmonkey needed to differentiate itself in a market where shop owners were skeptical of software claims and wary of complex implementations.
        </p>
        
        <p className="mb-6">
          Rather than focusing solely on product promotion, we created a strategy centered on building a community of progressive shop owners. We positioned Shopmonkey as an advocate for modernization in the industry, starting conversations about efficiency and customer experience rather than just software.
        </p>
        
        <img src="/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png" alt="Social Media Campaign" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          Each month, we featured a customer shop across our channels, highlighting their unique story and how they've modernized their business. These spotlights became our highest-performing content, creating a virtuous cycle where shops competed to be featured.
        </p>
        
      </div>
    </ProjectDetailLayout>
  );
};

export default SocialMedia;
