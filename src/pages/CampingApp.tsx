
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

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
      <div className="md:col-span-8">
        <h2 className="text-2xl font-display font-semibold mb-4">Background</h2>
        <p className="mb-6">
          In mid 2023 my brother asked for some advice for his first camping trip. He'd never been before and between all the supply lists, internet articles, and recommendations from other friends he didn't know where to start.
        </p>
        
        <p className="mb-6">
          I've been on dozens of camping trips, led outdoor adventures, and gave expert advice at REI for years. Without guides like myself, most aspiring campers tend to give up after their first camping trip because it was too rough physically, expensive, or delivered an unexpected experience.
        </p>
        
        <p className="mb-6">
          I held these insights in mind as I focused on bridging the knowledge gap between inexperienced campers and their desire to camp. With so many options in the outdoors for camping there really is an experience for everyone, all we have to do is connect the proper dots.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Early Stages</h2>
        <h3 className="text-xl font-display font-medium mb-3">Research</h3>
        <p className="mb-6">
          I wanted to build an MVP for new campers, and this list would be difficult to solve all at once. Using my past decade of interviewing dozens of customers and friends I developed a list of people need in order to feel comfortable camping.
        </p>
        
        <p className="mb-6">
          I decided to solve the most pressing issues first which were concluded through interviewing some core users.
        </p>
        
        <p className="mb-6">
          Below is a list of common questions my app would not be solving initially:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Where do I go to book a campsite</li>
          <li>Would this be the right campsite for my needs</li>
          <li>What crucial equipment do they need</li>
          <li>Do they have to buy new, used, or can they rent gear</li>
          <li>Do they need a guide</li>
          <li>What do campers do at these campgrounds</li>
        </ul>
        
        <p className="mb-6">
          Following are additional questions that would be important to answer after a core user base was established:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Where should I go to get all my supplies</li>
          <li>How do I use maps or find good trails</li>
          <li>Can I use things from around my house</li>
          <li>Will what I own be enough for me</li>
          <li>What time of the year to camp</li>
          <li>Will I be comfortable out there</li>
        </ul>
        
        <p className="mb-6">
          Both lists could all be summarized in that users' need to feel safe, empowered, prepared, and informed about their camping trip.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">User Profiles</h2>
        <p className="mb-6">
          From my time at REI, the customers that needed the most help were one of the two categories.
        </p>
        
        <p className="mb-6">
          First, someone who wanted to go outside after or near retirement. It was very common for these customers to want as much advice over even the smallest decisions so they could comfortably purchase an item knowing it would last beyond the trips and into daily life.
        </p>
        
        <p className="mb-6">
          Second, individuals who had seen picturesque locations from social media and wanted to visit those locations themselves. These individuals were younger and eager to take the first piece of advice as justification for their next decision. "I thought so" and "couldn't I just do this instead" were some of their most common phrases.
        </p>
        
        <p className="mb-6">
          In this application I needed to balance the quality and quantity of information, as a poor camping experience often guarantees people rarely camping again.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Validation Process</h2>
        <h3 className="text-xl font-display font-medium mb-3">User Flows</h3>
        <p className="mb-6">
          In my initial corrections, I decided to use some low fidelity prototypes to take users through a guided process instead of placing them immediately into the app. This made them feel more in control of their camping decisions, but they still had too many decisions to make upfront – so I added a skip option to investigate further on the app.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">The Second Iteration</h3>
        <p className="mb-6">
          I changed the activity users started on so the base activity was more clear and simple.
        </p>
        
        <p className="mb-6">
          Initially I set up users with Backpacking, a more complicated version of camping – Now they would start simply with camping. I began adding fidelity for users to understand new information and additional options.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Third Round Adjustments</h3>
        <p className="mb-6">
          I noticed my testers continuing to struggle with gear requirements and campsite details. Especially where the were camping and what to expect while there, critical pieces for users to enjoy a new experience.
        </p>
        
        <p className="mb-6">
          I decided to include options where they could rent gear. Directly followed by adding additional options to inspect their campsite's activities, events, and wildlife.
        </p>
        
        <p className="mb-6">
          My users seemed to be pleased with this version of the app but they still struggled with finding the rental option for the campsites. They didn't know it was nested within their selected campsite.
        </p>
        
        <p className="mb-6">
          Using the gathered findings from this iteration of the app I decided there was enough information to finalize the core user flows.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Revised User Flow</h2>
        <p className="mb-6">
          In this version of the app the core path required more information than I initially placed for our users. By including the information, I adjusted from my initial map below to the updated version so that users could be well prepared for their trips.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Primary Happy Path</h2>
        <p className="mb-6">
          After discussing with my users I wanted them to experience booking from start to finish. I retested initial users of the app in the desire to see if their initial hesitations with the app were solved. For some the majority of issues were resolved.
        </p>
        
        <p className="mb-6">
          Other users wondered what they could do if they really liked camping. For these users I added a few extra screens that would be off the main path, but still easily discovered.
        </p>
        
        <p className="mb-6">
          When I included a path for returning campers it was a good solution for those campers who wanted to reuse gear or revisit prior experiences. I also opened up opportunities for future rounds of monetization by including a method for campers to buy their previously used gear.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Final App Designs</h2>
        <p className="mb-6">
          From all the information I received over my app, I decided that it was time for final designs. The focus at this stage was to ensure I demonstrated the core of my user's needs –customization and information.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">User Need 1: Customization</h3>
        <p className="mb-6">
          People choose to camp for their own unique reasons. I decided the ability to prioritize user preferences was paramount for users to find a camping experience they enjoyed. I included reviews, similar experiences, and individually tailored experiences to allow campers to enjoy outside on their own terms.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">User Need 2: Information</h3>
        <p className="mb-6">
          It's hard enjoy something when you know very little about it. Users seemed more interested in camping when they found out what they could expect when they were there and what it would look like for them to enjoy themselves. I added more opportunities for users to be informed and because of that they seemed ready to participate in new camping experiences.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Final Booking Demonstration</h3>
        <p className="mb-6">
          I recorded a final version of my app for ease of viewing, especially demonstrating how users could expect to book their first experience for camping. You can view additional paths to explore in my prototype linked below this video.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Results</h2>
        <h3 className="text-xl font-display font-medium mb-3">Increased Interest</h3>
        <p className="mb-6">
          By offering booking experiences for both seasoned and novice campers Camp Buddy received positive reviews following my user research group. Over half of interviewed users expressed interest in renting gear with an option to buy, especially if they used same gear over multiple campsite trips.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">New Experiences</h3>
        <p className="mb-6">
          At the start, I knew I'd need to engage every type of user to be successful. My work ensures that regardless of income, experience levels, age, or diversity campers can forgo their reservations and enjoy the outdoors. After conducting interviews I found this was the only time my users had even considered camping and I was credited with bringing a new level of access to camping for them.
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
              <p className="text-gray-600">User Research, User Testing, Project Management, Interaction Design, Experience Design, Visual Design</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Results</h4>
              <p className="text-gray-600">50% increase of interest in camping based on these proposed features and add on purchase options</p>
            </div>
          </div>
        </div>
      </aside>
    </ProjectDetailLayout>
  );
};

export default CampingApp;
