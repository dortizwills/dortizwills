
import React from 'react';
import { Link } from 'react-router-dom';
import QuickLinkCard from '../components/QuickLinkCard';
import EmailSubscribe from '../components/EmailSubscribe';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const quickLinks = [
    {
      title: 'Redesigning "Quick Services"',
      description: 'Reduce checkout times to 2-3 minutes',
      href: '/product-designs/quick-services',
      imagePath: '/placeholder.svg'
    },
    {
      title: 'Camping Made Easy',
      description: 'Camp no matter your skill level',
      href: '/product-designs/camping-app',
      imagePath: '/placeholder.svg'
    },
    {
      title: 'Gourmet Recipes Anytime',
      description: 'Access great recipes on demand',
      href: '/product-designs/gourmet-recipes',
      imagePath: '/placeholder.svg'
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
                  <img src="/placeholder.svg" alt="Camping Made Easy" className="w-full h-full object-cover" />
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
                  <img src="/placeholder.svg" alt="Gourmet Recipes Anytime" className="w-full h-full object-cover" />
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
                  View Product Designs
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <QuickLinkCard 
                key={index}
                title={link.title}
                description={link.description}
                href={link.href}
                imagePath={link.imagePath}
              />
            ))}
          </div>
        </section>

        <section>
          <EmailSubscribe />
        </section>
      </main>
    </div>
  );
};

export default Index;
