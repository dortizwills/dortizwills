
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const SocialMedia = () => {
  const relatedProjects = [
    {
      title: "Email Marketing Campaigns",
      description: "Email marketing campaigns for an audience that is not reading inclined.",
      path: "/graphic-designs/email-marketing",
      image: "/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png"
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
      title="Social Media Campaigns" 
      backTo="/graphic-designs"
      backLabel="Back to Graphic Designs"
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
        <h3 className="text-xl font-display font-medium mb-3">Community Building</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Content Approach</h2>
        <h3 className="text-xl font-display font-medium mb-3">Education vs. Promotion</h3>
        <h3 className="text-xl font-display font-medium mb-3">User-Generated Content</h3>
        <h3 className="text-xl font-display font-medium mb-3">Shop Spotlights</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Results & Impact</h2>
        <h3 className="text-xl font-display font-medium mb-3">Engagement Metrics</h3>
        <h3 className="text-xl font-display font-medium mb-3">Brand Perception</h3>
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
          We implemented an 80/20 rule: 80% of content focused on educational value for shop owners, with only 20% directly promoting Shopmonkey. This built trust with the audience and established the brand as a valuable resource rather than just another vendor.
        </p>
        
        <p className="mb-6">
          We created the #ShopmonkeyShops hashtag and encouraged customers to share their success stories. This authentic content performed 3x better than branded content in terms of engagement and was more persuasive to prospective customers.
        </p>
        
        <img src="/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png" alt="User Generated Content" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          Each month, we featured a customer shop across our channels, highlighting their unique story and how they've modernized their business. These spotlights became our highest-performing content, creating a virtuous cycle where shops competed to be featured.
        </p>
        
        <p className="mb-6">
          Engagement across platforms increased by 284% year-over-year. LinkedIn posts regularly achieved 5-7% engagement rates (industry average: 2%). Facebook community grew from 1,200 to 9,800 members with 72% being active monthly participants.
        </p>
        
        <p className="mb-6">
          Sentiment analysis showed a shift from 60% neutral/negative mentions to 82% positive mentions over the campaign period. The perception of Shopmonkey evolved from "just another software vendor" to "partner in shop modernization."
        </p>
        
        <img src="/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png" alt="Results Dashboard" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          Social channels became the second-highest source of qualified leads behind referrals. Cost-per-acquisition through social campaigns was 43% lower than other digital channels. The community became self-sustaining, with experienced users answering questions from prospects and reducing support burden.
        </p>
      </div>
    </ProjectDetailLayout>
  );
};

export default SocialMedia;
