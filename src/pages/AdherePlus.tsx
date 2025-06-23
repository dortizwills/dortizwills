
import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const AdherePlus = () => {
  const relatedProjects = [
    {
      title: "Gourmet Recipes",
      description: "Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are.",
      path: "/product-designs/gourmet-recipes",
      image: "/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png"
    },
    {
      title: "Non-Profit Redesign",
      description: "Redesigning the Non-Profit's digital experience to showcase history and education.",
      path: "/product-designs/grammy-museum",
      image: "/lovable-uploads/e9d967b1-2ea7-4ffe-9768-e4c16c1de3ed.png"
    }
  ];

  return (
    <ProjectDetailLayout 
      title="Adhere+" 
      backTo="/product-designs"
      backLabel="Back to UXUI Designs"
      headerImage="/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png"
      projectDetails={{
        timeline: "3 Months Total: 4 weeks design, 6 weeks of client deliberation, 3 weeks developing & QA",
        responsibilities: "Branding, UXUI Design, Design System Creation, Project Management",
        results: "100% client satisfaction, on-time delivery, 20% booking increases"
      }}
      relatedProjects={relatedProjects}
    >
      <div className="space-y-8">
        {/* Background Section */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-display font-semibold">Background</h2>
          </div>
          <div className="col-span-2 max-sm:col-span-1">
            <p className="text-gray-700 leading-relaxed">
              Adhere+, the client of Raborn Media and a healthcare SaaS platform, focused on helping patients follow recovery plans and stay on track with their medications.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              In this project, I led the UX and web design efforts to answer the client's goals to meet needs of both healthcare professionals and patients — aligning usability, clarity, and trust in a sensitive space.
            </p>
          </div>
        </div>

        {/* Early Stages Section */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-display font-semibold">Early Stages</h2>
          </div>
          <div className="col-span-2 max-sm:col-span-1">
            {/* Research subsection */}
            <div className="mb-6">
              <h3 className="text-xl font-display font-medium mb-4">Research</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before jumping into design, I took time to understand the core users. I utilized the client's information as well as gathering research from chatbots and forums; this found a few key pieces for our end user's needs:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-designer-red text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg font-semibold">1</span>
                  </div>
                  <p className="text-gray-700">Medical Practitioners desire to monitor patients and assess provider performance.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-designer-red text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg font-semibold">2</span>
                  </div>
                  <p className="text-gray-700">Patients require assistance to stay consistent with medication schedules and treatment plans.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-designer-red text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg font-semibold">3</span>
                  </div>
                  <p className="text-gray-700">Executives desire reducing cost from expensive treatments from disconnections between Patients and Practitioners.</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                These insights helped us shape a design that was not only functional but empathetic — reducing friction for each vertical that would use this website.
              </p>
            </div>
          </div>
        </div>

        {/* Goals & Strategy Section */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-display font-semibold">Goals & Strategy</h2>
          </div>
          <div className="col-span-2 max-sm:col-span-1">
            <p className="text-gray-700 leading-relaxed mb-6">
              After conducting some follow up conversations I uncovered Adhere Plus' core goals:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-designer-red text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-lg font-semibold">1</span>
                </div>
                <p className="text-gray-700">Increase demo bookings for their mobile platform.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-designer-red text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-lg font-semibold">2</span>
                </div>
                <p className="text-gray-700">Patients require assistance to stay consistent with medication schedules and treatment plans.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-designer-red text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-lg font-semibold">3</span>
                </div>
                <p className="text-gray-700">Create a consistent visual style for web and social channels.</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              From Raborn Media's side, this was also a strategic project. We aimed to build long-term trust with the client and create portfolio-quality work we could reference in future pitches.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Below is the timeline we developed to deliver this project on time.
            </p>
            <img 
              src="/lovable-uploads/608cd0df-2ce3-40b1-b0de-ab71fc66cd9f.png" 
              alt="Project Timeline" 
              className="w-full rounded-lg mb-6" 
            />
          </div>
        </div>

        {/* Design Process Section */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-display font-semibold">Design Process</h2>
          </div>
          <div className="col-span-2 max-sm:col-span-1">            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                This project had a shorter timeline and lower budget. This led to a few compromises from the ideal design process of this project and we broke it into a few phases:
              </p>
              <p className="text-gray-700 leading-relaxed">
                I did some quick iterations and presented them internally to my managers. After 2 rounds of internal presentations the designs were refined and aligned to match our client's goals, this took just under 2 weeks to produce.
              </p>
              <br />
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/0c42c0ee-d4e4-49dc-85cc-f8d221c18b28.png" 
                  alt="Design Iterations" 
                  className="w-full rounded-lg"
                />
              </div>
              <br />
              <p className="text-gray-700 leading-relaxed">
                I presented our first round of designs to the client Adhere+, where we received notes on how to course correct and finalize our visual designs and I added some functional prototypes to explain some unique features. This took roughly another week.
              </p>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/6f592365-a8f0-400f-995c-53ae03cb42c6.png" 
                  alt="Design vs Final Comparisons" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>  
            <div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  After rushing these designs over, the Adhere+ team consulted their C-Suite and deliberated for 4 weeks to ensure all their comments were up to date before our final design corrections and development could begin. 
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The main adjustment we had was on the About Us page. I adjusted the final designs based on their comments and made a handoff to our developers, where some additional compromises were made to aid a junior developer deliver the product on time.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Below you'll see the solution that we were able to implement.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-designer-gray rounded-lg flex items-center justify-center">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    className="w-full object-cover bg-white rounded-lg"
                  >
                    <source src="/lovable-uploads/01-Adhere/adhere-about-demo.mp4" type="video/mp4" />
                  </video>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Designs Section */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-display font-semibold">Final Designs</h2>
          </div>
          <div className="col-span-2 max-sm:col-span-1">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The final homepage designs represent a balance between my design vision and practical development constraints. The responsive designs and interactive elements were primarly implemented in the final design, such as tab navigation, parallax elements, and image interactions.
              </p>
              <br />
              <br />
              <div className="bg-designer-gray rounded-lg flex items-center justify-center">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  className="w-full object-cover bg-white rounded-lg"
                >
                  <source src="/lovable-uploads/01-Adhere/adhere-homepage-demo.mp4" type="video/mp4" />
                </video>
              </div>
              <br />
              <Button asChild variant="outline" className="justify-center py-6 text-lg bg-gradient-primary text-white border-none hover:opacity-90">
                <a href="https://adhereplus.com" target="_blank" rel="noopener noreferrer">
                  View Live Site
                </a>
              </Button>
              <br />
            </div>
          </div>
        </div>
        
        {/* Inner Page Restrictions Section */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-display font-semibold">Inner Page Restrictions</h3>
          </div>
          <div className="col-span-2 max-sm:col-span-1">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                The About Us and How It Works page designs were impacted more during development and QA. I was instructed to conduct some scope reduction and compromises to help Raborn adhere to our agreed schedule with Adhere+.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We made the decision to cut the Whitepages and Evidence pages and include their designs in a future collaboration with Adhere+. Below are some unique elements for those two pages.
              </p>
              <div className="mb-10">
                <img 
                  src="/lovable-uploads/01-Adhere/evidence-whitepages.png" 
                  alt="Evidence + Whitepages" 
                  className="w-full rounded-lg" 
                />
                <br />
              </div>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-display font-semibold">Results</h2>
          </div>
          <div className="col-span-2 max-sm:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-medium mb-3">Booking Increases:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Adhere Plus saw an over 20% increase in conversions from site landings over the next 6 months. More importantly, this satisfaction on this initial build was helpful in the perceived value from Raborn Media, which in turn positioned Raborn for completing future projects with Adhere.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-medium mb-3">Future Roadmap:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Adhere+ now has the ability to focus on their app and potentially leverage Raborn's engineering team on not only web but application development. This was a goal of Raborn to expand into new verticals and Adhere's mobile app would bolster Raborn's portfolio for future new client contracts.
                </p>
              </div>
            </div>
          </div>
        </div> {/* Results Section Content */}
      </div> {/* Grid Wrapper */}
    </ProjectDetailLayout>
  );
};

export default AdherePlus;
