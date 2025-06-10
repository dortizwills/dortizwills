
import React from 'react';
import ProjectDetailLayout from '../../components/ProjectDetailLayout';

const EventDesigns = () => {
  const relatedProjects = [
    {
      title: "Refining Product Illustrations",
      description: "Rebranding assets for Series C funding that refined Shopmonkey's brand.",
      path: "/graphic-designs/product-illustrations",
      image: "/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png"
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
      title="Event Designs" 
      backTo="/graphic-designs"
      backLabel="Back to Visual Designs"
      headerImage="/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png"
      projectDetails={{
        timeline: "2 months",
        responsibilities: "Booth Design, Signage, Promotional Materials, Interactive Elements, Brand Experience, Illustration, Layout Design",
        results: "792 qualified leads at SEMA (159% of goal), Rated Best Booth among software management companies at SEMA"
      }}
      relatedProjects={relatedProjects}
    >      
      {/* Tradeshow Booth Designs */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Tradeshow Booth Designs</h2>
          <p className="mb-3">
            This booth was Shopmonkey's largest and most successful booth in 2022. I assisted in the designs so it could accommodate 10 demo stations, 6 floating iPads, and a variety of swag and sales materials.
          </p>
          <p className="font-bold mb-1">Dimensions</p>
          <p>20 x 40ft</p>
        </div>
        <div className="col-span-2">
          <img src="/lovable-uploads/fadb49af-7669-4f52-8d33-95bdb1f64d15.png" alt="Tradeshow Booth" className="w-full rounded-lg" />
        </div>
      </div>
      
      {/* Banner Designs */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Banner Designs</h2>
          <p className="mb-3">
            In addition to Demo booths, these banners were placed on the edges of our booth station. We also were able to reuse them at future events for smaller venues where large booths were not available.
          </p>
          <p className="font-bold mb-1">Dimensions</p>
          <p>3.5 x 7 ft</p>
        </div>
        <div className="col-span-2">
          <img src="/lovable-uploads/f2b1582c-23fb-41b9-b35f-c77a24bace7a.png" alt="Banner Designs" className="w-full rounded-lg" />
        </div>
      </div>
      
      {/* Demo Station Designs */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Demo Station Designs</h2>
          <p className="mb-3">
            Each station was equipped with a salesperson and video explaining a different part of shopmonkey's app. The station included physical deliverables, swag, and an iPad where sales could live demo Shopmonkey's services to any lead.
          </p>
          <p className="font-bold mb-1">Dimensions</p>
          <p>3.5 x 10ft</p>
        </div>
        <div className="col-span-2">
          <img src="/lovable-uploads/e434be3c-1b46-4d8d-a1c9-a6c3e842581d.png" alt="Demo Station Designs" className="w-full rounded-lg" />
        </div>
      </div>
      
      {/* Stationary Deliverables */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Stationary Deliverables</h2>
          <p className="mb-3">
            These were deliverables that were available for our trade show attendees. The trifold was an item any lead could grab on their own.
            The case studies were delivered on a case by case basis to avoid shopmonkey's competitors from easy access to our customer targeted marketing strategies.
          </p>
          <p className="font-bold mb-1">Dimensions</p>
          <p>
            11 x 17 in<br />
            8.5 x 11 in
          </p>
        </div>
        <div className="col-span-2">
          <img src="/lovable-uploads/4229cb24-d0ce-4d3f-b72e-bc628cf78eae.png" alt="Stationary Deliverables" className="w-full rounded-lg" />
        </div>
      </div>
      
      {/* Collateral in Context */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Collateral in Context</h2>
          <p className="mb-3">
            These designs were showcased at SEMA 2022. The booth was 20 times more successful than our last showing in 2020 before Covid closed in person events.
          </p>
          <p className="mb-3">
            I designed swag including a white label for maker's mark, mousepads, sock-monkeys, and additional other deliverables
          </p>
        </div>
        <div className="col-span-2">
          <img src="/lovable-uploads/1ff0b0c5-2dd1-43e0-9683-67bab9a9be0a.png" alt="Collateral in Context" className="w-full rounded-lg" />
        </div>
      </div>
      
      {/* Key Results */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Key Results</h2>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-display font-medium mb-3">Lead Generation</h3>
          <p className="mb-6">
            280 of the 792 qualified leads at SEMA subscribed at a $129 monthly plan of with many choosing a higher package. The ARR recieved from SEMA was (159% of goal), and the booth was rated Best Booth among software management companies at SEMA
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default EventDesigns;
