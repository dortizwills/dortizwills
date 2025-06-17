import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import { Button } from '@/components/ui/button';

const CampingApp = () => {
  const relatedProjects = [
    {
      title: "Quick Services",
      description: "Reduce checkout times to 2-3 minutes for automotive shops.",
      path: "/product-designs/quick-services",
      image: "/lovable-uploads/2fad7cda-021e-4386-83c6-7b65f6b7d71f.png"
    },
    {
      title: "Gourmet Recipes",
      description: "Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are.",
      path: "/product-designs/gourmet-recipes",
      image: "/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png"
    }
  ];

  return (
    <ProjectDetailLayout 
      title="Camping Made Easy" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
      headerImage="/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png"
      projectDetails={{
        timeline: "3 Months",
        responsibilities: "User Research, User Testing, Project Management, Interaction Design, Experience Design, Visual Design",
        results: "50% increase of interest in camping based on these proposed features and add on purchase options"
      }}
      relatedProjects={relatedProjects}
    >

      {/* Div Block 2 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Background</h2>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            In mid 2023 my brother asked for some advice for his first camping trip. He'd never been before and between all the supply lists, internet articles, and recommendations from other friends he didn't know where to start.
          </p>
          
          <p className="mb-6">
            I've been on dozens of camping trips, led outdoor adventures, and gave expert advice at REI for years. Without guides like myself, most aspiring campers tend to give up after their first camping trip because it was too rough physically, expensive, or delivered an unexpected experience.
          </p>
          
          <p className="mb-6">
            I held these insights in mind as I focused on bridging the knowledge gap between inexperienced campers and their desire to camp. With so many options in the outdoors for camping there really is an experience for everyone, all we have to do is connect the proper dots.
          </p>
        </div>
      </div>
      
      {/* Div Block 3 */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-semibold mb-6">Early Stages</h2>
      </div>
      
      {/* Div Block 4 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Research</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            I wanted to build an MVP for new campers, and this list would be difficult to solve all at once. Using my past decade of interviewing dozens of customers and friends I developed a list of common needs in order to feel comfortable camping.
          </p>
          
          <p className="mb-6">
            I decided to solve the most pressing issues first which were concluded through interviewing some core users.
          </p>
          <p className="mb-6">
            Both lists could all be summarized in that users' need to feel safe, empowered, prepared, and informed about their camping trip.
          </p>
        </div>
      </div>
      
      {/* Div Block Common Questions section 5 */}
      <div className="mb-8 grid grid-cols-3 max-sm:grid-cols-1 gap-8">
        <div className="col-span-1 max-sm:hidden">
          {/* Left div block - empty as specified */}
        </div>
        
        {/* Center div block */}
        <div className="col-span-1">
          <h4 className="font-medium text-lg mb-3">Common Questions Not Initially Solved:</h4>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Where do I go to book a campsite</li>
            <li>Would this be the right campsite for my needs</li>
            <li>What crucial equipment do they need</li>
            <li>Do they have to buy new, used, or can they rent gear</li>
            <li>Do they need a guide</li>
            <li>What do campers do at these campgrounds</li>
          </ul>
        </div>
        
        {/* Right div block */}
        <div className="col-span-1">
          <h4 className="font-medium text-lg mb-3">Questions Following A Core User Base:</h4>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Where should I go to get all my supplies</li>
            <li>How do I use maps or find good trails</li>
            <li>Can I use things from around my house</li>
            <li>Will what I own be enough for me</li>
            <li>What time of the year to camp</li>
            <li>Will I be comfortable out there</li>
          </ul>
        </div>
      </div>
      
      {/* Div Block 7 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">User Personas</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            From my time at REI, the customers that needed the most help were one of the two categories.
          </p>
          <p className="mb-6">
            First, someone who wanted to go outside after or near retirement. It was very common for these customers to want as much advice over even the smallest decisions so they could comfortably purchase an item knowing it would last beyond the trips and into daily life.
          </p>
          <div className="mb-6">
            <img 
              src="/lovable-uploads/5b5c0b7d-e722-4bd6-9069-e1385b3307ab.png" 
              alt="Retirement Camper Profile" 
              className="w-full rounded-lg"
            />
          </div>
          <p className="mb-6">
            Second, individuals who had seen picturesque locations from social media and wanted to visit those locations themselves. These individuals were younger and eager to take the first piece of advice as justification for their next decision. "I thought so" and "couldn't I just do this instead" were some of their most common phrases.
          </p>
          <div className="mb-6">
            <img 
              src="/lovable-uploads/1e0c747e-827b-4f40-9335-86f42378a799.png" 
              alt="Young Camper Profile" 
              className="w-full rounded-lg"
            />
          </div>
          <p className="mb-6">
            In this application I needed to balance the quality and quantity of information, as a poor camping experience often guarantees people rarely camping again.
          </p>
        </div>
      </div>
      
      {/* Div Block 8 */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-semibold mb-6">Validation Process</h2>
      </div>
      
      {/* Div Block 9 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">User Flows</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            In my initial corrections, I decided to use some low fidelity prototypes to take users through a guided process instead of placing them immediately into the app. This made them feel more in control of their camping decisions, but they still had too many decisions to make upfront – so I added a skip option to investigate further on the app.
          </p>
          <div className="mb-8">
            <img 
            src="/lovable-uploads/19fdb0d4-d567-4c78-8ca0-7a3c8dd939e3.png" 
            alt="Flow 3" 
            className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Div Block 11 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">The Second Iteration</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            I changed the activity users started on so the base activity was more clear and simple.
            Initially I set up users with Backpacking, a more complicated version of camping – Now they would start simply with camping. I began adding fidelity for users to understand new information and additional options.
          </p>
          <img 
            src="/lovable-uploads/7ee7e5de-82c4-4eef-951d-5fad478f3f12.png" 
            alt="Flow 4" 
            className="w-full rounded-lg"
          />
          <img 
            src="/lovable-uploads/113eed40-b2fc-4f3c-b070-046f7b0b6f3e.png" 
            alt="Flow 5" 
            className="w-full rounded-lg"
          />
        </div>
      </div>
      
      {/* Div Block 13 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Third Round Adjustments</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            I noticed my testers continuing to struggle with gear requirements and campsite details. Especially where the were camping and what to expect while there, critical pieces for users to enjoy a new experience.
          </p>
          
          <p className="mb-6">
            I decided to include options where they could rent gear. Directly followed by adding additional options to inspect their campsite's activities, events, and wildlife.
          </p>
          <img 
            src="/lovable-uploads/0f714717-7265-4d98-a8b3-c38229e4c303.png" 
            alt="Flow 6" 
            className="w-full rounded-lg"
          />
          <img 
            src="/lovable-uploads/0f714717-7265-4d98-a8b3-c38229e4c303.png" 
            alt="Flow 6" 
            className="w-full rounded-lg"
          />
        </div>
      </div>
      
      {/* Div Block 15 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-6">Revised User Flow</h2>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            In this version of the app the core path required more information than I initially placed for our users. By including the information, I adjusted from my initial map below to the updated version so that users could be well prepared for their trips.
          </p>
            <img 
              src="/lovable-uploads/9964ce92-2dc6-4f32-af81-8bd549efddff.png" 
              alt="Revised User Flow" 
              className="w-full rounded-lg mb-6" 
            />
        </div>
      </div>
      
      {/* Div Block 16 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Primary Happy Path</h3>
        </div> {/* Fixed: Corrected the div structure - added closing div and reopened */}
        <div className="col-span-2 max-sm:col-span-1"> {/* Fixed: Added col-span-2 to match grid layout */}
          <p className="mb-6">
            After discussing with my users I wanted them to experience booking from start to finish. I retested initial users of the app in the desire to see if their initial hesitations with the app were solved. For some the majority of issues were resolved.
          </p>
          
          <p className="mb-6">
            Other users wondered what they could do if they really liked camping. For these users I added a few extra screens that would be off the main path, but still easily discovered.
          </p>
        </div>
      </div>
      
      {/* Div Block 17 */}
      <div className="mb-8 grid grid-cols-3 max-sm:grid-cols-1 gap-6">
        <div>
          <img 
            src="/lovable-uploads/e4cb5e04-932a-4cec-a11a-025d4ca49b57.png" 
            alt="Primary Happy Path 1" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img 
            src="/lovable-uploads/a8eec845-50aa-4716-9b80-8f5a8a309e98.png" 
            alt="Primary Happy Path 2" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img 
            src="/lovable-uploads/22e5ca9f-afce-4241-95aa-3facf215b670.png" 
            alt="Primary Happy Path 3" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      {/* Div Block 18 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3"></h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1"> {/* Fixed: Added col-span-2 to match grid layout */}
          <p className="mb-6">
            When I included a path for returning campers it was a good solution for those campers who wanted to reuse gear or revisit prior experiences. I also opened up opportunities for future rounds of monetization by including a method for campers to buy their previously used gear.
          </p>
        </div>
      </div>
      
      {/* Div Block 19 */}
      <div className="mb-12 flex justify-center">
        <Button asChild variant="outline" className="justify-center py-6 text-lg bg-gradient-primary text-white border-none hover:opacity-90">
          <a href="https://www.figma.com/proto/RWOm8RhqptNmVxQ3KsYFMx/Camp-Buddy---Daniel-OW?page-id=81%3A4737&type=design&node-id=348-11276&viewport=217%2C412%2C0.05&t=mNk80I28YTifUCHh-1&scaling=scale-down&starting-point-node-id=348%3A11276&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
          View Prototype
          </a>
        </Button>
      </div>
      
      {/* Div Block 20 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-6">Final App Designs</h2>
        </div>
        <div className="col-span-2 max-sm:col-span-1"> {/* Fixed: Added col-span-2 to match grid layout */}
          <p className="mb-6">
            From all the information I received over my app, I decided that it was time for final designs. The focus at this stage was to ensure I demonstrated the core of my user's needs –customization and information.
          </p>
        </div>
      </div>
      
      {/* Div Block 21 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">User Need 1: Customization</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1"> {/* Fixed: Added col-span-2 to match grid layout */}
          <p className="mb-6">
            People choose to camp for their own unique reasons. I decided the ability to prioritize user preferences was paramount for users to find a camping experience they enjoyed. I included reviews, similar experiences, and individually tailored experiences to allow campers to enjoy outside on their own terms.
          </p>
        </div>
      </div>
      
      {/* Div Block 22 */}
      <div className="mb-12">
        <img 
          src="/lovable-uploads/47fd638a-9fcb-40ad-8bbd-0160ee8fd41d.png" 
          alt="Screens 1" 
          className="w-full rounded-lg"
        />
      </div>
      
      {/* Div Block 23 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">User Need 2: Information</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1"> {/* Fixed: Added col-span-2 to match grid layout */}
          <p className="mb-6">
            It's hard to enjoy something when you know very little about it. Users seemed more interested in camping when they found out what they could expect when they were there and what it would look like for them to enjoy themselves. I added more opportunities for users to be informed and because of that they seemed ready to participate in new camping experiences.
          </p>
        </div>
      </div>
      
      {/* Div Block 24 */}
      <div className="mb-12">
        <img 
          src="/lovable-uploads/ef2d6855-1b78-4162-84b9-0df17a370e80.png" 
          alt="Screens 2" 
          className="w-full rounded-lg"
        />
      </div>
      
      {/* Div Block 25 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Final Booking Demonstration</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1"> {/* Fixed: Added col-span-2 to match grid layout */}
          <p className="mb-6">
            I recorded a final version of my app for ease of viewing, especially demonstrating how users could expect to book their first experience for camping. You can view additional paths to explore in my prototype linked below this video.
          </p>
        </div>
      </div>

      
      {/* Div Block 26 */}
      <div className="mb-12 grid grid-cols-3 max-sm:grid-cols-1 gap-6">
        <div>
          <img 
            src="/lovable-uploads/12265694-4a18-410f-89a6-9881d31681e8.png" 
            alt="Final Booking Demo 1" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="bg-designer-gray rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Demo video coming soon</p>
        </div>
        <div>
          <img 
            src="/lovable-uploads/f68824b8-f1be-48ba-893c-6197e79fad50.png" 
            alt="Final Booking Demo 2" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      {/* Div Block 19 */}
      <div className="mb-12 flex justify-center">
        <Button asChild variant="outline" className="justify-center py-6 text-lg bg-gradient-primary text-white border-none hover:opacity-90">
          <a href="https://www.figma.com/proto/RWOm8RhqptNmVxQ3KsYFMx/Camp-Buddy---Daniel-OW?page-id=81%3A4737&type=design&node-id=348-11276&viewport=217%2C412%2C0.05&t=mNk80I28YTifUCHh-1&scaling=scale-down&starting-point-node-id=348%3A11276&show-proto-sidebar=1&mode=design" target="_blank" rel="noopener noreferrer">
          View Prototype
          </a>
        </Button>
      </div>
      
      
      {/* Div Block 27 */}
      <div className="mb-8">
        <h2 className="text-2xl font-display font-semibold mb-6">Results</h2>
      </div>
      
      {/* Div Block 9 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Increased New Camper Interest</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            By offering booking experiences for both seasoned and novice campers Camp Buddy received positive reviews following my user research group. Over half of interviewed users expressed interest in renting gear with an option to buy, especially if they used the same gear over multiple campsite trips.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">New User Access</h3>
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <p className="mb-6">
            At the start, I knew I'd need to engage every type of user to be successful. My work ensures that regardless of income, experience levels, age, or diversity campers can forgo their reservations and enjoy the outdoors. After conducting interviews I found this was the only time my users had even considered camping and I was credited with bringing a new level of access to camping for them.
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default CampingApp;
