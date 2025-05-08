
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const GourmetRecipes = () => {
  const relatedProjects = [
    {
      title: "Camping Made Easy",
      description: "Camping shouldn't be hard, or that's what this app helps users to think.",
      path: "/product-designs/camping-app",
      image: "/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png"
    },
    {
      title: "Quick Services",
      description: "Reduce checkout times to 2-3 minutes, because quick service transactions shouldn't take 10-15 minutes.",
      path: "/product-designs/quick-services",
      image: "/lovable-uploads/2fad7cda-021e-4386-83c6-7b65f6b7d71f.png"
    }
  ];
  
  return (
    <ProjectDetailLayout 
      title="Gourmet Recipes Anytime" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
      headerImage="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png"
      projectDetails={{
        timeline: "2 Months",
        responsibilities: "User Research, User Testing, Project Management, Interaction Design, Experience Design, Visual Design",
        results: "15% increase of interest for Blue Apron if these proposed features are included."
      }}
      relatedProjects={relatedProjects}
    >
      <div>
        <h2 className="text-2xl font-display font-semibold mb-4">Background</h2>
        <h3 className="text-xl font-display font-medium mb-3">Research</h3>
        <h3 className="text-xl font-display font-medium mb-3">User Persona</h3>
        <h3 className="text-xl font-display font-medium mb-3">Sketches / Iterations</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Validation Process</h2>
        <h3 className="text-xl font-display font-medium mb-3">Early User Flows</h3>
        <h3 className="text-xl font-display font-medium mb-3">The Second Iteration</h3>
        <h3 className="text-xl font-display font-medium mb-3">Change of Direction</h3>
        <h3 className="text-xl font-display font-medium mb-3">Third Round Adjustments</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Final App Designs</h2>
        <h3 className="text-xl font-display font-medium mb-3">User Need 1: Intelligent Searches</h3>
        <h3 className="text-xl font-display font-medium mb-3">User Need 2: Convenience</h3>
        
        <h2 className="text-2xl font-display font-semibold mt-10 mb-4">Results</h2>
        <h3 className="text-xl font-display font-medium mb-3">Increased Interest</h3>
        <h3 className="text-xl font-display font-medium mb-3">Trusting the Consumer</h3>
      </div>
      
      <div>
        <p className="mb-6">
          Let's pretend for a second you're at home and suddenly your friend calls to say they're be there in an hour and are elated to enjoy your home cooking. There's one problem, you got the date wrong and in one mortifying instance you see there's almost no food in your fridge.
        </p>
        
        <p className="mb-6">
          You see only a few ingredients and remember ordering out isn't an option for these friends, they have way too many dietary restrictions. How would you find a quality recipe that includes all their dietary needs? What if Blue Apron offered a solution? Let's imagine you could have a Blue Apron meal ready in the time it takes to drive from one house to another.
        </p>
        
        <p className="mb-8">
          In this case study, I analyzed Blue Apron's app to build a solution accessible to everyone including people with special diets, allergies, small or big eaters, and those low on time while delivering gourmet meals to all.
        </p>
        
        <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Blue Apron App" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          I was first introduced to Blue Apron when a relative of mine ordered a pre-made meal plan. I have a number of friends and I myself have dietary restrictions, and I stumbled across their app when I was wanting to try a new recipe to try out.
        </p>
        
        <p className="mb-6">
          After some time interacting with the app, I had a few misgivings that I was eager to solve because I saw the value of their recipes. I analyzed Blue Apron's on iOS and tried to understand their unique selling position. I listed pain points depending on users' needs. I then conducted a competitive analysis to find out how some competitors are addressing the same issues.
        </p>
        
        <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="User Persona" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          I developed a user-persona for the specific user I wanted to target – the busy working class. I took care to document their frustrations and pain points and I made sure to include potential solutions for those pain points. I use personas because they're effective at understanding the broader audience of potential users, especially if researched properly.
        </p>
        
        <p className="mb-3">
          I used pencil and paper to develop multiple concepts and chose the best ones to test against each other.
        </p>
        
        <p className="mb-3">
          Although some designs were unique I tried to stick to best practices as I entered the prototype and user tested portions of my research.
        </p>
        
        <p className="mb-6">
          I notice that users are primed for success when they understand a concept based on prior experiences instead of presenting them entirely new concepts from the beginning of my research.
        </p>
        
        <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Sketches" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          I used 2 low fidelity paths for these concepts and asked a few users to test and describe what they appreciated most out of each path. The first, in the new lower nav would allow users to add filters or search freely. The second would guide users in a more structured path where they only make small decisions at a time.
        </p>
        
        <p className="mb-3">
          In my two initial concepts I focused on adding a lower navigational button for "quick" services and altering the "upcoming" section to a "delivery" tab.
        </p>
        
        <p className="mb-3">
          The rational was this new feature should be easily discovered when users needed to discover it under stress. My interviews instead revealed that a delivery option is so opposite of why users came to the app that I had to scrap it as a surfaced feature.
        </p>
        
        <p className="mb-6">
          I still saw the value in a delivery option so would attempt to weave it into the userflow at a later, noncritical point.
        </p>
        
        <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="User Flows" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          After my users' research, I decided that it was time for final designs. The new focus at this stage was to demonstrate to my core audience how they could rely on Blue Apron for catered and convenient recipes.
        </p>
        
        <p className="mb-6">
          Under stress people want to find recipes they're comfortable making, but users aren't always stressed when they cook. I made this revised user flow flexible so that users would be drawn to search for recipes whether they wanted to try something new or something convenient.
        </p>
        
        <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Final Screens" className="w-full rounded-lg mb-10" />
        
        <p className="mb-6">
          I surveyed users at the beginning and conclusion of my project about their willingness to use Blue Apron's services. By adding this feature prior and new users expressed a 30% increase in their likelihood to use the service.
        </p>
        
        <p className="mb-6">
          I understand that when monetary commitment is involved, it changes the actual likelihood by about half, but a realistic 15% increase in users is still an enticing prospect for a company as large as Blue Apron.
        </p>
      </div>
    </ProjectDetailLayout>
  );
};

export default GourmetRecipes;
