
import React, { useState } from 'react';
import { toast } from 'sonner';
import { MailIcon } from 'lucide-react';

const EmailSubscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    toast.success('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="bg-designer-gray p-8 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <MailIcon className="text-designer-red" size={24} />
        <h3 className="font-display text-2xl">Subscribe to Monthly Updates</h3>
      </div>
      
      <p className="mb-6 text-gray-600">
        Get the latest UX insights and project updates delivered straight to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-designer-red"
        />
        <button 
          type="submit" 
          className="bg-designer-red hover:bg-red-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default EmailSubscribe;
