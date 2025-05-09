
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const EmailMarketing = () => {
  const relatedProjects = [
    {
      title: "Data-Driven eBooks",
      description: "Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less.",
      path: "/graphic-designs/data-driven-ebooks",
      image: "/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png"
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
      headerImage="/lovable-uploads/5e6af2ef-afda-4354-a360-56b751c12cff.png"
      projectDetails={{
        timeline: "Ongoing",
        responsibilities: "Email Strategy, Content Creation, Visual Design, Audience Segmentation, Analytics",
        results: "42% open rate (industry avg: 21%), 3.5% CTR (industry avg: 2.5%)"
      }}
      relatedProjects={relatedProjects}
    >
      <div className="col-span-2 mb-6">
        <p>
          Shopmonkey's marketing team desired to differentiate their brand by establishing a news station for all things automotive with the goal of becoming an industry expert in what's new. Shopmonkey positioned themselves to become the brand name for automotive shops even before they knew what the software was capable of delivering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-display font-semibold mb-4">Approach</h2>
        </div>
        <div className="md:col-span-2">
          <p>
            These emails were set to release in addition to other Shopmonkey marketing emails so they would need to feel less like a sales promotion and more as an automotive insider. This challenge would partially be addressed by my visual decisions but primarily by including less sales content. This required me to design unique headers, footers, buttons, content blocks, iconography, type styles, and content layouts.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-display font-semibold mb-4">Engaging First Looks</h2>
        </div>
        <div className="md:col-span-2">
          <p className="mb-6">
            In order to engage readers from the outset I encouraged our team to use headers that differentiate Shopmonkey from competitors. They include illustrations, iconography, type styles, and content blocks.
          </p>
          <img src="/lovable-uploads/d5ef881c-8550-4b78-b9e1-88ed45814d3c.png" alt="Email Headers" className="w-full rounded-lg mb-10" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-display font-semibold mb-4">Continued Attention</h2>
        </div>
        <div className="md:col-span-2">
          <p className="mb-6">
            I created variations on content blocks that would enable our email content team to piece together any type of content for the Shopmonkey News emails.
          </p>
          <img src="/lovable-uploads/9dcbd64b-2ec2-466a-abe3-4684680a0b80.png" alt="Content Blocks" className="w-full rounded-lg mb-10" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-display font-semibold mb-4">Formatted Email Examples</h2>
        </div>
        <div className="md:col-span-2">
          <div className="mb-10">
            <h3 className="text-xl font-display font-medium mb-3">Text Based</h3>
            <p className="mb-6">
              In order for these news articles to be repeatable between photography heavy content we needed to create a captivating method in displaying text driven emails.
            </p>
            <img src="/lovable-uploads/dcf85e13-9236-4eac-a296-15d4574f6e1c.png" alt="Text Driven Emails" className="w-full rounded-lg mb-10" />
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-display font-medium mb-3">Article Based</h3>
            <p className="mb-6">
              These emails were the highlighted version of Shopmonkey News. These held retention easily since they focused on high performing content like blogs, industry reports, and customer stories.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-display font-medium mb-3">Deliverable Based</h3>
            <p className="mb-6">
              These emails focused on Shopmonkey's robust offerings of downloadable resources. Viewers enjoyed these articles since they provided action steps in addition to news.
            </p>
            <img src="/lovable-uploads/9dcbd64b-2ec2-466a-abe3-4684680a0b80.png" alt="Downloadable Resources" className="w-full rounded-lg mb-10" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-display font-semibold mb-4">Key Takeaways & Results</h2>
        </div>
        <div className="md:col-span-2">
          <div className="mb-10">
            <h3 className="text-xl font-display font-medium mb-3">Final Demonstration</h3>
            <p className="mb-6">
              I presented the entire system to our VP of Marketing and he gave us the green light to proceed. The marketing team rallied behind this decision. They were able to reproduce content easily which offered additional streams to produce interest for inbound customers.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-medium mb-3">Continued Adoption</h3>
            <p className="mb-6">
              In 2023 Shopmonkey conducted a series of employee layoffs including the content writer and email marketing portions of the Marketing team. Despite these layoffs, this design system is still used by the remaining team because of its adaptable and reusable designs.
            </p>
          </div>
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default EmailMarketing;
