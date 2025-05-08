
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const QuickServices = () => {
  return (
    <ProjectDetailLayout 
      title="Redesigning 'Quick Services'" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
    >
      <div className="md:col-span-8">
        <img 
          src="/lovable-uploads/2fad7cda-021e-4386-83c6-7b65f6b7d71f.png" 
          alt="Quick Services App" 
          className="w-full rounded-lg mb-8"
        />
        
        <h2 className="text-2xl font-display font-semibold mb-4">Background</h2>
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
        
        <h2 className="text-2xl font-display font-semibold mb-4">User Profiles</h2>
        <p className="mb-6">
          The two primary express service users are a Service Writer or a Technician.
        </p>
        
        <p className="mb-6">
          Service Writers are responsible for interacting with customers which is why they need the ability to alter service prices, provide quick answers, and schedule shop services.
        </p>
        
        <p className="mb-6">
          Technicians are responsible for completing work quickly so their access needs to be strategically restricted to avoid costly alterations to the orders while allowing them access to vehicle information.
        </p>
        
        <p className="mb-6">
          We needed to balance these requirements while still creating a positive experience for both users.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Early Stages</h2>
        <h3 className="text-xl font-display font-medium mb-3">Sketches & Brainstorming</h3>
        <p className="mb-6">
          I began to brainstorm with my manager, and after we talked he said he'd rather not look at any sketches but instead see my mid-fidelity screens.
        </p>
        
        <p className="mb-6">
          I agreed, and although he wouldn't see these, I wanted to spend some time iterating so that when I presented he could see the benefits of my deeper exploration.
        </p>
        
        <p className="mb-6">
          I captured a few of them to the right »»
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Initial Designs</h3>
        <p className="mb-6">
          The first design I presented was a chrome extension that would be persistent on any tire page, or could be toggled on/off when the user was done.
        </p>
        
        <p className="mb-6">
          My rationale was these options required less coding in Shopmonkey's primary application but they would directly sync tires to a shop's inventory, and enable users to add any inventory items to their shop.
        </p>
        
        <p className="mb-6">
          My second design was a cobranded tires landing page. Here users could have all their current tire vendors synced into a CoBranded page with Shopmonkey.
        </p>
        
        <p className="mb-6">
          After I presented both concepts we decided to pursue one of the chrome extensions. I developed the first concept into a simple prototype where users could add inventory in a few clicks.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">New Directions</h2>
        <h3 className="text-xl font-display font-medium mb-3">Update an Existing Design</h3>
        <p className="mb-6">
          After showcasing these two designs my manager had an idea spark. The quick nature of these concepts could be directly applied to another product undergoing research – Express Lane. My concepts, if utilized correctly could expand the services from the quick-lube subset of shops to any shop with quick services, especially when servicing tires, battery replacements, filter changes, windows, etc.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">The New Vision</h3>
        <p className="mb-6">
          I was now responsible for adding tires and other quick services to Express Lane so that any general shop could benefit from this in-house application.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">The Design Process</h2>
        <h3 className="text-xl font-display font-medium mb-3">Design Sprints & User Research</h3>
        <p className="mb-6">
          We worked in design sprints in this next stage of the process.
        </p>
        
        <p className="mb-6">
          From the outset my manager wanted to ensure at the end of our sprints we had presentable prototypes in high fidelity. Why? Each week we would present the resulting designs to a different enterprise customer.
        </p>
        
        <p className="mb-6">
          As a result we limited to how much work I could complete and refine every week before needing to alter the prototypes.
        </p>
        
        <p className="mb-6">
          This process taught me a lot about the shortcomings and benefits of quickly sprinting within hifi prototypes.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Takeaways – a summary of the full process:</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Early and diverse exploration early on is better than frequently presentable prototypes from the outset.</li>
          <li>Reducing clutter and adding information later is easier than starting with too much data and needing to remove it.</li>
          <li>Unique instances should be used only if there are no usable options in your current designs. Save the time and effort by using existing systems.</li>
          <li>Take management seriously, but not as your conclusive answer. If you can complete their requirements AND produce additional options do so, but always answer their needs first.</li>
        </ul>
        
        <h3 className="text-xl font-display font-medium mb-3">Design Process Snapshots</h3>
        <p className="mb-6">
          Without going into the full design process described above I wanted to capture a few of the sections of the project we spent extra time defining in our exploration.
        </p>
        
        <p className="mb-6">
          The Dashboard – I was initially prompted to only update Express Lane, not re-invision it. If I had the opportunity to redo this process I'd explore early on, even if that meant taking personal time to do so.
        </p>
        
        <p className="mb-6">
          Co-branded Tire Portal – This screen required frequent updates as our tire options expanded. We wanted to explore if we could make this part of our dashboard but eventually decided it needed to exist as a separate externally linked portal.
        </p>
        
        <p className="mb-6">
          Quick Tires – Since all services in this app needed to be quick services, we used a lot of our time iterating on how to include crucial elements of tire purchasing while still enabling users to explore options in front of an inquisitive end customer.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Final Prototypes</h2>
        <h3 className="text-xl font-display font-medium mb-3">Quickly creating orders as a Service Writer</h3>
        <h4 className="text-lg font-medium mb-2">Advance Control</h4>
        <p className="mb-6">
          Service writers create orders for their shops, so additional control is necessary to allow them to engage with customers. Service writers can add and remove services, apply discounts, and edit vehicle information. Only service writers have the ability to complete the transaction.
        </p>
        
        <h4 className="text-lg font-medium mb-2">Category Customization</h4>
        <p className="mb-6">
          Common services for service writers are automatically populated in their primary navigation with detailed views of each service. Tires are a specific category where I added a cobranded portal so that shops can prioritize selling their inventories and still answer customer preferences.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Customizing Access For Technicians</h3>
        <h4 className="text-lg font-medium mb-2">Pertinent Permissions</h4>
        <p className="mb-6">
          Technicians are the main workers in the automotive repair industry, but not all of them are responsible with the shop's customer data or the pricing of services.
        </p>
        
        <p className="mb-6">
          A limited access Express Lane was created so that Technicians could check vehicle specifications, complete work requests, inspect common issues, add simple services, and charge customers for approved services.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Results</h2>
        <h3 className="text-xl font-display font-medium mb-3">Enterprise Partnerships</h3>
        <p className="mb-6">
          For quicklube shop owners, Shopmonkey built in Express Lane as a native experience to their product. As a result, Shopmonkey's Express Lane was featured in B2B strategy meetings to secure strategic partnerships and expand their market reach.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Market Differentiator</h3>
        <p className="mb-6">
          Shopmonkey was the first auto shop management software to offer express services, which became a differentiator between Shopmonkey and competitors. The company received positive reactions at trade shows and in dozens of customer interviews.
        </p>
      </div>
      
      <aside className="md:col-span-4 space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-display text-xl font-medium mb-4">Project Details</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Timeline</h4>
              <p className="text-gray-600">3 Months</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Responsibilities</h4>
              <p className="text-gray-600">User Research, Interaction Design, Experience Design, Visual Design</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Results</h4>
              <p className="text-gray-600">Enterprise partnership for a total of +200 shop locations, worth over $500M</p>
            </div>
          </div>
        </div>
      </aside>
    </ProjectDetailLayout>
  );
};

export default QuickServices;
