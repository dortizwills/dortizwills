
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Card, CardContent } from "../components/ui/card";
import { Button } from '@/components/ui/button';

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
      {/* Early Stages */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Early Stages</h2>
        </div>
       </div> 
      {/* Validation Process */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Research</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            I was first introduced to Blue Apron when a relative of mine ordered a pre-made meal plan. I have a number of friends and I myself have dietary restrictions, and I stumbled across their app when I was wanting to try a new recipe.
          </p>
          <p className="mb-6">
            After some time interacting with the app, I had a few misgivings that I was eager to solve because I saw the value of their recipes. I analyzed Blue Apron's on iOS and tried to understand their unique selling position. I listed pain points depending on users' needs. I then conducted a competitive analysis to find out how some competitors are addressing the same issues.
          </p>
        </div>
      </div>

      {/* User Persona */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">User Persona</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            I developed a user-persona for the specific user I wanted to target – the busy working class. I took care to document their frustrations and pain points and I made sure to include potential solutions for those pain points. I use personas because they're effective at understanding the broader audience of potential users, especially if researched properly.
          </p>
          <img 
            src="/lovable-uploads/388c46c3-2e19-41a0-bbb6-94c324253558.png" 
            alt="User Persona" 
            className="w-full rounded-lg mb-6" 
          />
        </div>
      </div>
      
      {/* Sketches/Iterations */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Sketches / Iterations</h2>
        </div>
        <div className="col-span-2">
          <p className="mb-3">
            I used pencil and paper to develop multiple concepts and chose the best ones to test against each other.
          </p>
          <p className="mb-3">
            Although some designs were unique I tried to stick to best practices as I entered the prototype and user tested portions of my research.
          </p>
          <p className="mb-6">
            I notice that users are primed for success when they understand a concept based on prior experiences instead of presenting them entirely new concepts from the beginning of my research.
          </p>
          <img 
            src="/lovable-uploads/6261277f-8561-450f-a540-9cdd59870118.png" 
            alt="Sketches" 
            className="w-full rounded-lg mb-6" 
          />
        </div>
      </div>
      
      {/* Validation Process */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Validation Process</h2>
        </div>
       </div> 
     {/* Final App Designs */}      
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Early User Flows</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            I used 2 low fidelity paths for these concepts and asked a few users to test and describe what they appreciated most out of each path. The first, in the new lower nav would allow users to add filters or search freely. The second would guide users in a more structured path where they only make small decisions at a time.
          </p>
          <img 
            src="/lovable-uploads/439024d4-beba-4a24-9416-bb1dba4df9fc.png" 
            alt="User Flow 1" 
            className="w-full rounded-lg mb-6" 
          />
          <p className="mb-3">
            In my two initial concepts I focused on adding a lower navigational button for "quick" services and altering the "upcoming" section to a "delivery" tab.
          </p>
          <p className="mb-3">
            The rationale was this new feature should be easily discovered when users needed to discover it under stress. My interviews instead revealed that a delivery option is so opposite of why users came to the app that I had to scrap it as a surfaced feature.
          </p>
          <p className="mb-6">
            I still saw the value in a delivery option so would attempt to weave it into the userflow at a later, noncritical point.
          </p>
          <img 
            src="/lovable-uploads/0cd3c2ec-024b-4849-843e-ff8ac287d9dd.png" 
            alt="Initial Findings" 
            className="w-full rounded-lg mb-6" 
          />
        </div>
      </div>
      
      {/* The Second Iteration */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">The Second Iteration</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            For this stage I wanted to test a smart search feature against early filtering. I also included delivery within the primary user path, forcing users to decide if they wanted to deliver ingredients to their home or not. That decision led to a noticeable amount of frustration.
          </p>
          <p className="mb-6">
            It soon became evident, I had focused on too many secondary features to the extent I found the results inconclusive on the features I was actually trying to test.
          </p>
          <img 
            src="/lovable-uploads/759bf6e8-7359-4690-b129-57988eb2d3b9.png" 
            alt="V2 Paths" 
            className="w-full rounded-lg mb-6" 
          />
        </div>
      </div>
      
      {/* Change of Direction */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Change of Direction</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            My revised path would allow these tertiary features to be skipped so that the primary path was not inhibited by my desires to see a particular path succeed. Instead the users' preferred search method would now inform which method of finding a unique recipe.
          </p>
          <img 
            src="/lovable-uploads/461e9278-1540-4d5d-ad2c-4506d6bdfebc.png" 
            alt="User Flows 1" 
            className="w-full rounded-lg mb-6" 
          />
        </div>
      </div>
      
      {/* Third Round Adjustments */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Third Round Adjustments</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            In my next iterations I limited my prototype fidelity to focus on a direct A/B test. The focus – which version of smart search do users prefer?
          </p>
        </div>
      </div>
      {/* Guided Filters & Smart Search */}
      <div className="mb-8 grid grid-cols-3 max-sm:grid-cols-1 gap-8">
        <div className="col-span-1 max-sm:hidden">
          {/* Left div block - empty as specified */}
        </div>
        
        {/* Center div block */}
        <div className="col-span-1">
          <h4 className="font-medium text-lg mb-3">1. Guided Filters</h4>
          <p className="mb-4">
             In this version users enter a guided path where complexity is added incrementally. Each step adds another layer of filtration to limit the overwhelming number of quality recipes they can choose for themselves.
          </p>
          <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center mb-4">
             <span className="text-gray-600">Guided Filters Video Placeholder</span>
          </div>
          <Button asChild variant="outline" className="justify-center py-6 text-lg bg-gradient-primary text-white border-none hover:opacity-90">
             <a href="https://www.figma.com/proto/IdHbqz9qHvX4DQTi0Q279G/Side-Projects?page-id=461%3A210&node-id=525-1027&viewport=2573%2C-4462%2C0.38&t=6T33Qa1oKuBrMMot-1&scaling=min-zoom&starting-point-node-id=525%3A1027&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                Guided Filters Prototype
             </a>
          </Button>
        </div>
        
        {/* Right div block */}
        <div className="col-span-1">
          <h4 className="font-medium text-lg mb-3">2. Smart Search</h4>
          <p className="mb-4">
            Or a single search bar where anything can be added. Users could search for anything in the search bar including time, culinary preferences, diets, and more. All they had to do was include it within their search and watch the results update.
          </p>
          <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-600">Smart Search Video Placeholder</span>
          </div>
          <Button asChild variant="outline" className="justify-center py-6 text-lg bg-gradient-primary text-white border-none hover:opacity-90">
            <a href="https://www.figma.com/proto/IdHbqz9qHvX4DQTi0Q279G/Side-Projects?page-id=461%3A210&node-id=621-10070&viewport=2573%2C-4462%2C0.38&t=6T33Qa1oKuBrMMot-1&scaling=min-zoom&starting-point-node-id=621%3A10070&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
              Smart Search Prototype
            </a>
          </Button>
        </div>
      </div>
      {/*Previous content*/}   
      {/*
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
            <div>
              <h4 className="text-lg font-display font-medium mb-3">1. Guided Filters</h4>
              <p className="mb-4">
                In this version users enter a guided path where complexity is added incrementally. Each step adds another layer of filtration to limit the overwhelming number of quality recipes they can choose for themselves.
              </p>
              <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-600">Guided Filters Video Placeholder</span>
              </div>
              <a 
                href="https://www.figma.com/proto/IdHbqz9qHvX4DQTi0Q279G/Side-Projects?page-id=461%3A210&node-id=525-1027&viewport=2573%2C-4462%2C0.38&t=6T33Qa1oKuBrMMot-1&scaling=min-zoom&starting-point-node-id=525%3A1027&show-proto-sidebar=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-designer-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Guided Filters Prototype Testing 1
              </a>
            </div>
            <div>
              <h4 className="text-lg font-display font-medium mb-3">2. Smart Search</h4>
              <p className="mb-4">
                Or a single search bar where anything can be added. Users could search for anything in the search bar including time, culinary preferences, diets, and more. All they had to do was include it within their search and watch the results update.
              </p>
              <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-600">Smart Search Video Placeholder</span>
              </div>
              <a 
                href="https://www.figma.com/proto/IdHbqz9qHvX4DQTi0Q279G/Side-Projects?page-id=461%3A210&node-id=621-10070&viewport=2573%2C-4462%2C0.38&t=6T33Qa1oKuBrMMot-1&scaling=min-zoom&starting-point-node-id=621%3A10070&show-proto-sidebar=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-designer-red text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Smart Search Prototype
              </a>
            </div>
          </div>  */} 
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">   
          <p className="mb-6">
            My users seemed to prefer the smart search feature where they could add any ingredient, recipe title, or cuisine style they wanted. However, it was not intuitive they could also search by prep time, delivery options, or by including/excluding specific ingredients to their recipe; these actions were far easier to complete in the smart filters version.
          </p>
          <p className="mb-6">
            Using the insights from this iteration I decided to combine the best aspects of both user flows into one final path.
          </p>
        </div>
      </div>
    
      {/* Final App Designs */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Final App Designs</h2>
        </div>
       </div> 
      
      {/* Results */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">User Need 1: Intelligent Searches</h3>
        </div>
        <div className="col-span-2">
          <div className="mb-8"></div>
          <p className="mb-6">
            After my users' research, I decided that it was time for final designs. The new focus at this stage was to demonstrate to my core audience how they could rely on Blue Apron for catered and convenient recipes.
          </p>
          <p className="mb-6">
            Under stress people want to find recipes they're comfortable making, but users aren't always stressed when they cook. I made this revised user flow flexible so that users would be drawn to search for recipes whether they wanted to try something new or something convenient.
          </p>
        </div>
      </div>
      
      {/* Full width image */}
      <div className="mb-10">
        <img 
          src="/lovable-uploads/33766d10-dd63-4825-86e0-48e5a6fa6543.png" 
          alt="Final Screens 1" 
          className="w-full rounded-lg" 
        />
      </div>
      
      {/* User Need 2 */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">User Need 2: Convenience</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            It's hard to enjoy something when the perceived cost is more than benefit. When people order from Blue Apron the promise is that they'll have a gourmet meal without the pain of a drawn out cooking experience.
          </p>
          <p className="mb-6">
            I set delivery a backup plan for users, just in case they were at a gap between orders or simply forgot to prepare a meal. This safety net made each user feel safer knowing that even if they forgot to order a meal plan, they could still have a quality meal at a moment's notice.
          </p>
        </div>
      </div>
      
      {/* Full width image */}
      <div className="mb-10">
        <img 
          src="/lovable-uploads/91bf27de-9b6f-46af-b1df-9fc2e00d7598.png" 
          alt="Final Screens 2" 
          className="w-full rounded-lg" 
        />
      </div>


      
      {/* Results */}
       <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h2 className="text-2xl font-display font-semibold mb-4">Results</h2>
        </div>
       </div>
      {/* Increased Interest */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Increased Interest</h3>
        </div>
        <div className="col-span-2">
          <div className="mb-6"></div>
          <p className="mb-6">
            I surveyed users at the beginning and conclusion of my project about their willingness to use Blue Apron's services. By adding this feature prior and new users expressed a 30% increase in their likelihood to use the service.
          </p>
          <p className="mb-6">
            I understand that when monetary commitment is involved, it changes the actual likelihood by about half, but a realistic 15% increase in users is still an enticing prospect for a company as large as Blue Apron.
          </p>
        </div>
      </div>
      
      {/* Trusting the Consumer */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 mb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-display font-medium mb-3">Trusting the Consumer</h3>
        </div>
        <div className="col-span-2">
          <p className="mb-6">
            At the start, I knew I'd wanted delivery to be a key feature of these app additions. I tried to sway users into believing that it could be something they use without actually considering if they actually wanted to use it. After listening to customers I found they were pro delivery, just not as a primary function of the app. The key reminder here was to address the user needs first and afterwards to add delightful features.
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  );
};

export default GourmetRecipes;
