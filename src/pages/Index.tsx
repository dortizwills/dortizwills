import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import TestimonialCarousel from '../components/TestimonialCarousel';
import shopmonkeyLogo from '@/assets/shopmonkey-logo.png';
import rabornLogo from '@/assets/raborn-logo.png';
import dowLogo from '@/assets/dow-logo.png';
import avatarIllustration from '@/assets/avatar-illustration.png';
import heroAvatar from '@/assets/hero-avatar.png';
import backgroundImage from '@/assets/homepage-grid-background.png';
import rabornTabLogo from '@/assets/raborn-tab-logo.png';
import dowTabLogo from '@/assets/dow-tab-logo.png';
import shopmonkeyTabLogo from '@/assets/shopmonkey-tab-logo.png';

const Index = () => {
  const [activeTab, setActiveTab] = useState('portfolio');
  
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

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        {/* Header Section */}
        <div className="rounded-lg px-8 pt-[calc(2rem-4px)] pb-[calc(2rem-4px)] bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={heroAvatar} alt="Danny Ortiz-Wills" className="w-[220px] h-[220px] max-w-[220px] max-h-[220px] object-cover rounded-lg" />
              <div>
                <h1 className="text-lg font-bold text-white">Danny Ortiz-Wills' Portfolio | 2019-2025</h1>
                <p className="text-gray-300 text-sm md:text-[1.2rem] md:leading-[2rem]">Product Designer, UXUI Designer, Web Designer, Vibe Coder, AI Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="rounded-lg p-8 bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors">
          <h2 className="text-xl font-normal text-pink-400 mb-4">
            Collaboration is my middle name, prior managers and peers agree.
          </h2>
          <div className="w-full">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 min-w-max pb-2">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-colors whitespace-nowrap ${
                activeTab === 'portfolio' 
                  ? 'bg-[#161522]/50 backdrop-blur-sm border-white text-white' 
                  : 'bg-[#161522]/50 backdrop-blur-sm border-[#A2C6E9] text-gray-300 hover:border-white'
              }`}
            >
              <span className="text-sm font-medium">Portfolio Highlights</span>
              <span className="hidden md:inline text-xs text-gray-400">2019-2025</span>
            </button>
            
            <button
              onClick={() => setActiveTab('raborn')}
              className={`flex items-center gap-3 md:px-6 px-4 py-4 rounded-lg border transition-colors whitespace-nowrap ${
                activeTab === 'raborn' 
                  ? 'bg-[#161522]/50 backdrop-blur-sm border-white text-white' 
                  : 'bg-[#161522]/50 backdrop-blur-sm border-[#A2C6E9] text-gray-300 hover:border-white'
              }`}
            >
              <img src={rabornTabLogo} alt="Raborn" className="w-8 h-8" />
              <div className={`text-left flex-1 ${activeTab === 'raborn' ? 'block' : 'hidden md:block'}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">Raborn Media</span>
                  <span className="text-xs text-gray-400">2024-2025</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">UXUI Designer, Project Manager</div>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('dow')}
              className={`flex items-center gap-3 md:px-6 px-4 py-4 rounded-lg border transition-colors whitespace-nowrap ${
                activeTab === 'dow' 
                  ? 'bg-[#161522]/50 backdrop-blur-sm border-white text-white' 
                  : 'bg-[#161522]/50 backdrop-blur-sm border-[#A2C6E9] text-gray-300 hover:border-white'
              }`}
            >
              <img src={dowTabLogo} alt="DOW" className="w-8 h-8" />
              <div className={`text-left flex-1 ${activeTab === 'dow' ? 'block' : 'hidden md:block'}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">DOW Freelance Designer</span>
                  <span className="text-xs text-gray-400">2023-2025</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">Product Designer, Mobile Designer, UXUI Designer</div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('shopmonkey')}
              className={`flex items-center gap-3 md:px-6 px-4 py-4 rounded-lg border transition-colors whitespace-nowrap ${
                activeTab === 'shopmonkey' 
                  ? 'bg-[#161522]/50 backdrop-blur-sm border-white text-white' 
                  : 'bg-[#161522]/50 backdrop-blur-sm border-[#A2C6E9] text-gray-300 hover:border-white'
              }`}
            >
              <img src={shopmonkeyTabLogo} alt="Shopmonkey" className="w-8 h-8" />
              <div className={`text-left flex-1 ${activeTab === 'shopmonkey' ? 'block' : 'hidden md:block'}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">Shopmonkey</span>
                  <span className="text-xs text-gray-400">2019-2023</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">Product Designer, Jr. Product Designer</div>
              </div>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'portfolio' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grammy Museum */}
            <Link to="/grammy-museum" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
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
              <Button 
                className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                asChild
              >
                <span>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </Link>
            
            {/* Gourmet Recipes */}
            <Link to="/gourmet-recipes" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
              <div className="aspect-video mb-3">
                <img 
                  src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" 
                  alt="Gourmet Recipes" 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
              <h4 className="text-white font-semibold mb-2">Gourmet Recipes</h4>
              <p className="text-gray-400 text-sm mb-2">Freelance Case Study</p>
              <Button 
                className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                asChild
              >
                <span>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </Link>
            
            {/* Express Lane */}
            <Link to="/quick-services" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
              <div className="aspect-video mb-3">
                <img 
                  src="/lovable-uploads/01-express-lane/display-express-lane.png" 
                  alt="Express Lane" 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
              <h4 className="text-white font-semibold mb-2">Express Lane – Lightning Quick Services</h4>
              <p className="text-gray-400 text-sm mb-2">Shopmonkey</p>
              <Button 
                className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                asChild
              >
                <span>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </Link>
            
            {/* Mobile Apps */}
            <Link to="/mobile-apps" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
              <div className="aspect-video mb-3">
                <img 
                  src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png" 
                  alt="Mobile Apps" 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
              <h4 className="text-white font-semibold mb-2">Mobile App Portfolio</h4>
              <p className="text-gray-400 text-sm mb-2">Raborn Media</p>
              <Button 
                className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                asChild
              >
                <span>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </Link>
          </div>
        )}

        {activeTab === 'raborn' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grammy Museum */}
            <Link to="/grammy-museum" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
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
              <Button 
                className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                asChild
              >
                <span>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </Link>

            {/* Mobile App Portfolio */}
            <Link to="/mobile-apps" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
              <div className="aspect-video mb-3">
                <img 
                  src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png" 
                  alt="Mobile Apps" 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
              <h4 className="text-white font-semibold mb-2">Mobile App Portfolio</h4>
              <p className="text-gray-400 text-sm mb-2">Raborn Media</p>
              <Button 
                className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                asChild
              >
                <span>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </Link>

            {/* Adhere+ */}
            <Link to="/adhere-plus" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
              <div className="aspect-video mb-3">
                <img 
                  src="/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png" 
                  alt="Adhere+" 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
              <h4 className="text-white font-semibold mb-2">Adhere+</h4>
              <p className="text-gray-400 text-sm mb-2">Raborn Media</p>
              <Button 
                className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                asChild
              >
                <span>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </Link>
          </div>
        )}

        {activeTab === 'dow' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Camping Made Easy */}
            <Link to="/camping-app" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
              <div className="aspect-video mb-3">
                <img 
                  src="/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png"
                  alt="Camping Made Easy"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <h4 className="text-white font-semibold mb-2">Camping Made Easy</h4>
              <p className="text-gray-400 text-sm mb-2">Freelance Case Study</p>
              <Button 
                className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                asChild
              >
                <span>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </Link>
            
            {/* Gourmet Recipes */}
            <Link to="/gourmet-recipes" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
              <div className="aspect-video mb-3">
                <img 
                  src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" 
                  alt="Gourmet Recipes" 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
              <h4 className="text-white font-semibold mb-2">Gourmet Recipes</h4>
              <p className="text-gray-400 text-sm mb-2">Freelance Case Study</p>
              <Button 
                className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                asChild
              >
                <span>
                  View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </Link>
          </div>
        )}

        {activeTab === 'shopmonkey' && (
          <div className="space-y-6">
            {/* Express Lane - Half Width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/quick-services" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
                <div className="aspect-video mb-3">
                  <img 
                    src="/lovable-uploads/01-express-lane/display-express-lane.png" 
                    alt="Express Lane" 
                    className="w-full h-full object-cover rounded" 
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Express Lane – Lightning Quick Services</h4>
                <p className="text-gray-400 text-sm mb-2">Product Design</p>
                <Button 
                  className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                  asChild
                >
                  <span>
                    View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Graphic Designer Section - Collapsible */}
            <Accordion type="single" collapsible defaultValue="graphic-design" className="w-full">
              <AccordionItem value="graphic-design" className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between bg-[#161522]/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-[#A2C6E9] hover:border-white transition-colors w-full group">
                    <h3 className="text-white text-xl font-semibold">Graphic Designer</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 text-sm">2019-2022</span>
                      <ChevronDown className="h-5 w-5 text-gray-400 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="pt-6">
                  {/* Graphic Design Cards - 2 Column Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Data-Driven eBooks */}
              <Link to="/graphic-designs/data-driven-ebooks" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
                <div className="aspect-video mb-3">
                  <img 
                    src="/lovable-uploads/5e6af2ef-afda-4354-a360-56b751c12cff.png"
                    alt="Data-Driven eBooks" 
                    className="w-full h-full object-cover rounded" 
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Data-Driven eBooks</h4>
                <p className="text-gray-400 text-sm mb-2">Graphic Design</p>
                <Button 
                  className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                  asChild
                >
                  <span>
                    View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </span>
                </Button>
              </Link>
              
              {/* Email Marketing */}
              <Link to="/graphic-designs/email-marketing" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
                <div className="aspect-video mb-3">
                  <img 
                    src="/lovable-uploads/cc56fb43-85f6-41c6-8efb-bd1225f35097.png"
                    alt="Email Marketing" 
                    className="w-full h-full object-cover rounded" 
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Email Marketing</h4>
                <p className="text-gray-400 text-sm mb-2">Graphic Design</p>
                <Button 
                  className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                  asChild
                >
                  <span>
                    View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </span>
                </Button>
              </Link>

              {/* Social Media */}
              <Link to="/graphic-designs/social-media" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
                <div className="aspect-video mb-3">
                  <img 
                    src="/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png"
                    alt="Social Media" 
                    className="w-full h-full object-cover rounded" 
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Social Media</h4>
                <p className="text-gray-400 text-sm mb-2">Graphic Design</p>
                <Button 
                  className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                  asChild
                >
                  <span>
                    View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </span>
                </Button>
              </Link>

              {/* Product Illustrations */}
              <Link to="/graphic-designs/product-illustrations" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
                <div className="aspect-video mb-3">
                  <img 
                    src="/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png"
                    alt="Product Illustrations" 
                    className="w-full h-full object-cover rounded" 
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Product Illustrations</h4>
                <p className="text-gray-400 text-sm mb-2">Graphic Design</p>
                <Button 
                  className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                  asChild
                >
                  <span>
                    View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </span>
                </Button>
              </Link>

              {/* Case Studies */}
              <Link to="/graphic-designs/case-studies" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
                <div className="aspect-video mb-3">
                  <img 
                    src="/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png"
                    alt="Case Studies" 
                    className="w-full h-full object-cover rounded" 
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Case Studies</h4>
                <p className="text-gray-400 text-sm mb-2">Graphic Design</p>
                <Button 
                  className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                  asChild
                >
                  <span>
                    View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </span>
                </Button>
              </Link>

              {/* Event Designs */}
              <Link to="/graphic-designs/event-designs" className="group bg-[#161522]/50 backdrop-blur-sm rounded-lg p-4 border border-[#A2C6E9] hover:border-white transition-colors block">
                <div className="aspect-video mb-3">
                  <img 
                    src="/lovable-uploads/cbf46393-8c18-41e4-8e0b-ef504b5d046e.png"
                    alt="Event Designs" 
                    className="w-full h-full object-cover rounded" 
                  />
                </div>
                <h4 className="text-white font-semibold mb-2">Event Designs</h4>
                <p className="text-gray-400 text-sm mb-2">Graphic Design</p>
                <Button 
                  className="bg-gradient-to-r from-[#003CBC] to-[#001B56] transition-[width] duration-[2000ms] ease-in-out w-fit group-hover:w-full pointer-events-none"
                  asChild
                >
                  <span>
                    View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </span>
                </Button>
              </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

      </div>
    </div>
  );
};

export default Index;