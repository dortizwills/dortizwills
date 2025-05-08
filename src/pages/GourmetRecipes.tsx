
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';

const GourmetRecipes = () => {
  return (
    <ProjectDetailLayout 
      title="Gourmet Recipes Anytime" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
    >
      <div className="md:col-span-8">
        <img 
          src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" 
          alt="Blue Apron App" 
          className="w-full rounded-lg mb-8"
        />
        
        <h2 className="text-2xl font-display font-semibold mb-4">Background</h2>
        <p className="mb-6">
          Let's pretend for a second you're at home and suddenly your friend calls to say they're be there in an hour and are elated to enjoy your home cooking. There's one problem, you got the date wrong and in one mortifying instance you see there's almost no food in your fridge.
        </p>
        
        <p className="mb-6">
          You see only a few ingredients and remember ordering out isn't an option for these friends, they have way too many dietary restrictions. How would you find a quality recipe that includes all their dietary needs? What if Blue Apron offered a solution? Let's imagine you could have a Blue Apron meal ready in the time it takes to drive from one house to another.
        </p>
        
        <p className="mb-8">
          In this case study, I analyzed Blue Apron's app to build a solution accessible to everyone including people with special diets, allergies, small or big eaters, and those low on time while delivering gourmet meals to all.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Early Stages</h2>
        <h3 className="text-xl font-display font-medium mb-3">Research</h3>
        <p className="mb-6">
          I was first introduced to Blue Apron when a relative of mine ordered a pre-made meal plan. I have a number of friends and I myself have dietary restrictions, and I stumbled across their app when I was wanting to try a new recipe to try out.
        </p>
        
        <p className="mb-6">
          After some time interacting with the app, I had a few misgivings that I was eager to solve because I saw the value of their recipes. I analyzed Blue Apron's on iOS and tried to understand their unique selling position. I listed pain points depending on users' needs. I then conducted a competitive analysis to find out how some competitors are addressing the same issues.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">User Persona</h3>
        <p className="mb-6">
          I developed a user-persona for the specific user I wanted to target – the busy working class. I took care to document their frustrations and pain points and I made sure to include potential solutions for those pain points. I use personas because they're effective at understanding the broader audience of potential users, especially if researched properly.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Sketches / Iterations</h3>
        <p className="mb-3">
          I used pencil and paper to develop multiple concepts and chose the best ones to test against each other.
        </p>
        
        <p className="mb-3">
          Although some designs were unique I tried to stick to best practices as I entered the prototype and user tested portions of my research.
        </p>
        
        <p className="mb-6">
          I notice that users are primed for success when they understand a concept based on prior experiences instead of presenting them entirely new concepts from the beginning of my research.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Validation Process</h2>
        <h3 className="text-xl font-display font-medium mb-3">Early User Flows</h3>
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
        
        <h3 className="text-xl font-display font-medium mb-3">The Second Iteration</h3>
        <p className="mb-3">
          For this stage I wanted to test a smart search feature against early filtering. I also included delivery within the primary user path, forcing users to decide if they wanted to deliver ingredients to their home or not. That decision led to a noticeable amount of frustration.
        </p>
        
        <p className="mb-6">
          It soon became evident, I had focused on too many secondary features to the extent I found the results inconclusive on the features I was actually trying to test.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Change of Direction</h3>
        <p className="mb-6">
          My revised path would allow these tertiary features to be skipped so that the primary path was not inhibited by my desires to see a particular path succeed. Instead the users' preferred search method would now inform which method of finding a unique recipe.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Third Round Adjustments</h3>
        <p className="mb-6">
          In my next iterations I limited my prototype fidelity to focus on a direct A/B test. The focus – which version of smart search do users prefer?
        </p>
        
        <h4 className="text-lg font-medium mb-2">1. Guided Filters</h4>
        <p className="mb-6">
          In this version users enter a guided path where complexity is added incrementally. Each step adds another layer of filtration to limit the overwhelming number of quality recipes they can choose for themselves.
        </p>
        
        <h4 className="text-lg font-medium mb-2">2. Smart Search</h4>
        <p className="mb-6">
          Or a single search bar where anything can be added. Users could search for anything in the search bar including time, culinary preferences, diets, and more. All they had to do was include it within their search and watch the results update.
        </p>
        
        <p className="mb-6">
          My users seemed to prefer the smart search feature where they could add any ingredient, recipe title, or cuisine style they wanted. However, they did not intuit they could also search by prep time, delivery options, or by including/excluding specific ingredients to their recipe; these actions were far easier to complete in the smart filters version.
        </p>
        
        <p className="mb-6">
          Using the insights from this iteration I decided to combine the best aspects of both user flows into one final path.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Final App Designs</h2>
        <p className="mb-6">
          After my users' research, I decided that it was time for final designs. The new focus at this stage was to demonstrate to my core audience how they could rely on Blue Apron for catered and convenient recipes.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">User Need 1: Intelligent Searches</h3>
        <p className="mb-6">
          Under stress people want to find recipes they're comfortable making, but users aren't always stressed when they cook. I made this revised user flow flexible so that users would be drawn to search for recipes whether they wanted to try something new or something convenient.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">User Need 2: Convenience</h3>
        <p className="mb-3">
          It's hard enjoy something when the perceived cost is more than benefit. When people order from Blue Apron the promise is that they'll have a gourmet meal without the pain of a drawn out cooking experience.
        </p>
        
        <p className="mb-6">
          I made delivery a backup plans for users, just in case they were at a gap between orders or simply forgot to prepare a meal. This safety net made each user feel safer knowing that even if they forgot to order a meal plan, they could still have a quality meal at a moment's notice.
        </p>
        
        <h2 className="text-2xl font-display font-semibold mb-4">Results</h2>
        <h3 className="text-xl font-display font-medium mb-3">Increased Interest</h3>
        <p className="mb-6">
          I surveyed users at the beginning and conclusion of my project about their willingness to use Blue Apron's services. By adding this feature prior and new users expressed a 30% increase in their likelihood to use the service.
        </p>
        
        <p className="mb-6">
          I understand that when monetary commitment is involved, it changes the actual likelihood by about half, but a realistic 15% increase in users is still an enticing prospect for a company as large as Blue Apron.
        </p>
        
        <h3 className="text-xl font-display font-medium mb-3">Trusting the Consumer</h3>
        <p className="mb-6">
          At the start, I knew I'd wanted delivery to be a key feature of these app additions. I tried to sway users into believing that it could be something they use without actually considering if they actually wanted to use it. After listening to customers I found they were pro delivery, just not as a primary function of the app. The key reminder here was to address the user needs first and afterwards to add delightful features.
        </p>
      </div>
      
      <aside className="md:col-span-4 space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-display text-xl font-medium mb-4">Project Details</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Timeline</h4>
              <p className="text-gray-600">2 Months</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Responsibilities</h4>
              <p className="text-gray-600">User Research, User Testing, Project Management, Interaction Design, Experience Design, Visual Design</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Results</h4>
              <p className="text-gray-600">15% increase of interest for Blue Apron if these proposed features are included.</p>
            </div>
          </div>
        </div>
      </aside>
    </ProjectDetailLayout>
  );
};

export default GourmetRecipes;
