
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const QuickServices = () => {
  const relatedProjects = [
    {
      title: "Gourmet Recipes",
      description: "Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are.",
      path: "/product-designs/gourmet-recipes",
      image: "/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png"
    },
    {
      title: "Non-Profit Redesign",
      description: "Redesigning the a Non-Profit Museum's digital experience to showcase music history and education.",
      path: "/product-designs/grammy-museum",
      image: "/lovable-uploads/e9d967b1-2ea7-4ffe-9768-e4c16c1de3ed.png"
    }
  ];
  return (
    <ProjectDetailLayout 
      title="Redesigning 'Quick Services'" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
      headerImage="/lovable-uploads/cc88ff3a-d97a-4ee2-91f6-848fecbd0ae1.png"
      projectDetails={{
        timeline: "3 Months",
        responsibilities: "User Research, Interaction Design, Experience Design, Visual Design",
        results: "Enterprise partnership for a total of +200 shop locations, worth over $500M"
      }}
      relatedProjects={relatedProjects}
    >
      {/* Background */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Background</h2>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            Have you ever needed to service your vehicle? I bet it was quick, definitely not over 45 minutes to hours. If that's the case, then this project isn't relevant, but if you're like millions of other auto shop customers then this will interest you.
          </p>
          
          <p className="mb-6">
            When shops cut down on their service times by 15-30 minutes that benefits everyone. This app focuses on reducing the initial checkout time, providing truly quick services, and enabling staff to expedite each and every order.
          </p>
          
          <p className="mb-6">
            My initial prompt of this project was to create a Tire Checkout system for Shopmonkey. After some initial sketches we uncovered the real need, an express checkout system.
          </p>
          
          <p className="mb-6">
            Express Lane would bring efficiency to quick service shops and the industry at large because expedited services are important to more than just tire & quicklube shops.
          </p>
        </div>
      </div>
      
      {/* Early Stages */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-semibold mb-6">Early Stages</h2>
      </div>
      
      {/* User Personas */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">User Personas</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            The two primary express service users are a Service Writer or a Technician.
          </p>
          
          <p className="mb-6">
            Service Writers are responsible for interacting with customers which is why they need the ability to alter service prices, provide quick answers, and schedule shop services.
          </p>
          
          <img 
            src="/lovable-uploads/45efcebf-96f5-4741-b608-c56128420745.png"
            alt="User Type 1" 
            className="w-full rounded-lg mb-6"
          />
          
          <p className="mb-6">
            Technicians are responsible for completing work quickly so their access needs to be strategically restricted to avoid costly alterations to the orders while allowing them access to vehicle information.
          </p>
          
          <p className="mb-6">
            We needed to balance these requirements while still creating a positive experience for both users.
          </p>
          
          <img 
            src="/lovable-uploads/2382a937-53e8-4dd3-9c09-90181afda0e4.png"
            alt="User Type 2" 
            className="w-full rounded-lg mb-6"
          />
        </div>
      </div>
      
      {/* Sketches & Brainstorming */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Sketches & Brainstorming</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            I began to brainstorm with my manager, and after we talked he said he'd rather not look at any sketches but instead see my mid-fidelity screens.
          </p>
          
          <p className="mb-6">
            I agreed, and although he wouldn't see these, I wanted to spend some time iterating so that when I presented he could see the benefits of my deeper exploration. I captured a few of them below.
          </p>
          
          <img 
            src="/lovable-uploads/0fbe03be-fa0e-44d6-8fcf-70157271e4c1.png"
            alt="Sketches" 
            className="w-full rounded-lg mb-6"
          />
        </div>
      </div>
      
      {/* Initial Designs */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Initial Designs</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            The first design I presented was a chrome extension that would be persistent on any tire page, or could be toggled on/off when the user was done.
          </p>
          
          <p className="mb-6">
            My rationale was these options required less coding in Shopmonkey's primary application but they would directly sync tires to a shop's inventory, and enable users to add any inventory items to their shop.
          </p>
          
          <img 
            src="public/lovable-uploads/Express Lane lofi.gif"
            alt="Sketches" 
            className="w-full rounded-lg mb-6"
          />
          
          <p className="mb-6">
            My second design was a cobranded tires landing page. Here users could have all their current tire vendors synced into a CoBranded page with Shopmonkey.
          </p>
          
          <p className="mb-6">
            After I presented both concepts we decided to pursue one of the chrome extensions. I developed the first concept into a simple prototype where users could add inventory in a few clicks.
          </p>
          
          <img 
            src="/public/lovable-uploads/01-express-lane/update-an-existing-design.png"
            alt="ATD Cobrand" 
            className="w-full rounded-lg mb-6"
          />
        </div>
      </div>
      
      {/* New Directions */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-semibold mb-6">New Directions</h2>
      </div>
      
      {/* Update an Existing Design */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Update an Existing Design</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            After showcasing these two designs my manager had an idea spark. The quick nature of these concepts could be directly applied to another product undergoing research – Express Lane. My concepts, if utilized correctly, could expand the services from the quick-lube subset of shops to any shop with quick services, especially when servicing tires, battery replacements, filter changes, windows, etc.
          </p>
          
          <img 
            src="/public/lovable-uploads/01-express-lane/original-expr-lane.jpg"
            alt="ATD Cobrand" 
            className="w-full rounded-lg mb-6"
          />  
        </div>
      </div>
      
      {/* The New Vision */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">The New Vision</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            I was now responsible for adding tires and other quick services to Express Lane so that any general shop could benefit from this in-house application.
          </p>
          
          <img 
            src="/public/lovable-uploads/01-express-lane/the-new-vision.png"
            alt="ATD Cobrand" 
            className="w-full rounded-lg mb-6"
          />  
        </div>
      </div>
      
      {/* The Design Process */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-semibold mb-6">The Design Process</h2>
      </div>
      
      {/* Design Sprints & User Research */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Design Sprints & User Research</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            We worked in design sprints in this next stage of the process.
          </p>
          
          <p className="mb-6">
            From the outset my manager wanted to ensure at the end of our sprints we had presentable prototypes in high fidelity. Why? Each week we would present the resulting designs to a different enterprise customer.
          </p>
          
          <p className="mb-6">
            As a result we were limited to how much work I could complete and refine every week before needing to alter the prototypes.
          </p>
          
          <p className="mb-6">
            This process taught me a lot about the shortcomings and benefits of quickly sprinting within hi-fi prototypes.
          </p>
          
          <img 
            src="/lovable-uploads/f2510f02-c49c-4623-b1c0-0f7633a0db97.png"
            alt="Graph" 
            className="w-full rounded-lg mb-6"
          />
        </div>
      </div>
      
      {/* Takeaways */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Takeaways – a summary of the full process</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <ol className="list-decimal pl-5 mb-6 space-y-2">
            <li>Early and diverse exploration early on is better than frequently presentable prototypes from the outset.</li>
            <li>Reducing clutter and adding information later is easier than starting with too much data and needing to remove it.</li>
            <li>Unique instances should be used only if there are no usable options in your current designs. Save time and effort by using existing systems.</li>
            <li>Take management seriously, but not as your conclusive answer. If you can complete their requirements AND produce additional options do so, but always answer their needs first.</li>
          </ol>
        </div>
      </div>
      
      {/* Design Process Snapshots */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Design Process Snapshots</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            Without going into the full design process described above I wanted to capture a few of the sections of the project we spent extra time defining in our exploration.
          </p>
        </div>
      </div>
      
      {/* The Dashboard */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">The Dashboard</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            I was initially prompted to only update Express Lane, not re-envision it. If I had the opportunity to redo this process I'd explore early on, even if that meant taking personal time to do so.
          </p>
        </div>
      </div>
      
      {/* Dashboard Images */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
      <div>
      {/* Commented out div 1 to move this image to section above    
      <img 
            src="/lovable-uploads/Dashboard 1.jpeg"
            alt="Dashboard 1" 
            className="w-full rounded-lg h-auto"
          />*/}
        </div>
        <div>
          <img 
            src="/lovable-uploads/Dashboard 2.jpeg"
            alt="Dashboard 2" 
            className="w-full rounded-lg h-auto"
          />
        </div>
        <div>
          <img 
            src="/lovable-uploads/Dashboard 1.jpeg"
            alt="Dashboard 3"
            className="w-full rounded-lg h-auto"
          />
        </div>
      </div>
      
      {/* Co-branded Tire Portal */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Co-branded Tire Portal</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            This screen required frequent updates as our tire options expanded. We wanted to explore if we could make this part of our dashboard but eventually decided it needed to exist as a separate externally linked portal.
          </p>
        </div>
      </div>
      
      {/* Co-Brand Images */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div>
          <img 
            src="/lovable-uploads/73f2c0ae-6231-4d3d-adb7-ea5e3e0c4026.png"
            alt="All Tires 1" 
            className="w-full rounded-lg h-auto"
          />
        </div>
        <div>
          <img 
            src="/lovable-uploads/f025eb45-fe5a-4b9e-8fdc-cb02e82d8fc6.png"
            alt="All Tires 2" 
            className="w-full rounded-lg h-auto"
          />
        </div>
        <div>
          <img 
            src="/lovable-uploads/e8ef73a6-c610-4411-9e71-83aaaf37d6d8.png"
            alt="All Tires 3"
            className="w-full rounded-lg h-auto"
          />
        </div>
      </div>
      
      {/* Quick Tires */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Quick Tires</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            Since all services in this app needed to be quick services, we used a lot of our time iterating on how to include crucial elements of tire purchasing while still enabling users to explore options in front of an inquisitive end customer.
          </p>
        </div>
      </div>
      
      {/* Quick Tires Images */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div>
          <img 
            src="public/lovable-uploads/Quick Tires 1.jpeg"
            alt="Tire Portal 1" 
            className="w-full rounded-lg h-auto"
          />
        </div>
        <div>
          <img 
            src="public/lovable-uploads/Quick Tires 2.jpeg"
            alt="Tire Portal 2" 
            className="w-full rounded-lg h-auto"
          />
        </div>
        <div>
          <img 
            src="public/lovable-uploads/Quick Tires 3.jpeg"
            alt="Tire Portal 3"
            className="w-full rounded-lg h-auto"
          />
        </div>
      </div>
      
      {/* Final Prototypes */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-semibold mb-6">Final Prototypes</h2>
      </div>
      
      {/* Service Writer */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Quickly creating orders as a Service Writer</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <h4 className="text-lg font-medium mb-2">Advance Control</h4>
          <p className="mb-6">
            Service writers create orders for their shops, so additional control is necessary to allow them to engage with customers. Service writers can add and remove services, apply discounts, and edit vehicle information. Only service writers have the ability to complete the transaction.
          </p>
          
          <h4 className="text-lg font-medium mb-2">Category Customization</h4>
          <p className="mb-6">
            Common services for service writers are automatically populated in their primary navigation with detailed views of each service. Tires are a specific category where I added a co-branded portal so that shops can prioritize selling their inventories and still answer customer preferences.
          </p>
          
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full rounded-lg"
        >
          <source src="dortiz-wills/public/lovable-uploads/01-express-lane/final-service-writer.mp4" type="video/mp4" />
        </video>
        
          <br></br>
          
        <Button asChild variant="outline" className="justify-center py-6 text-lg bg-gradient-primary text-white border-none hover:opacity-90">
          <a href="https://www.figma.com/proto/cB1y1MNNkjddyk4GEpg8FI/Express-Lane---Daniel-OW?page-id=343%3A37004&type=design&node-id=343-37008&viewport=648%2C260%2C0.05&t=05bjeqPjzCf1PNbI-1&scaling=scale-down&starting-point-node-id=343%3A37008&mode=design" target="_blank" rel="noopener noreferrer">
            View Admin Prototype
          </a>
        </Button>
        </div>
      </div>
      
      {/* For Technicians */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Customizing Access For Technicians</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <h4 className="text-lg font-medium mb-2">Pertinent Permissions</h4>
          <p className="mb-6">
            Technicians are the main workers in the automotive repair industry, but not all of them are responsible with the shop's customer data or the pricing of services.
          </p>
          
          <p className="mb-6">
            A limited access Express Lane was created so that Technicians could check vehicle specifications, complete work requests, inspect common issues, add simple services, and charge customers for approved services.
          </p>
          
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full rounded-lg"
          >
            <source src="/lovable-uploads/Final-Technicians.mp4" type="video/mp4" />
          </video>
          
          <br></br>
                    
        <Button asChild variant="outline" className="justify-center py-6 text-lg bg-gradient-primary text-white border-none hover:opacity-90">
          <a href="https://www.figma.com/proto/cB1y1MNNkjddyk4GEpg8FI/Express-Lane---Daniel-OW?page-id=913%3A81840&type=design&node-id=913-83906&viewport=367%2C337%2C0.14&t=h0YyIPtCXbFiJ9ZT-1&scaling=scale-down&starting-point-node-id=913%3A83906&mode=design" target="_blank" rel="noopener noreferrer">
              View Technician Prototype
          </a>
        </Button>
        </div>
      </div>
      
      {/* Results */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-semibold mb-6">Results</h2>
      </div>
      
      {/* Enterprise Partnerships */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Enterprise Partnerships</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            For quicklube shop owners, Shopmonkey built in Express Lane as a native experience to their product. As a result, Shopmonkey's Express Lane was featured in B2B strategy meetings to secure strategic partnerships and expand their market reach.
          </p>
        </div>
      </div>
      
      {/* Market Differentiator */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Market Differentiator</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            Shopmonkey was the first auto shop management software to offer express services, which became a differentiator between Shopmonkey and competitors. The company received positive reactions at trade shows and in dozens of customer interviews.
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default QuickServices;
