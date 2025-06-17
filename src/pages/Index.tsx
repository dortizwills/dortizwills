
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { ArrowRightIcon, Award, TrendingUp, Image, Users, Layout, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Index = () => {
  const marketingDesigns = [
    {
      title: 'Data-Driven eBooks',
      description: 'Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less',
      href: '/graphic-designs/data-driven-ebooks',
      imagePath: '/lovable-uploads/3132f8cd-a1d3-4166-8782-cee980f9043d.png'
    },
    {
      title: 'Email Marketing Campaigns',
      description: 'Email marketing campaigns for an audience that is not reading inclined',
      href: '/graphic-designs/email-marketing',
      imagePath: '/lovable-uploads/cc56fb43-85f6-41c6-8efb-bd1225f35097.png'
    },
    {
      title: 'Social Media Campaigns',
      description: 'Social media and advertising campaigns that separated Shopmonkey in the Automotive software community',
      href: '/graphic-designs/social-media',
      imagePath: '/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png'
    }
  ];

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

  const skillPoints = [
    {
      title: "UX Design",
      description: "I focus on creating user-centered designs that prioritize empathy and clarity, especially in complex or high-stakes environments.",
      icon: <Layout size={24} className="text-blue-600" />
    },
    {
      title: "UI Design",
      description: "I design clean, responsive interfaces with attention to visual detail, accessibility, and consistency across mobile and web.",
      icon: <Image size={24} className="text-blue-600" />
    },
    {
      title: "Prototyping",
      description: "I rapidly explore and iterate on multiple design projects, delivering practical prototypes that support agile development.",
      icon: <Layout size={24} className="text-blue-600" />
    },
    {
      title: "Results Focused",
      description: "I produce high-quality work, consistently meet project goals, and iterate until the best cost efficient solution is found.",
      icon: <Award size={24} className="text-blue-600" />
    },
    {
      title: "Collaboration",
      description: "I drive collaborative environments, encourage open feedback and communication, and build positive team cultures.",
      icon: <Users size={24} className="text-blue-600" />
    },
    {
      title: "Growth-Minded Solutions",
      description: "I approach projects with curiosity and a desire to learn, always looking for ways to increase my skills and the company's bottom line.",
      icon: <TrendingUp size={24} className="text-blue-600" />
    }
  ];

  return (
    <div className="sm:pl-[220px] pl-0">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* What Clients Say Section with updated background */}
        <section 
          className="mb-16 relative rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/lovable-uploads/8b4673ec-42b6-4214-b86e-c33719b59abf.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
              {/* Image - 1/3 */}
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <img 
                  src="/lovable-uploads/3435faa1-71a0-4540-99de-e63964218a84.png" 
                  alt="Daniel Ortiz-Wills" 
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
              
              {/* Header Content - 2/3 */}
              <div className="lg:col-span-2">
                <p className="text-lg text-white/80 mb-2">Welcome to Daniel Ortiz-Wills' Portfolio</p>
                <h1 className="font-display text-3xl max-[819px]:text-2xl font-bold mb-4 bg-gradient-to-r from-[#E35CC3] via-[#F287D9] via-[#A888DA] to-[#6988DC] bg-clip-text text-transparent">
                  I'm a enthusiastic designer that loves creating visually pleasant and practical systems.
                </h1>
                <p className="text-xl text-white/80 max-w-2xl">
                  Don't just take my word for it though, see what some of my previous managers and peers have said about me.
                </p>
              </div>
            </div>
            
            {/* Testimonials Carousel with transparent background */}
            <div 
              className="rounded-lg p-6"
              style={{ backgroundColor: 'rgba(4, 16, 42, 0.8)' }}
            >
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Project - Takes 2/3 of the width on large screens */}
            <div className="lg:col-span-2 bg-white border border-black rounded-lg overflow-hidden">
              <Link to="/product-designs/quick-services" className="block">
                <div className="aspect-[16/9] relative">
                  <img src="/lovable-uploads/2fad7cda-021e-4386-83c6-7b65f6b7d71f.png" alt="Featured Project" className="w-full h-full object-cover" />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">Express Lane — Completing 15 minute services in 3 minutes</h3>
                <p className="text-gray-600 mb-4">
                  Reducing checkout times to 2-3 minutes, because quick service transactions shouldn't take 10-15 minutes
                </p>
                <Link to="/product-designs/quick-services" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <span className="mr-2">View Project</span>
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
            
            {/* Side Featured Projects - Takes 1/3 of the width on large screens, stretches to align with main project */}
            <div className="space-y-6 flex flex-col h-full">
              <Link to="/product-designs/camping-app" className="bg-white border border-black rounded-lg overflow-hidden flex hover:shadow-md transition-shadow">
                <div className="w-1/3 aspect-[3/2]">
                  <img src="/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png" alt="Camping Made Easy" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h4 className="font-display text-lg mb-1">Camping Made Easy</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    Camping shouldn't be hard, or that's what this app helps users to think. Camp no matter your skill level
                  </p>
                  <div className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="mr-1">View Project</span>
                    <ArrowRightIcon size={14} />
                  </div>
                </div>
              </Link>
              
              <Link to="/product-designs/gourmet-recipes" className="bg-white border border-black rounded-lg overflow-hidden flex hover:shadow-md transition-shadow">
                <div className="w-1/3 aspect-[3/2]">
                  <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Gourmet Recipes Anytime" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h4 className="font-display text-lg mb-1">Gourmet Recipes Anytime</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are
                  </p>
                  <div className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="mr-1">View Project</span>
                    <ArrowRightIcon size={14} />
                  </div>
                </div>
              </Link>
              
              <Link to="/product-designs/adhere-plus" className="bg-white border border-black rounded-lg overflow-hidden flex hover:shadow-md transition-shadow">
                <div className="w-1/3 aspect-[3/2]">
                  <img src="/lovable-uploads/8b455223-39de-4e07-bac2-cc46c96927a3.png" alt="Adhere+" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h4 className="font-display text-lg mb-1">Adhere+</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    0 to 1 web and branding design for a Adhere Plus's flagship app
                  </p>
                  <div className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="mr-1">View Project</span>
                    <ArrowRightIcon size={14} />
                  </div>
                </div>
              </Link>
              
              {/* Button stretches to fill remaining space */}
              <div className="flex-1 flex items-end">
                <Button asChild variant="outline" className="w-full py-6 text-lg bg-gradient-primary text-white border-none hover:opacity-90">
                  <Link to="/product-designs">
                    View UXUI Designs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">Visual Designs</h2>
          
          {/* Grid layout for 820px and above */}
          <div className="hidden min-[820px]:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {marketingDesigns.map((design, index) => (
              <Link 
                key={index} 
                to={design.href}
                className="bg-white border border-black rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative">
                  <img 
                    src={design.imagePath} 
                    alt={design.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl mb-2">{design.title}</h4>
                  <p className="text-gray-600 mb-4">
                    {design.description}
                  </p>
                  <div className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="mr-2">View Project</span>
                    <ArrowRightIcon size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Card layout for 819px and below - matching first reference image */}
          <div className="max-[819px]:block hidden space-y-4 mb-8">
            {marketingDesigns.map((design, index) => (
              <Link 
                key={index}
                to={design.href}
                className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 p-4">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img 
                      src={design.imagePath} 
                      alt={design.title} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-lg font-medium mb-1 text-gray-900">{design.title}</h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {design.description}
                    </p>
                    <div className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                      <span className="mr-1">View Project</span>
                      <ArrowRightIcon size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View Visual Designs Button */}
          <div className="flex justify-center">
              <Button asChild variant="outline" className="w-full py-6 text-lg bg-gradient-primary text-white border-none hover:opacity-90">
              <Link to="/graphic-designs">
                View Visual Designs
              </Link>
            </Button>
          </div>
        </section>

        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default Index;
