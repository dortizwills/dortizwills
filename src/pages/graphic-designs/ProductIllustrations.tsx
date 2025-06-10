
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
      backLabel="Back to Visual Designs"
      headerImage="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png"
      projectDetails={{
        timeline: "3 months",
        responsibilities: "Illustration System Design, Visual Design, Brand Development, Style Guide Creation",
        results: "Contributed to successful Series C funding, with onboarding shops specifically citing clear product communication"
      }}
      relatedProjects={relatedProjects}
    >
      {/* Div 1 */}
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Design Process</h2>
      </div>
      
      {/* Div 2 */}
       
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Brand Evolution</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            As Shopmonkey prepared for Series C funding, they needed to refine their brand to reflect their growth from a startup to an industry leader. A key component was developing a cohesive illustration system that could explain complex software features to non-technical automotive professionals.
          </p>
          
          <p className="mb-6">
            Leadership wanted illustrations that maintained Shopmonkey's approachable character while conveying greater sophistication and reliability. The illustrations needed to work across product, marketing, sales, and onboarding shops communications with a consistent style.
          </p>
          
        </div>
      </div>
      <img 
            src="/lovable-uploads/7859156b-5625-49de-aaea-6e79dfb72375.png" 
            alt="Cohesive Illustrations" 
            className="w-full rounded-lg mb-10"
          />
      {/* Div 3 */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Illustration System & Character Design</h3>
        </div>
        <div className="col-span-2">
         <p className="mb-6">
            I created a flexible illustration system with clear guidelines for style, color usage, and composition. The system focused on simplifying complex concepts through metaphor rather than literal representation, making software features more intuitive.
         </p>
          
         <p className="mb-6">
            We developed a set of diverse character illustrations representing shop owners, technicians, and customers. These characters maintained consistent proportions and style while reflecting the diversity of Shopmonkey's user base.
         </p>
        </div>
      </div>
        <img 
          src="/lovable-uploads/7a28a045-e535-4ae2-8345-e4887b8fcc1c.png" 
          alt="Diverse Base" 
          className="w-full rounded-lg mb-10"
        />
      
      {/* Div 4 */}
      <div>
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Implementation</h2>
      </div>
      
      {/* Div 5 */}
     <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Product Extending to Marketing</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            For more complex features, we created technical illustrations that combined simplified diagrams with our character system. These showed users interacting with the software in context, making abstract concepts more concrete.
          </p>
          
          <p className="mb-6">
            The illustration system was implemented across the product interface at key moments in the user journey, particularly during onboarding and feature introduction. Engineers received a dedicated component library to ensure consistent implementation.
          </p>
          
          <p className="mb-6">
            The illustration system extended to marketing materials, creating a cohesive visual experience from initial awareness through product usage. This strengthened brand recognition and reinforced key messages across all touchpoints.
          </p>
        </div>
      </div>

      {/* Div 6 -- Final Images */}
      <div> 
        <div className="space-y-6">
          <img 
            src="/lovable-uploads/ca4960a8-b221-407b-adaf-139f0110fceb.png" 
            alt="Simplified Diagrams" 
            className="w-full rounded-lg"
          />
          <img 
            src="/lovable-uploads/c6d221a8-08e8-49c9-b113-9e46aa455cd8.png" 
            alt="Abstract Concepts" 
            className="w-full rounded-lg"
          />
          <img 
            src="/lovable-uploads/b407a62d-e4ef-4cbd-9ab6-cf318cfa5b96.png" 
            alt="Marketing Materials" 
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default ProductIllustrations;
