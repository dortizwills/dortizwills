
import React from 'react';
import { Link } from 'react-router-dom';
import QuickLinkCard from '../components/QuickLinkCard';
import EmailSubscribe from '../components/EmailSubscribe';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Index = () => {
  const marketingDesigns = [
    {
      title: 'Data-Driven eBooks',
      description: 'Distilling hundreds of datapoints into 3 simplified ebooks in 30 pages or less',
      href: '/graphic-designs/data-driven-ebooks',
      imagePath: '/lovable-uploads/baed769b-8cd3-4542-9dc3-80ea9e094ce8.png'
    },
    {
      title: 'Email Marketing Campaigns',
      description: 'Email marketing campaigns for an audience that is not reading inclined',
      href: '/graphic-designs/email-marketing',
      imagePath: '/lovable-uploads/f79e2d2b-248a-4a89-9a44-ffa1e56eba9c.png'
    },
    {
      title: 'Social Media Campaigns',
      description: 'Social media and advertising campaigns that separated Shopmonkey in the Automotive software community',
      href: '/graphic-designs/social-media',
      imagePath: '/lovable-uploads/62b8d063-053c-4fa6-a1a2-477546463e23.png'
    }
  ];

  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16">
          <p className="text-lg text-gray-600 mb-2">Daniel Ortiz-Wills' Portfolio</p>
          <h1 className="font-display text-6xl font-bold mb-4">Daniel Ortiz-Wills' Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Big ideas, clean pixels, happy users — I design with a little heart and a lot of hustle.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Project - Takes 2/3 of the width on large screens */}
            <div className="lg:col-span-2 bg-designer-gray rounded-lg overflow-hidden">
              <div className="aspect-[16/9] relative">
                <img src="/lovable-uploads/2fad7cda-021e-4386-83c6-7b65f6b7d71f.png" alt="Featured Project" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">Express Lane — Completing 15 minute services in 3 minutes</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar pellentesque egestas commodo enim et ornare.
                </p>
                <Link to="/product-designs/quick-services" className="inline-flex items-center text-designer-red hover:text-red-600 transition-colors">
                  <span className="mr-2">View Project</span>
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
            
            {/* Side Featured Projects - Takes 1/3 of the width on large screens */}
            <div className="space-y-6">
              <div className="bg-designer-gray rounded-lg overflow-hidden flex">
                <div className="w-1/3 aspect-[3/2]">
                  <img src="/lovable-uploads/5c802a04-6f1a-41ea-8c43-d0e7e3d5fdf4.png" alt="Camping Made Easy" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h4 className="font-display text-lg mb-1">Camping Made Easy</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    Camping shouldn't be hard, or that's what this app helps users to think. Camp no matter your skill level
                  </p>
                  <Link to="/product-designs/camping-app" className="inline-flex items-center text-sm text-designer-red hover:text-red-600 transition-colors">
                    <span className="mr-1">View Now</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
              
              <div className="bg-designer-gray rounded-lg overflow-hidden flex">
                <div className="w-1/3 aspect-[3/2]">
                  <img src="/lovable-uploads/0fdf6c4c-2976-4b6e-af61-6e5b7ed41be0.png" alt="Gourmet Recipes Anytime" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h4 className="font-display text-lg mb-1">Gourmet Recipes Anytime</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    Forgetting a recipe shouldn't stop you from getting gourmet recipes — no matter how busy you are
                  </p>
                  <Link to="/product-designs/gourmet-recipes" className="inline-flex items-center text-sm text-designer-red hover:text-red-600 transition-colors">
                    <span className="mr-1">View Now</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
              
              <div className="bg-designer-gray rounded-lg overflow-hidden flex">
                <div className="w-1/3 aspect-[3/2]">
                  <img src="/placeholder.svg" alt="Adhere+" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h4 className="font-display text-lg mb-1">Adhere+</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    0 to 1 web and branding design for a Adhere Plus's flagship app
                  </p>
                  <span className="inline-block bg-amber-500 text-white text-xs px-2 py-1 rounded">
                    In Progress
                  </span>
                </div>
              </div>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/product-designs">
                  View UXUI Designs
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">Marketing Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingDesigns.map((design, index) => (
              <Link 
                key={index} 
                to={design.href}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="aspect-video bg-designer-gray flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={design.imagePath} 
                    alt={design.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium mb-2">{design.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {design.description}
                  </p>
                  <span className="text-designer-red font-medium hover:underline">
                    View Case Study
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">What Clients Say</h2>
          <TestimonialCarousel />
        </section>

        <section>
          <EmailSubscribe />
        </section>
      </main>
    </div>
  );
};

export default Index;
