
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const DataDrivenEbooks = () => {
  const relatedProjects = [
    {
      title: "Email Marketing Campaigns",
      description: "Email marketing campaigns for an audience that is not reading inclined.",
      path: "/graphic-designs/email-marketing",
      image: "/lovable-uploads/cc56fb43-85f6-41c6-8efb-bd1225f35097.png"
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
      backLabel="Back to Visual Designs"
      headerImage="/lovable-uploads/3132f8cd-a1d3-4166-8782-cee980f9043d.png"
      projectDetails={{
        timeline: "2.5 weeks each, 2 months total",
        responsibilities: "Research Analysis, Content Strategy, Visual Design, Illustration, Layout Design, Audience Segmentation",
        results: "250% increase in lead generation compared to previous campaigns"
      }}
      relatedProjects={relatedProjects}
    >
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Background</h2>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
          Shopmonkey's core audience is composed of small to midsized automotive repair shops. In an attempt to entice additional customers and to retain current shops, Shopmonkey desired to produce data that shops could use to propel their businesses based on the prior year's data. I was responsible for reducing 40-60 pages of content into concise 15-25 page documents so that shops could retain the information and have actionable steps once completing the ebooks.
          </p>
          <p className="mb-6">
            This project required a consistent visual style with Shopmonkey's marketing materials and their product. I created a visual style guide composed of illustrations, brand elements, product screenshots, and customer photography to create consistency between ebooks and product. We were then able to pass the style guide to other graphic designers on the team for future ebooks on any subject.
          </p>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Approach</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div>
          <a href="https://go.shopmonkey.io/hubfs/Resources/ebooks/Driven%20by%20Results/Drive-results-for-your-auto-shop_ebook_web.pdf">
            <img src="/lovable-uploads/28a671dc-6276-4bb0-9e68-4e916518c0b3.png" alt="Drive Results for Your Auto Shop" className="w-full rounded-lg" />
          </a>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-display font-medium mb-3">Showcasing Success</h3>
          <p className="mb-6">
            In 2020 Automotive shops were unsure as how their profits could withstand the effects of the pandemic. I used updated photography, new layouts, and illustrations to catalog shops that achieved positive results in the midst of hard times.
          </p>
          <p className="mb-6">
            <a 
              href="https://go.shopmonkey.io/hubfs/Resources/ebooks/Driven%20by%20Results/Drive-results-for-your-auto-shop_ebook_web.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-designer-red hover:underline flex items-center"
            >
              View full ebook pdf <span className="ml-1">→</span>
            </a>
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div>
          <a href="https://go.shopmonkey.io/hubfs/Resources/ebooks/5%20Automotive%20Service%20Industry%20Trends/5-automotive-trends-ebook.pdf">
            <img src="/lovable-uploads/a3392651-86b2-47b2-a91e-4b6dffa28164.png" alt="5 Automotive Service Industry Trends" className="w-full rounded-lg" />
          </a>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-display font-medium mb-3">Driving Data</h3>
          <p className="mb-6">
            I distilled all the insights from Shopmonkey's 2019 data down to 5 top trends within general repair industry. Alongside our content writer, I distilled this information into a succinct report focused on improvement plans driven by data.
          </p>
          
          <p className="mb-6">
            <a 
              href="https://go.shopmonkey.io/hubfs/Resources/ebooks/5%20Automotive%20Service%20Industry%20Trends/5-automotive-trends-ebook.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-designer-red hover:underline flex items-center"
            >
              View full ebook pdf <span className="ml-1">→</span>
            </a>
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div>
          <a href="https://go.shopmonkey.io/hubfs/Resources/ebooks/Ebook%205%20Steps%20to%20Grow%20Your%20Auto%20Shops%20Revenue.pdf">
            <img src="/lovable-uploads/8b8388ab-075c-4476-8564-528aa72b045f.png" alt="5 Steps to Grow Your Auto Shop's Revenue" className="w-full rounded-lg" />
          </a>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-display font-medium mb-3">Establishing Brand Identity</h3>
          <p className="mb-6">
            The content within this first e-book in the series focused on features that Shopmonkey offers, and I directed the visuals towards shop stories and data. My intention drove away from seeming like a blatant sales tactic and towards industry insights.
          </p>
          <p className="mb-6">
            <a 
              href="https://go.shopmonkey.io/hubfs/Resources/ebooks/Ebook%205%20Steps%20to%20Grow%20Your%20Auto%20Shops%20Revenue.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-designer-red hover:underline flex items-center"
            >
              View full ebook pdf <span className="ml-1">→</span>
            </a>
          </p>
        </div>
      </div>
        
      <div className="mt-10">
        <h2 className="text-2xl font-display font-semibold mb-4">Key Results</h2>
      </div>        
       
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Increased Traffic</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            Shops found these ebooks so helpful that following each published ebook there would be an increase of 10% to inbound traffic and 2.5% of monthly demos are still scheduled from these resources. The marketing team tracked that social media traffic and website traffic increased by 15% and 10% after an ebook released, showing the audience's excitement for this unique content.
          </p>
        </div>
      </div>
       
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Ahead of the Pack</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            These ebooks went so well competitors began producing similar content in an attempt to mirror the value of these ebooks. Despite additional resources being available, these ebooks continue to be brought up with potential customers as more actionable and comprehensive than 30-60 page pdfs offered by competitors.
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default DataDrivenEbooks;
