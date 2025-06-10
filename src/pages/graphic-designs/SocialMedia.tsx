
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const SocialMedia = () => {
  const relatedProjects = [
    {
      title: "Email Marketing Campaigns",
      description: "Email marketing campaigns for an audience that is not reading inclined.",
      path: "/graphic-designs/email-marketing",
      image: "/lovable-uploads/cc56fb43-85f6-41c6-8efb-bd1225f35097.png"
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
      backLabel="Back to Visual Designs"
      headerImage="/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png"
      projectDetails={{
        timeline: "Ongoing, 12-month campaign",
        responsibilities: "Social Strategy, Content Creation, Visual Design, Analytics, Paid Social Management",
        results: "284% increase in engagement, 5.3x ROI on paid campaigns, 35% increase in brand mentions"
      }}
      relatedProjects={relatedProjects}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4 md:col-span-3">Background</h2>
        </div>
        <div className="md:col-span-3">
          <p className="mb-6">
            The automotive software industry is historically resistant to new technology solutions, with shops often relying on legacy systems or paper processes. Shopmonkey needed to differentiate itself in a market where shop owners were skeptical of software claims and wary of complex implementations.
          </p>
          
          <p className="mb-6">
            Rather than focusing solely on product promotion, we created a strategy centered on building a community of progressive shop owners. We positioned Shopmonkey as an advocate for modernization in the industry, starting conversations about efficiency and customer experience rather than just software. We backed these by releasing case studies through our social media using real shop's photography
          </p>
          <img src="/lovable-uploads/94eaf5c4-1470-42ff-852e-42b278ea631d.png" alt="Social Media Top Performance" className="w-full rounded-lg mb-10" />

        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Iterative Strategy</h3>
        </div>
        <div className="md:col-span-2">
          <p className="mb-6">
            I worked closely with performance marketers and content strategists to gain a clear understanding of each campaign's objectives, audience personas, and A/B testing plans. A prior goal was to push our illustrations, but after conducting a series of A/B tests we concluded that photography, graphics, and smaller tertiary elements would better serve the brand, so I adapted our designs to meet the demand.
          </p>
          <p className="mb-6">
            This collaboration allowed me to contribute to the visual direction early in the process, aligning creative concepts with strategic goals and ensuring that design decisions were both intentional and results-oriented.
          </p>
            <img src="/lovable-uploads/c2d4d5fa-21da-4ef3-b169-810ea84e3986.png" alt="Case Studies Example 2" className="w-full rounded-lg" />

        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Brand Consistency</h3>
        </div>
        <div className="md:col-span-2">
          <p className="mb-6">
            Maintaining brand integrity was a key priority in every campaign. I ensured that all creative assets adhered to Shopmonkey's visual identity, tone of voice, and messaging standards—while also pushing for bold, eye-catching designs that could stand out against our competitors on paid social media.
          </p>
          <p className="mb-6">
            Images appearing on social media and paid ads would now match the same imagery that appeared in Shopmonkey's blog, website, and product pages.
          </p>
          <img src="/lovable-uploads/2f2d2b59-699b-4a37-b9e2-230ee817ff56.png" alt="Social Media Brand Consistency 2" className="w-full rounded-lg" />
          <img src="/lovable-uploads/43abf79a-b668-4802-8153-498a7ad0047a.png" alt="Case Studies Example 1" className="w-full rounded-lg" />

        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default SocialMedia;
