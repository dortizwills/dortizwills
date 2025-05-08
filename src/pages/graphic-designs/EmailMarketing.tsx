
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const EmailMarketing = () => {
  const relatedProjects = [
    {
      title: "Data-Driven eBooks",
      description: "Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less.",
      path: "/graphic-designs/data-driven-ebooks",
      image: "/lovable-uploads/5e6af2ef-afda-4354-a360-56b751c12cff.png"
    },
    {
      title: "Social Media Campaigns",
      description: "Social media and advertising campaigns that separated Shopmonkey in the Automotive software community.",
      path: "/graphic-designs/social-media",
      image: "/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png"
    }
  ];
  
  return (
    <ProjectDetailLayout 
      title="Email Marketing Campaigns" 
      backTo="/graphic-designs"
      backLabel="Back to Marketing Designs"
      headerImage="/lovable-uploads/9c0fc049-3139-426d-b3b9-b5e5f05219ac.png"
      projectDetails={{
        timeline: "Ongoing",
        responsibilities: "Email Strategy, Content Creation, Visual Design, Audience Segmentation, Analytics",
        results: "42% open rate (industry avg: 21%), 3.5% CTR (industry avg: 2.5%)"
      }}
      relatedProjects={relatedProjects}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <h3 className="text-xl font-display font-medium mb-3">Challenge</h3>
        <h3 className="text-xl font-display font-medium mb-3">Audience Analysis</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Strategy & Design</h2>
        <h3 className="text-xl font-display font-medium mb-3">Visual-First Approach</h3>
        <h3 className="text-xl font-display font-medium mb-3">Segmentation & Personalization</h3>
        <h3 className="text-xl font-display font-medium mb-3">Testing & Optimization</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Results</h2>
        <h3 className="text-xl font-display font-medium mb-3">Engagement Metrics</h3>
        <h3 className="text-xl font-display font-medium mb-3">Business Impact</h3>
      </div>
      
      <div>
        <p className="mb-6">
          Shopmonkey needed to engage an audience of auto shop owners who typically don't respond to text-heavy communications. These busy professionals rarely have time to read extensive emails and are more likely to respond to visual content that communicates value quickly.
        </p>
        
        <p className="mb-6">
          Through audience research, we discovered that our target users checked emails primarily on mobile devices during breaks between servicing vehicles. They valued practical, applicable information and were skeptical of marketing jargon. Most importantly, they responded better to showing than telling.
        </p>
        
        <img src="/lovable-uploads/9c0fc049-3139-426d-b3b9-b5e5f05219ac.png" alt="Email Template" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          We developed a visual-first email strategy that relied on clean, impactful imagery, minimal text, and clear call-to-actions. Each email focused on a single message or value proposition, using auto shop imagery that readers would immediately recognize and relate to.
        </p>
        
        <p className="mb-6">
          We implemented advanced segmentation based on shop size, services offered, and previous interactions with Shopmonkey. Dynamic content blocks allowed us to personalize emails with relevant information without creating entirely separate campaigns for each segment.
        </p>
        
        <img src="/lovable-uploads/9c0fc049-3139-426d-b3b9-b5e5f05219ac.png" alt="Email Examples" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          We established a robust A/B testing protocol for subject lines, preview text, imagery, and CTAs. Over time, we built a database of what resonated best with different segments. The design system evolved based on these insights, with each iteration showing improved performance.
        </p>
        
        <p className="mb-6">
          Our visual approach doubled standard industry open rates, achieving a consistent 42% open rate across campaigns. Click-through rates averaged 3.5%, significantly above the industry average of 2.5%. Unsubscribe rates remained below 0.2%.
        </p>
        
        <p className="mb-6">
          Email became Shopmonkey's highest-converting digital channel, responsible for 27% of demo requests. The nurture campaigns reduced sales cycle length by 30% by preparing prospects with the right information before sales conversations.
        </p>
        
        <img src="/lovable-uploads/9c0fc049-3139-426d-b3b9-b5e5f05219ac.png" alt="Results Dashboard" className="w-full rounded-lg mb-10" />
      </div>
    </ProjectDetailLayout>
  );
};

export default EmailMarketing;
