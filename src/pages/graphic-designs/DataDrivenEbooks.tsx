
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const DataDrivenEbooks = () => {
  const relatedProjects = [
    {
      title: "Email Marketing Campaigns",
      description: "Email marketing campaigns for an audience that is not reading inclined.",
      path: "/graphic-designs/email-marketing",
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
      title="Data-Driven eBooks" 
      backTo="/graphic-designs"
      backLabel="Back to Graphic Designs"
      headerImage="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png"
      projectDetails={{
        timeline: "3 Months",
        responsibilities: "Research Analysis, Content Strategy, Visual Design, Illustration, Layout Design",
        results: "250% increase in lead generation compared to previous campaigns"
      }}
      relatedProjects={relatedProjects}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Project Overview</h2>
        <h3 className="text-xl font-display font-medium mb-3">Challenge</h3>
        <h3 className="text-xl font-display font-medium mb-3">Target Audience</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Design Process</h2>
        <h3 className="text-xl font-display font-medium mb-3">Research & Data Analysis</h3>
        <h3 className="text-xl font-display font-medium mb-3">Content Strategy</h3>
        <h3 className="text-xl font-display font-medium mb-3">Visual Direction</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Outcomes</h2>
        <h3 className="text-xl font-display font-medium mb-3">Lead Generation</h3>
        <h3 className="text-xl font-display font-medium mb-3">User Engagement</h3>
        <h3 className="text-xl font-display font-medium mb-3">Client Satisfaction</h3>
      </div>
      
      <div>
        <p className="mb-6">
          Shopmonkey needed to establish thought leadership in the automotive repair software industry while generating quality leads. The challenge was to distill complex industry data into digestible, actionable content for shop owners who typically don't have time for lengthy reading materials.
        </p>
        
        <p className="mb-6">
          We identified our primary audience as independent auto shop owners and managers who are typically time-constrained, pragmatic decision-makers seeking concrete solutions to business challenges rather than theoretical discussions.
        </p>
        
        <img src="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png" alt="eBook Cover" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          We began by analyzing Shopmonkey's customer data and industry trends to identify the most pressing challenges faced by auto shop owners. We collaborated with the data science team to extract meaningful insights from thousands of data points across customer surveys and industry reports.
        </p>
        
        <p className="mb-6">
          Based on our research, we developed a three-part eBook series focused on actionable solutions for key pain points: financial management, customer retention, and operational efficiency. Each eBook was limited to 30 pages, with content broken into scannable sections with clear takeaways.
        </p>
        
        <img src="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png" alt="eBook Interior" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          We created a visual language that balanced professionalism with accessibility, using Shopmonkey's brand colors but introducing custom illustrations to simplify complex concepts. Data visualizations were designed to communicate trends at a glance.
        </p>
        
        <p className="mb-6">
          The eBooks generated 250% more leads than previous content marketing efforts, with 68% of downloads coming from qualified prospects. The conversion rate from eBook download to product demo request increased by 35%.
        </p>
        
        <p className="mb-6">
          Average time spent with the eBooks was 12 minutes per session, significantly higher than industry benchmarks for digital content. The content received high engagement on social media, with sections being shared by industry influencers.
        </p>
        
        <img src="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png" alt="Results" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          Shopmonkey's leadership team was extremely pleased with the results, particularly the quality of leads generated. The eBook series became a cornerstone of their content marketing strategy, with regular updates scheduled to incorporate new data and trends.
        </p>
      </div>
    </ProjectDetailLayout>
  );
};

export default DataDrivenEbooks;
