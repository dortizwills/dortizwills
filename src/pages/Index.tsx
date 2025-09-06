
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { ArrowRightIcon, Award, TrendingUp, Image, Users, Layout, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Index = () => {
  const marketingDesigns = [
    {
      title: 'Data-Driven eBooks',
      description: 'Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less',
      href: '/graphic-designs/data-driven-ebooks',
      imagePath: '/lovable-uploads/3132f8cd-a1d3-4166-8782-cee980f9043d.png',
      tags: ['Shopmonkey', 'Graphics', '2 months']
    },
    {
      title: 'Email Marketing Campaigns',
      description: 'Email marketing campaigns for an audience that is not reading inclined',
      href: '/graphic-designs/email-marketing',
      imagePath: '/lovable-uploads/cc56fb43-85f6-41c6-8efb-bd1225f35097.png',
      tags: ['Shopmonkey', 'Marketing', '2 months']
    },
    {
      title: 'Social Media Campaigns',
      description: 'Social media and advertising campaigns that separated Shopmonkey in the Automotive software community',
      href: '/graphic-designs/social-media',
      imagePath: '/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png',
      tags: ['Shopmonkey', 'Graphics', '2-3 days']
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
    <div>
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* What Clients Say Section with updated background */}
        <section 
          className="mb-8 relative rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url('/lovable-uploads/8b4673ec-42b6-4214-b86e-c33719b59abf.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start" style={{ marginBottom: '0px' }}>
              {/* Image - 1/3 */}
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <img 
                  src="/lovable-uploads/self-photo@2x.png" 
                  alt="Daniel Ortiz-Wills" 
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
              
              {/* Header Content - 2/3 */}
              <div className="lg:col-span-2">
                <p className="text-lg text-white/80 mb-2 text-left">Welcome to Daniel Ortiz-Wills' Portfolio</p>
                <div 
                  className="rounded-lg p-6 pb-8"
                  style={{ backgroundColor: 'rgba(4, 16, 42, 0.8)' }}
                >
                  <h2 className="text-2xl font-display font-bold mb-6 text-left bg-gradient-to-r from-[#E35CC3] via-[#F287D9] via-[#A888DA] to-[#6988DC] bg-clip-text text-transparent">
                    Collaboration is my middle name, prior managers and peers agree.
                  </h2>
                  <TestimonialCarousel testimonials={testimonials} />
                </div>
              </div>
            </div>
            
            {/* Testimonials Carousel with transparent background */}
{/*             <div 
              className="rounded-lg p-6"
              style={{ backgroundColor: 'rgba(4, 16, 42, 0.8)' }}
            >
              <TestimonialCarousel testimonials={testimonials} />
            </div> */}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">UXUI Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Featured Project - Takes 2/3 of the width on large screens */}
            <div className="lg:col-span-2 bg-white border border-black rounded-lg overflow-hidden">
              <Link to="/product-designs/grammy-museum" className="block">
                <div className="relative overflow-hidden">
                  <video 
                    src="/lovable-uploads/Grammy Museum/Demo-Clip.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">Grammy Museum MS Redesign</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">Raborn Media</Badge>
                  <Badge variant="secondary">Web App</Badge>
                  <Badge variant="secondary">2 months</Badge>
                  <Badge className="bg-green-500 text-white hover:bg-green-500/80">NEW</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Redesigning interactions to engage visitors of all ages and encourage donations and event bookings.
                </p>
                <Link to="/product-designs/grammy-museum" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <span className="mr-2">View Project</span>
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
            
            {/* Side Featured Projects - Takes 1/3 of the width on large screens, stretches to align with main project */}
            <div className="space-y-6 flex flex-col h-full">
              <Link to="/product-designs/quick-services" className="bg-white border border-black rounded-lg overflow-hidden flex hover:shadow-md transition-shadow group relative">
                <div className="w-1/3 aspect-[3/2]">
                  <img src="/lovable-uploads/01-express-lane/display-express-lane.png" alt="Express Lane" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gray-300 group-hover:bg-black transition-colors duration-300 clip-path-diagonal flex items-center justify-center z-10">
                    <ArrowRightIcon size={16} className="text-white rotate-[-45deg] translate-x-2 -translate-y-2" />
                  </div>
                  <h4 className="font-display text-lg mb-1 pr-8">Express Lane - Mobile</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2 pr-8">
                    Reducing checkout times to 2-3 minutes, because quick service transactions shouldn't take 10-15 minutes
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">Shopmonkey</Badge>
                    <Badge variant="secondary" className="text-xs">Web App</Badge>
                    <Badge variant="secondary" className="text-xs">3 months</Badge>
                  </div>
                </div>
              </Link>
              
              <Link to="/product-designs/gourmet-recipes" className="bg-white border border-black rounded-lg overflow-hidden flex hover:shadow-md transition-shadow group relative">
                <div className="w-1/3 aspect-[3/2]">
                  <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Gourmet Recipes Anytime" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gray-300 group-hover:bg-black transition-colors duration-300 clip-path-diagonal flex items-center justify-center z-10">
                    <ArrowRightIcon size={16} className="text-white rotate-[-45deg] translate-x-2 -translate-y-2" />
                  </div>
                  <h4 className="font-display text-lg mb-1 pr-8">Gourmet Recipes Anytime</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2 pr-8">
                    Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">Case Study</Badge>
                    <Badge variant="secondary" className="text-xs">Mobile App</Badge>
                    <Badge variant="secondary" className="text-xs">2 months</Badge>
                  </div>
                </div>
              </Link>

              <Link to="/mobile-apps" className="bg-white border border-black rounded-lg overflow-hidden flex hover:shadow-md transition-shadow group relative">
                <div className="w-1/3 aspect-[3/2]">
                  <img src="/lovable-uploads/c041bbcf-4f2c-49cc-98bd-4bb0c981f7c4.png" alt="Mobile Apps" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gray-300 group-hover:bg-black transition-colors duration-300 clip-path-diagonal flex items-center justify-center z-10">
                    <ArrowRightIcon size={16} className="text-white rotate-[-45deg] translate-x-2 -translate-y-2" />
                  </div>
                  <h4 className="font-display text-lg mb-1 pr-8">Mobile Apps</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2 pr-8">
                    0 to 1 mobile and brand design for various agency clients
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">Raborn Media</Badge>
                    <Badge variant="secondary" className="text-xs">Mobile App</Badge>
                    <Badge variant="secondary" className="text-xs">1 month</Badge>
                  </div>
                </div>
              </Link>
              
              {/* Button stretches to fill remaining space */}
              <div className="flex-1 flex items-end">
                <Button asChild variant="outline" className="w-full py-6 text-base bg-gradient-primary text-white border-none hover:opacity-90">
                  <Link to="/product-designs">
                    More UXUI Designs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">Graphic Designs</h2>
          
          {/* Grid layout for 680px and above */}
          <div className="hidden custom:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                  <div className="flex flex-wrap gap-2 mb-3">
                    {design.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
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

          {/* Horizontal card layout for 680px and below */}
          <div className="custom:hidden space-y-4 mb-8">
            {marketingDesigns.map((design, index) => (
              <Link 
                key={index}
                to={design.href}
                className="bg-white border border-black rounded-lg overflow-hidden flex hover:shadow-md transition-shadow"
              >
                <div className="w-1/3 aspect-[3/2]">
                  <img 
                    src={design.imagePath} 
                    alt={design.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 w-2/3">
                  <h4 className="font-display text-lg mb-1">{design.title}</h4>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {design.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {design.description}
                  </p>
                  <div className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="mr-1">View Project</span>
                    <ArrowRightIcon size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View Graphic Designs Button */}
          <div className="flex justify-center">
              <Button asChild variant="outline" className="w-full py-6 text-base bg-gradient-primary text-white border-none hover:opacity-90">
              <Link to="/graphic-designs">
                More Graphic Designs
              </Link>
            </Button>
          </div>
        </section>

        {/* <section>
          <ContactForm />
        </section> */}
      </main>
    </div>
  );
};

export default Index;
