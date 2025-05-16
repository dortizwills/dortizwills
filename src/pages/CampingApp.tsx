
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

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
      {/* Background */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-display font-semibold mb-4">Background</h2>
        </div>
        <div className="md:col-span-8">
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
      
      {/* Early Stages */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-display font-semibold mb-4">Early Stages</h2>
        </div>
        <div className="md:col-span-8"></div>
      </div>
      
      {/* Research */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">Research</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            I wanted to build an MVP for new campers, and this list would be difficult to solve all at once. Using my past decade of interviewing dozens of customers and friends I developed a list of common needs in order to feel comfortable camping.
          </p>
          
          <p className="mb-6">
            I decided to solve the most pressing issues first which were concluded through interviewing some core users.
          </p>
        </div>
      </div>
      
      {/* Common Questions Lists */}
      <div className="grid grid-cols-3 gap-8 mb-6">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Common Questions Not Initially Solved:</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Where do I go to book a campsite</li>
            <li>Would this be the right campsite for my needs</li>
            <li>What crucial equipment do they need</li>
            <li>Do they have to buy new, used, or can they rent gear</li>
            <li>Do they need a guide</li>
            <li>What do campers do at these campgrounds</li>
          </ul>
        </div>
        
        <div className="col-span-1">
          {/* Empty column for spacing */}
        </div>
        
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Questions Following A Core User Base:</h3>
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
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4"></div>
        <div className="md:col-span-8">
          <p className="mb-6">
            Both lists could all be summarized in that users' need to feel safe, empowered, prepared, and informed about their camping trip.
          </p>
        </div>
      </div>
      
      {/* User Personas */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">User Personas</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            From my time at REI, the customers that needed the most help were one of the two categories.
          </p>
          
          <p className="mb-6">
            First, someone who wanted to go outside after or near retirement. It was very common for these customers to want as much advice over even the smallest decisions so they could comfortably purchase an item knowing it would last beyond the trips and into daily life.
          </p>
          
          <img 
            src="/lovable-uploads/112db372-d066-4b66-8f61-19cf564871e0.png" 
            alt="User Type 1" 
            className="w-full rounded-lg mb-6"
          />
          
          <p className="mb-6">
            Second, individuals who had seen picturesque locations from social media and wanted to visit those locations themselves. These individuals were younger and eager to take the first piece of advice as justification for their next decision. "I thought so" and "couldn't I just do this instead" were some of their most common phrases.
          </p>
          
          <img 
            src="/lovable-uploads/e42cd4b2-07e9-443e-9556-8ac4ea46885a.png" 
            alt="User Type 2" 
            className="w-full rounded-lg mb-6"
          />
          
          <p className="mb-6">
            In this application I needed to balance the quality and quantity of information, as a poor camping experience often guarantees people rarely camping again.
          </p>
        </div>
      </div>
      
      {/* Validation Process */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-display font-semibold mb-4">Validation Process</h2>
        </div>
        <div className="md:col-span-8"></div>
      </div>
      
      {/* User Flows */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">User Flows</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            In my initial corrections, I decided to use some low fidelity prototypes to take users through a guided process instead of placing them immediately into the app. This made them feel more in control of their camping decisions, but they still had too many decisions to make upfront – so I added a skip option to investigate further on the app.
          </p>
          
          <img 
            src="/lovable-uploads/ad9cf714-4c54-4cf5-b40e-7892d133a173.png" 
            alt="Flow 2" 
            className="w-full rounded-lg mb-6"
          />
        </div>
      </div>
      
      {/* The Second Iteration */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">The Second Iteration</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            I changed the activity users started on so the base activity was more clear and simple.
          </p>
          
          <p className="mb-6">
            Initially I set up users with Backpacking, a more complicated version of camping – Now they would start simply with camping. I began adding fidelity for users to understand new information and additional options.
          </p>
          
          <img 
            src="/lovable-uploads/cfca559b-a83a-4e98-b8bf-7f8f2ea26e1b.png" 
            alt="Flow 3" 
            className="w-full rounded-lg mb-6"
          />
          
          <img 
            src="/lovable-uploads/471c98eb-8c84-4a3d-8e76-54fd65b443e7.png" 
            alt="Flow 4" 
            className="w-full rounded-lg mb-6"
          />
        </div>
      </div>
      
      {/* Third Round Adjustments */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">Third Round Adjustments</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            I noticed my testers continuing to struggle with gear requirements and campsite details. Especially where the were camping and what to expect while there, critical pieces for users to enjoy a new experience.
          </p>
          
          <p className="mb-6">
            I decided to include options where they could rent gear. Directly followed by adding additional options to inspect their campsite's activities, events, and wildlife.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <img 
              src="/lovable-uploads/308883e4-ee5a-4e79-86ed-81989f746ea3.png" 
              alt="Flow 5" 
              className="w-full rounded-lg"
            />
            
            <img 
              src="/lovable-uploads/6c24665f-aab9-4810-900f-aef17606661d.png" 
              alt="Flow 6" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Revised User Flow */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-display font-semibold mb-4">Revised User Flow</h2>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            In this version of the app the core path required more information than I initially placed for our users. By including the information, I adjusted from my initial map below to the updated version so that users could be well prepared for their trips.
          </p>
          
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mb-6">
            <p className="text-gray-600">Revised user flow gif (placeholder)</p>
          </div>
        </div>
      </div>
      
      {/* Primary Happy Path */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">Primary Happy Path</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            After discussing with my users I wanted them to experience booking from start to finish. I retested initial users of the app in the desire to see if their initial hesitations with the app were solved. For some the majority of issues were resolved.
          </p>
          
          <p className="mb-6">
            Other users wondered what they could do if they really liked camping. For these users I added a few extra screens that would be off the main path, but still easily discovered.
          </p>
        </div>
      </div>
      
      {/* Happy Path Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div>
          <img 
            src="/lovable-uploads/d6c8c1cf-98b7-4c44-8158-aab52f237774.png" 
            alt="Primary Happy Path 1" 
            className="w-full rounded-lg h-auto"
          />
        </div>
        <div>
          <img 
            src="/lovable-uploads/1133f700-0b9a-4185-8767-6c7093f1717c.png" 
            alt="Primary Happy Path 2" 
            className="w-full rounded-lg h-auto"
          />
        </div>
        <div>
          <img 
            src="/lovable-uploads/68f0c5d6-dc72-463d-a9ab-40218d3e5743.png" 
            alt="Primary Happy Path 3"
            className="w-full rounded-lg h-auto"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4"></div>
        <div className="md:col-span-8">
          <p className="mb-6">
            When I included a path for returning campers it was a good solution for those campers who wanted to reuse gear or revisit prior experiences. I also opened up opportunities for future rounds of monetization by including a method for campers to buy their previously used gear.
          </p>
          
          <Button className="bg-designer-red hover:bg-red-700 text-white flex items-center gap-2 mb-6">
            <a 
              href="https://www.figma.com/proto/RWOm8RhqptNmVxQ3KsYFMx/Camp-Buddy---Daniel-OW?page-id=81%3A4737&type=design&node-id=348-11276&viewport=217%2C412%2C0.05&t=mNk80I28YTifUCHh-1&scaling=scale-down&starting-point-node-id=348%3A11276&show-proto-sidebar=1&mode=design"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Prototype
            </a>
          </Button>
        </div>
      </div>
      
      {/* Final App Designs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-display font-semibold mb-4">Final App Designs</h2>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            From all the information I received over my app, I decided that it was time for final designs. The focus at this stage was to ensure I demonstrated the core of my user's needs –customization and information.
          </p>
        </div>
      </div>
      
      {/* User Need 1: Customization */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">User Need 1: Customization</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            People choose to camp for their own unique reasons. I decided the ability to prioritize user preferences was paramount for users to find a camping experience they enjoyed. I included reviews, similar experiences, and individually tailored experiences to allow campers to enjoy outside on their own terms.
          </p>
          
          <img 
            src="/lovable-uploads/9a2721f6-1854-4578-ae43-fd1bfabd53e9.png" 
            alt="Screens 1" 
            className="w-full rounded-lg mb-6"
          />
        </div>
      </div>
      
      {/* User Need 2: Information */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">User Need 2: Information</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            It's hard to enjoy something when you know very little about it. Users seemed more interested in camping when they found out what they could expect when they were there and what it would look like for them to enjoy themselves. I added more opportunities for users to be informed and because of that they seemed ready to participate in new camping experiences.
          </p>
          
          <img 
            src="/lovable-uploads/82fedfd8-1640-417b-9643-76dcaf6c497e.png" 
            alt="Screens 2" 
            className="w-full rounded-lg mb-6"
          />
        </div>
      </div>
      
      {/* Final Booking Demonstration */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">Final Booking Demonstration</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            I recorded a final version of my app for ease of viewing, especially demonstrating how users could expect to book their first experience for camping. You can view additional paths to explore in my prototype linked below this video.
          </p>
        </div>
      </div>
      
      {/* Final Booking Demo Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div>
          <img 
            src="/lovable-uploads/accda05d-e78c-44e0-93a6-0edcebb4cc4e.png" 
            alt="Final Booking Demo 1" 
            className="w-full rounded-lg h-auto"
          />
        </div>
        <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
          <p className="text-gray-600">Demo Image (placeholder for video)</p>
        </div>
        <div>
          <img 
            src="/lovable-uploads/b408b052-f1d0-47b4-9c5f-4a7a8b42b4c2.png" 
            alt="Final Booking Demo 2"
            className="w-full rounded-lg h-auto"
          />
        </div>
      </div>
      
      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-display font-semibold mb-4">Results</h2>
        </div>
        <div className="md:col-span-8"></div>
      </div>
      
      {/* Increased New Camper Interest */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">Increased New Camper Interest</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            By offering booking experiences for both seasoned and novice campers Camp Buddy received positive reviews following my user research group. Over half of interviewed users expressed interest in renting gear with an option to buy, especially if they used same gear over multiple campsite trips.
          </p>
        </div>
      </div>
      
      {/* New User Access */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h3 className="text-xl font-display font-medium mb-3">New User Access</h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6">
            At the start, I knew I'd need to engage every type of user to be successful. My work ensures that regardless of income, experience levels, age, or diversity campers can forgo their reservations and enjoy the outdoors. After conducting interviews I found this was the only time my users had even considered camping and I was credited with bringing a new level of access to camping for them.
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default CampingApp;
