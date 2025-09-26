import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TestimonialCarousel from '../components/TestimonialCarousel';
import shopmonkeyLogo from '@/assets/shopmonkey-logo.png';
import rabornLogo from '@/assets/raborn-logo.png';
import dowLogo from '@/assets/dow-logo.png';

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isGraphicDesignerExpanded, setIsGraphicDesignerExpanded] = useState(false);
  
  const testimonials = [
    {
      quote: "Daniel's presence enhances both the creative output and the culture of the workplace. He has contributed to a wide variety of design teams, gaining a rare breadth of experience and his versatile skill set reflects not only his technical ability but also a deep understanding of design across disciplines.",
      author: "Kyle Marks",
      title: "Creative Director, Shopmonkey"
    },
    {
      quote: "I was consistently impressed by Danny's creativity and technical abilities. His designs were always innovative and well-executed, and he had a great eye for detail... creating graphics for marketing materials, or developing new ideas, Danny consistently produced high-quality work that exceeded expectations.",
      author: "Steven Chic",
      title: "VP, Alvys"
    },
    {
      quote: "Daniel has shown a growing curiosity about how design and development intersect, which positions him well for creating designs that are both thoughtful and practical. His eagerness to expand his skill set will no doubt continue to serve him and his future teams well.",
      author: "Kelsey McAuley",
      title: "Director of Web, Raborn Media"
    },
    {
      quote: "One highlight from our time together was a safety-focused web concept he helped design — his ideas showed real empathy and a strong understanding of user needs in high-stakes contexts. It was a great example of how he combines creative thinking with purpose-driven design.",
      author: "Samantha Lane",
      title: "Head of UX Design, Raborn Media"
    },
    {
      quote: "Danny adapted well to our remote work environment, communicated proactively, and delivered quality results. His ability to manage responsibilities independently while still being a collaborative team player was truly commendable.",
      author: "Matt Stratton",
      title: "COO, Raborn Media"
    }
  ];

  const scrollToSection = (sectionIndex: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const sectionWidth = container.clientWidth;
      container.scrollTo({
        left: sectionIndex * sectionWidth,
        behavior: 'smooth'
      });
      setCurrentSection(sectionIndex);
    }
  };

  const navigateLeft = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  const navigateRight = () => {
    if (currentSection < 3) {
      scrollToSection(currentSection + 1);
    }
  };

  const marketingDesigns = [
    {
      title: 'Data-Driven eBooks',
      description: 'Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less',
      href: '/graphic-designs/data-driven-ebooks',
      imagePath: '/lovable-uploads/3132f8cd-a1d3-4166-8782-cee980f9043d.png',
      tags: ['2 Months', '2.5 Wks Each']
    },
    {
      title: 'Email Marketing',
      description: 'Email marketing campaigns for an audience that is not reading inclined',
      href: '/graphic-designs/email-marketing',
      imagePath: '/lovable-uploads/cc56fb43-85f6-41c6-8efb-bd1225f35097.png',
      tags: ['Shopmonkey']
    },
    {
      title: 'Social Media',
      description: 'Social media and advertising campaigns that separated Shopmonkey in the Automotive software community',
      href: '/graphic-designs/social-media',
      imagePath: '/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png',
      tags: ['Shopmonkey']
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/lovable-uploads/8b4673ec-42b6-4214-b86e-c33719b59abf.png')` }}>
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Section 1: Portfolio Highlights */}
        <div className="min-w-full snap-start flex-shrink-0 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 rounded-lg p-8 bg-slate-900/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src={dowLogo} alt="DOW Logo" className="w-12 h-12" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Danny Ortiz-Wills' Portfolio | 2019-2025</h1>
                    <p className="text-gray-300">Product Designer, UXUI Designer, Web Designer, Vibe Coder, AI Enthusiast</p>
                  </div>
                </div>
                <Button 
                  onClick={() => scrollToSection(1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                >
                  View Work <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Testimonial Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-pink-400 mb-4">
                  Collaboration is my middle name, prior managers and peers agree.
                </h2>
                <TestimonialCarousel testimonials={testimonials} />
              </div>
              
              {/* Portfolio Highlights */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Portfolio Highlights | 2019-2025</h3>
                  <ChevronDown className="text-white h-5 w-5" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Grammy Museum */}
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="aspect-video mb-3">
                      <video 
                        src="/lovable-uploads/Grammy Museum/Demo-Clip.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Grammy Museum MS Redesign</h4>
                    <p className="text-gray-400 text-sm mb-2">Raborn Media</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  
                  {/* Express Lane */}
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="aspect-video mb-3">
                      <img src="/lovable-uploads/01-express-lane/display-express-lane.png" alt="Express Lane" className="w-full h-full object-cover rounded" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Express Lane - Lightning Quick Services</h4>
                    <p className="text-gray-400 text-sm mb-2">Shopmonkey</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  
                  {/* Gourmet Recipes */}
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="aspect-video mb-3">
                      <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Gourmet Recipes" className="w-full h-full object-cover rounded" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Gourmet Recipes</h4>
                    <p className="text-gray-400 text-sm mb-2">Freelance Case Study</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  
                  {/* Mobile Apps */}
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="aspect-video mb-3">
                      <img src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png" alt="Mobile Apps" className="w-full h-full object-cover rounded" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Mobile App Portfolio</h4>
                    <p className="text-gray-400 text-sm mb-2">Raborn Media</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Raborn Media */}
        <div className="min-w-full snap-start flex-shrink-0 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <img src={rabornLogo} alt="Raborn Media Logo" className="w-12 h-12" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Raborn Media | 2024-2025</h2>
                    <p className="text-gray-300">UXUI Designer, Project Manager</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={navigateLeft}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    onClick={navigateRight}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                {/* Grammy Museum */}
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Grammy Museum MS Redesign</h3>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">Web App</Badge>
                        <Badge variant="secondary">2 months</Badge>
                        <Badge className="bg-green-500 text-white">NEW</Badge>
                      </div>
                      <p className="text-gray-400 mb-4">
                        Redesigning interactions to engage visitors of all ages and encourage donations and event bookings.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        View Project <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-96">
                      <video 
                        src="/lovable-uploads/Grammy Museum/Demo-Clip.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile App Portfolio */}
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Mobile App Portfolio</h3>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">Web App</Badge>
                        <Badge variant="secondary">2 months</Badge>
                        <Badge className="bg-green-500 text-white">NEW</Badge>
                      </div>
                      <p className="text-gray-400 mb-4">
                        View a collection of my mobile app design work across various industries and platforms.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        View Project <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-96">
                      <div className="flex gap-2">
                        <img src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png" alt="Mobile App 1" className="w-1/2 rounded" />
                        <img src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png" alt="Mobile App 2" className="w-1/2 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: DOW Freelance Designer */}
        <div className="min-w-full snap-start flex-shrink-0 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <img src={dowLogo} alt="DOW Logo" className="w-12 h-12" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">DOW Freelance Designer | 2023-2025</h2>
                    <p className="text-gray-300">Product Designer, Mobile Designer, UXUI Designer</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={navigateLeft}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    onClick={navigateRight}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                {/* Camping Made Easy */}
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Camping Made Easy</h3>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">Web App</Badge>
                        <Badge variant="secondary">2 months</Badge>
                        <Badge className="bg-green-500 text-white">NEW</Badge>
                      </div>
                      <p className="text-gray-400 mb-4">
                        Camping shouldn't be hard, or that's what this app helps users to think. Camp no matter your skill level.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        View Project <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-96">
                      <img src="/lovable-uploads/01-camping-buddy/primary-happy-path-1.png" alt="Camping App" className="w-full rounded" />
                    </div>
                  </div>
                </div>

                {/* Gourmet Recipes */}
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Gourmet Recipes</h3>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">Web App</Badge>
                        <Badge variant="secondary">2 months</Badge>
                        <Badge className="bg-green-500 text-white">NEW</Badge>
                      </div>
                      <p className="text-gray-400 mb-4">
                        Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        View Project <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-96">
                      <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Gourmet Recipes" className="w-full rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Shopmonkey */}
        <div className="min-w-full snap-start flex-shrink-0 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <img src={shopmonkeyLogo} alt="Shopmonkey Logo" className="w-12 h-12" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Shopmonkey | 2021-2023</h2>
                    <p className="text-gray-300">Product Designer, Jr. Product Designer</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={navigateLeft}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Express Lane Project */}
              <div className="mb-6">
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Express Lane – Lightning Quick Services</h3>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">Web App</Badge>
                        <Badge variant="secondary">3 Months</Badge>
                      </div>
                      <p className="text-gray-400 mb-4">
                        Reduce checkout times to 2-3 minutes for automotive shops.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        View Project <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-96">
                      <img src="/lovable-uploads/01-express-lane/display-express-lane.png" alt="Express Lane" className="w-full rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Designer Section */}
              <div className="bg-slate-800/50 rounded-lg">
                <button 
                  onClick={() => setIsGraphicDesignerExpanded(!isGraphicDesignerExpanded)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-bold text-white">Graphic Designer | 2019-2021</h3>
                  {isGraphicDesignerExpanded ? 
                    <ChevronUp className="h-6 w-6 text-white" /> : 
                    <ChevronDown className="h-6 w-6 text-white" />
                  }
                </button>
                
                {isGraphicDesignerExpanded && (
                  <div className="px-6 pb-6 space-y-6">
                    {/* Data-Driven eBooks */}
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">Data-Driven eBooks</h4>
                          <div className="flex gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">2 Months</Badge>
                            <Badge variant="secondary" className="text-xs">2.5 Wks Each</Badge>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">
                            Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less
                          </p>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                        <div className="w-32">
                          <img src="/lovable-uploads/3132f8cd-a1d3-4166-8782-cee980f9043d.png" alt="Data-Driven eBooks" className="w-full rounded" />
                        </div>
                      </div>
                    </div>

                    {/* Adhere+ */}
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">Adhere+</h4>
                          <div className="flex gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">Web App</Badge>
                            <Badge variant="secondary" className="text-xs">2 months</Badge>
                            <Badge className="bg-green-500 text-white text-xs">NEW</Badge>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">
                            0 to 1 web and branding design for a Adhere Plus's flagship app.
                          </p>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                        <div className="w-32">
                          <img src="/lovable-uploads/01-Adhere/evidence-full.png" alt="Adhere+" className="w-full rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;