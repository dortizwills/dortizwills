
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const EventDesigns = () => {
  const relatedProjects = [
    {
      title: "Refining Product Illustrations",
      description: "Rebranding assets for Series C funding that refined Shopmonkey's brand.",
      path: "/graphic-designs/product-illustrations",
      image: "/lovable-uploads/9c0fc049-3139-426d-b3b9-b5e5f05219ac.png"
    },
    {
      title: "Case Studies",
      description: "Story telling case studies that encapsulate success stories from different automotive shops.",
      path: "/graphic-designs/case-studies",
      image: "/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png"
    }
  ];
  
  return (
    <ProjectDetailLayout 
      title="Event Designs" 
      backTo="/graphic-designs"
      backLabel="Back to Graphic Designs"
      headerImage="/lovable-uploads/5e6af2ef-afda-4354-a360-56b751c12cff.png"
      projectDetails={{
        timeline: "4 Months",
        responsibilities: "Booth Design, Signage, Promotional Materials, Interactive Elements, Brand Experience",
        results: "392 qualified leads at SEMA (159% of goal), Best New Exhibitor recognition"
      }}
      relatedProjects={relatedProjects}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <h3 className="text-xl font-display font-medium mb-3">SEMA Challenge</h3>
        <h3 className="text-xl font-display font-medium mb-3">Audience Analysis</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Design Approach</h2>
        <h3 className="text-xl font-display font-medium mb-3">Concept Development</h3>
        <h3 className="text-xl font-display font-medium mb-3">Booth Architecture</h3>
        <h3 className="text-xl font-display font-medium mb-3">Interactive Elements</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Results & Learnings</h2>
        <h3 className="text-xl font-display font-medium mb-3">Lead Generation</h3>
        <h3 className="text-xl font-display font-medium mb-3">Brand Perception</h3>
        <h3 className="text-xl font-display font-medium mb-3">Team Feedback</h3>
      </div>
      
      <div>
        <p className="mb-6">
          SEMA (Specialty Equipment Market Association) is the largest automotive trade show in North America, attracting over 160,000 industry professionals. Shopmonkey needed to stand out among 2,400+ exhibitors while appealing to a traditionally tech-skeptical audience.
        </p>
        
        <p className="mb-6">
          Our research revealed that SEMA attendees are overwhelmingly hands-on professionals who value tangible experiences over technical specifications. They're visually oriented, respond to automotive aesthetics, and are skeptical of software companies that don't understand shop culture.
        </p>
        
        <img src="/lovable-uploads/5e6af2ef-afda-4354-a360-56b751c12cff.png" alt="Event Booth" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          Rather than focusing on software features, we developed a concept around "The Shop of the Future" that physically demonstrated how Shopmonkey transforms day-to-day operations. The design balanced high-tech elements with familiar shop imagery to create a bridge between tradition and innovation.
        </p>
        
        <p className="mb-6">
          We designed a 20'x30' booth with distinct zones that guided visitors through a typical shop workflow. The architecture included authentic shop elements like tool chests and service counters, reimagined with Shopmonkey's brand elements and integrated technology.
        </p>
        
        <img src="/lovable-uploads/5e6af2ef-afda-4354-a360-56b751c12cff.png" alt="Booth Layout" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          The centerpiece was a "Digital Vehicle Inspection" station where attendees could participate in a simulated inspection process using Shopmonkey's mobile app. We also created a "Time Savings Calculator" that provided personalized ROI projections based on visitor inputs about their shop operations.
        </p>
        
        <p className="mb-6">
          The booth generated 392 qualified leads, exceeding our goal by 159%. More importantly, the conversion rate from booth visitor to demo request was 28%, significantly higher than Shopmonkey's average digital conversion rate of 4.5%.
        </p>
        
        <p className="mb-6">
          Post-event surveys showed a 47% increase in positive brand perception among attendees who visited the booth. Shopmonkey was recognized with a "Best New Exhibitor" honorable mention by SEMA show organizers, notable for a software company in a hardware-dominated show.
        </p>
        
        <img src="/lovable-uploads/5e6af2ef-afda-4354-a360-56b751c12cff.png" alt="Event Results" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          The sales team reported that leads from SEMA were better qualified and more receptive than those from previous events. The design approach has since been adapted for smaller regional shows, maintaining consistent brand experience while scaling to different venue sizes and budgets.
        </p>
      </div>
    </ProjectDetailLayout>
  );
};

export default EventDesigns;
