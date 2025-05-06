
import React from 'react';
import QuickLinkCard from '../components/QuickLinkCard';
import EmailSubscribe from '../components/EmailSubscribe';

const Index = () => {
  const quickLinks = [
    {
      title: 'Redesigning "Quick Services"',
      description: 'Reduce checkout times to 2-3 minutes',
      href: '/product-designs/quick-services'
    },
    {
      title: 'Camping Made Easy',
      description: 'Camp no matter your skill level',
      href: '/product-designs/camping-app'
    },
    {
      title: 'Gourmet Recipes Anytime',
      description: 'Access great recipes on demand',
      href: '/product-designs/gourmet-recipes'
    }
  ];

  return (
    <div className="pl-[220px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16">
          <h1 className="font-display text-6xl font-bold mb-4">Product Design Guy</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Big ideas, clean pixels, happy users — I design with a little heart and a lot of hustle.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-designer-gray to-white aspect-video rounded-lg flex items-center justify-center border border-gray-100">
              <span className="text-gray-400">Project Image</span>
            </div>
            <div className="bg-gradient-to-br from-designer-gray to-white aspect-video rounded-lg flex items-center justify-center border border-gray-100 md:col-span-2">
              <span className="text-gray-400">Project Image</span>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-3xl mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <QuickLinkCard 
                key={index}
                title={link.title}
                description={link.description}
                href={link.href}
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
