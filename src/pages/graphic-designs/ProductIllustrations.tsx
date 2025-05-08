
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const ProductIllustrations = () => {
  const relatedProjects = [
    {
      title: "Case Studies",
      description: "Story telling case studies that encapsulate success stories from different automotive shops.",
      path: "/graphic-designs/case-studies",
      image: "/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png"
    },
    {
      title: "Event Designs",
      description: "Booth and event designs displaying Shopmonkey's friendly brand towards a skeptical crowd at SEMA.",
      path: "/graphic-designs/event-designs",
      image: "/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png"
    }
  ];
  
  return (
    <ProjectDetailLayout 
      title="Refining Product Illustrations" 
      backTo="/graphic-designs"
      backLabel="Back to Marketing Designs"
      headerImage="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png"
      projectDetails={{
        timeline: "6 Months",
        responsibilities: "Illustration System Design, Visual Design, Brand Development, Style Guide Creation",
        results: "Contributed to successful Series C funding, with investors specifically citing clear product communication"
      }}
      relatedProjects={relatedProjects}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <h3 className="text-xl font-display font-medium mb-3">Brand Evolution</h3>
        <h3 className="text-xl font-display font-medium mb-3">Stakeholder Requirements</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Design Process</h2>
        <h3 className="text-xl font-display font-medium mb-3">Illustration System</h3>
        <h3 className="text-xl font-display font-medium mb-3">Character Design</h3>
        <h3 className="text-xl font-display font-medium mb-3">Technical Illustrations</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Implementation</h2>
        <h3 className="text-xl font-display font-medium mb-3">Platform Integration</h3>
        <h3 className="text-xl font-display font-medium mb-3">Extending to Marketing</h3>
        <h3 className="text-xl font-display font-medium mb-3">Fundraising Materials</h3>
      </div>
      
      <div>
        <p className="mb-6">
          As Shopmonkey prepared for Series C funding, they needed to refine their brand to reflect their growth from a startup to an industry leader. A key component was developing a cohesive illustration system that could explain complex software features to non-technical automotive professionals.
        </p>
        
        <p className="mb-6">
          Leadership wanted illustrations that maintained Shopmonkey's approachable character while conveying greater sophistication and reliability. The illustrations needed to work across product, marketing, sales, and investor communications with a consistent style.
        </p>
        
        <img src="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png" alt="Illustration System" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          I created a flexible illustration system with clear guidelines for style, color usage, and composition. The system focused on simplifying complex concepts through metaphor rather than literal representation, making software features more intuitive.
        </p>
        
        <p className="mb-6">
          We developed a set of diverse character illustrations representing shop owners, technicians, and customers. These characters maintained consistent proportions and style while reflecting the diversity of Shopmonkey's user base.
        </p>
        
        <img src="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png" alt="Character Illustrations" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          For more complex features, we created technical illustrations that combined simplified diagrams with our character system. These showed users interacting with the software in context, making abstract concepts more concrete.
        </p>
        
        <p className="mb-6">
          The illustration system was implemented across the product interface at key moments in the user journey, particularly during onboarding and feature introduction. Engineers received a dedicated component library to ensure consistent implementation.
        </p>
        
        <p className="mb-6">
          The illustration system extended to marketing materials, creating a cohesive visual experience from initial awareness through product usage. This strengthened brand recognition and reinforced key messages across all touchpoints.
        </p>
        
        <img src="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png" alt="Implementation Examples" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          For the Series C pitch deck, we created custom illustrations that visualized Shopmonkey's market position, growth trajectory, and product roadmap. Investors specifically mentioned the clarity of communication as a factor in their funding decision.
        </p>
      </div>
    </ProjectDetailLayout>
  );
};

export default ProductIllustrations;
