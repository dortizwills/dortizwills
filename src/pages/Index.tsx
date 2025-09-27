import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TestimonialCarousel from '../components/TestimonialCarousel';
import shopmonkeyLogo from '@/assets/shopmonkey-logo.png';
import rabornLogo from '@/assets/raborn-logo.png';
import dowLogo from '@/assets/dow-logo.png';
import avatarIllustration from '@/assets/avatar-illustration.png';
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
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        {/* Header Section */}
        <div className="rounded-lg p-8 bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={dowLogo} alt="DOW Logo" className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold text-white">Danny Ortiz-Wills' Portfolio | 2019-2025</h1>
                <p className="text-gray-300 text-[1.2rem] leading-[2rem]">Product Designer, UXUI Designer, Web Designer, Vibe Coder, AI Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="rounded-lg p-8 bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors">
          <div className="flex items-start gap-8">
            <div className="w-1/3 flex-shrink-0">
              <img 
                src={avatarIllustration} 
                alt="Danny Ortiz-Wills" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-[1.75rem] leading-[2.25rem] font-bold text-pink-400 mb-4">
                Collaboration is my middle name, prior managers and peers agree.
              </h2>
              <TestimonialCarousel testimonials={testimonials} />
            </div>
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
              <span className="text-xs text-gray-400">2019-2025</span>
            </button>
            
            <button
              onClick={() => setActiveTab('raborn')}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-colors whitespace-nowrap ${
                activeTab === 'raborn' 
                  ? 'bg-[#161522]/50 backdrop-blur-sm border-white text-white' 
                  : 'bg-[#161522]/50 backdrop-blur-sm border-[#A2C6E9] text-gray-300 hover:border-white'
              }`}
            >
              <img src={rabornTabLogo} alt="Raborn" className="w-8 h-8" />
              <div className="text-left">
                <div className="text-sm font-medium">Raborn Media</div>
                <div className="text-xs text-gray-400">2024-2025</div>
              </div>
              <span className="text-xs text-gray-400">UXUI Designer, Project Manager</span>
            </button>
            
            <button
              onClick={() => setActiveTab('dow')}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-colors whitespace-nowrap ${
                activeTab === 'dow' 
                  ? 'bg-[#161522]/50 backdrop-blur-sm border-white text-white' 
                  : 'bg-[#161522]/50 backdrop-blur-sm border-[#A2C6E9] text-gray-300 hover:border-white'
              }`}
            >
              <img src={dowTabLogo} alt="DOW" className="w-8 h-8" />
              <div className="text-left">
                <div className="text-sm font-medium">DOW Freelance Designer</div>
                <div className="text-xs text-gray-400">2023-2025</div>
              </div>
              <span className="text-xs text-gray-400">Product Designer, Mobile Designer, UXUI Designer</span>
            </button>

            <button
              onClick={() => setActiveTab('shopmonkey')}
              className={`flex items-center gap-3 px-6 py-4 rounded-lg border transition-colors whitespace-nowrap ${
                activeTab === 'shopmonkey' 
                  ? 'bg-[#161522]/50 backdrop-blur-sm border-white text-white' 
                  : 'bg-[#161522]/50 backdrop-blur-sm border-[#A2C6E9] text-gray-300 hover:border-white'
              }`}
            >
              <img src={shopmonkeyTabLogo} alt="Shopmonkey" className="w-8 h-8" />
              <div className="text-left">
                <div className="text-sm font-medium">Shopmonkey</div>
                <div className="text-xs text-gray-400">2021-2023</div>
              </div>
              <span className="text-xs text-gray-400">Product Designer, Jr. Product Designer</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'portfolio' && (
          <div className="rounded-lg bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors p-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Grammy Museum */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <video 
                    src="/lovable-uploads/Grammy Museum/Demo-Clip.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded border border-white/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Grammy Museum MS Redesign</h3>
                <p className="text-gray-400 text-sm mb-4">Raborn Media</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/grammy-museum">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Gourmet Recipes */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Gourmet Recipes" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Gourmet Recipes</h3>
                <p className="text-gray-400 text-sm mb-4">Freelance Case Study</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/gourmet-recipes">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Express Lane */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/01-express-lane/display-express-lane.png" alt="Express Lane" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Express Lane - Lightning Quick Services</h3>
                <p className="text-gray-400 text-sm mb-4">Shopmonkey</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/quick-services">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Mobile Apps */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png" alt="Mobile Apps" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mobile App Portfolio</h3>
                <p className="text-gray-400 text-sm mb-4">Raborn Media</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/mobile-apps">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'raborn' && (
          <div className="space-y-6">
            {/* Grammy Museum Expanded */}
            <div className="rounded-lg bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors p-6">
              <div className="flex gap-6">
                <div className="w-1/3">
                  <h3 className="text-2xl font-bold text-white mb-3">Grammy Museum MS Redesign</h3>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">Web App</Badge>
                    <Badge variant="secondary">2 months</Badge>
                    <Badge className="bg-green-500 text-white">NEW</Badge>
                  </div>
                  <p className="text-gray-400 text-[1.2rem] leading-[2rem] mb-6">
                    Redesigning interactions to engage visitors of all ages and encourage donations and event bookings.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] hover:w-full transition-all duration-300"
                    asChild
                  >
                    <Link to="/grammy-museum">
                      View Project <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="w-2/3">
                  <video 
                    src="/lovable-uploads/Grammy Museum/Demo-Clip.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded border border-white/20"
                  />
                </div>
              </div>
            </div>

            {/* Mobile App Portfolio Expanded */}
            <div className="rounded-lg bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors p-6">
              <div className="flex gap-6">
                <div className="w-1/3">
                  <h3 className="text-2xl font-bold text-white mb-3">Mobile App Portfolio</h3>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">Web App</Badge>
                    <Badge variant="secondary">2 months</Badge>
                    <Badge className="bg-green-500 text-white">NEW</Badge>
                  </div>
                  <p className="text-gray-400 text-[1.2rem] leading-[2rem] mb-6">
                    View a collection of my mobile app design work across various industries and platforms.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] hover:w-full transition-all duration-300"
                    asChild
                  >
                    <Link to="/mobile-apps">
                      View Project <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="w-2/3 flex gap-2">
                  <img src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png" alt="Mobile App 1" className="w-1/2 rounded border border-white/20" />
                  <img src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png" alt="Mobile App 2" className="w-1/2 rounded border border-white/20" />
                </div>
              </div>
            </div>

            {/* Adhere+ */}
            <div className="rounded-lg bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors p-6">
              <div className="flex gap-6">
                <div className="w-1/3">
                  <h3 className="text-2xl font-bold text-white mb-3">Adhere+</h3>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">Web App</Badge>
                    <Badge variant="secondary">2 months</Badge>
                    <Badge className="bg-green-500 text-white">NEW</Badge>
                  </div>
                  <p className="text-gray-400 text-[1.2rem] leading-[2rem] mb-6">
                    Designing a comprehensive healthcare platform focused on patient adherence and medication management.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] hover:w-full transition-all duration-300"
                    asChild
                  >
                    <Link to="/adhere-plus">
                      View Project <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="w-2/3">
                  <img src="/lovable-uploads/01-Adhere/evidence-full.png" alt="Adhere+" className="w-full h-auto rounded border border-white/20" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dow' && (
          <div className="rounded-lg bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors p-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Camping Made Easy */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/01-camping-buddy/final-booking-demo-1.png" alt="Camping App" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Camping Made Easy</h3>
                <p className="text-gray-400 text-sm mb-4">Freelance Case Study</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/camping-app">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Gourmet Recipes */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Gourmet Recipes" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Gourmet Recipes</h3>
                <p className="text-gray-400 text-sm mb-4">Freelance Case Study</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/gourmet-recipes">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'shopmonkey' && (
          <div className="rounded-lg bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors p-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Data-Driven eBooks */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/759bf6e8-7359-4690-b129-57988eb2d3b9.png" alt="Data-Driven eBooks" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Data-Driven eBooks</h3>
                <p className="text-gray-400 text-sm mb-4">Graphic Design</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/graphic-designs/data-driven-ebooks">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Email Marketing Campaigns */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/5c1c5920-bce7-4dcd-9059-5f636b24fc68.png" alt="Email Marketing" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Marketing Campaigns</h3>
                <p className="text-gray-400 text-sm mb-4">Graphic Design</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/graphic-designs/email-marketing">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Social Media Campaigns */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/94eaf5c4-1470-42ff-852e-42b278ea631d.png" alt="Social Media" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Social Media Campaigns</h3>
                <p className="text-gray-400 text-sm mb-4">Graphic Design</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/graphic-designs/social-media">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Product Illustrations */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/9c0fc049-3139-426d-b3b9-b5e5f05219ac.png" alt="Product Illustrations" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Refining Product Illustrations</h3>
                <p className="text-gray-400 text-sm mb-4">Graphic Design</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/graphic-designs/product-illustrations">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Case Studies */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/37ca84b7-d63f-4f3a-8dbb-9c2db3ff21dd.png" alt="Case Studies" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Case Studies</h3>
                <p className="text-gray-400 text-sm mb-4">Graphic Design</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/graphic-designs/case-studies">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Event Designs */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/6261277f-8561-450f-a540-9cdd59870118.png" alt="Event Designs" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Event Designs</h3>
                <p className="text-gray-400 text-sm mb-4">Graphic Design</p>
                <div className="group">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#003CBC] to-[#001B56] group-hover:w-full transition-all duration-[800ms] ease-in-out"
                    asChild
                  >
                    <Link to="/graphic-designs/event-designs">
                      View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'shopmonkey' && (
          <div className="rounded-lg bg-[#161522]/50 backdrop-blur-sm border border-[#A2C6E9] hover:border-white transition-colors p-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Express Lane */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/01-express-lane/display-express-lane.png" alt="Express Lane" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Express Lane - Lightning Quick Services</h3>
                <p className="text-gray-400 text-sm mb-4">Shopmonkey</p>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-[#003CBC] to-[#001B56] hover:w-full transition-all duration-[800ms]"
                  asChild
                >
                  <Link to="/quick-services">
                    View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>

              {/* Product Designs */}
              <div className="bg-[#161522]/50 backdrop-blur-sm rounded-lg p-6 border border-[#A2C6E9] hover:border-white transition-colors">
                <div className="aspect-video mb-4">
                  <img src="/lovable-uploads/3b9e02c1-446c-48b1-9c63-d01152ab0b67.png" alt="Product Designs" className="w-full h-full object-cover rounded border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Product Designs</h3>
                <p className="text-gray-400 text-sm mb-4">Shopmonkey</p>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-[#003CBC] to-[#001B56] hover:w-full transition-all duration-[800ms]"
                  asChild
                >
                  <Link to="/product-designs">
                    View Project <ArrowRightIcon className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;