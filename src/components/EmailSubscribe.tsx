
import React, { useState } from 'react';
import { toast } from 'sonner';
import { MailIcon } from 'lucide-react';

const EmailSubscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendNotificationEmail = async (subscriberEmail: string) => {
    try {
      // In a real-world scenario, you would use a server endpoint to send emails
      // This is a simplified example that would need backend implementation
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          user_id: 'YOUR_USER_ID', // Replace with your EmailJS user ID
          template_params: {
            to_email: 'dortizwills@gmail.com',
            from_email: subscriberEmail,
            message: `${subscriberEmail} has subscribed for updates!`,
          },
        }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error sending notification:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      
      // Send notification to your email
      await sendNotificationEmail(email);
      
      toast.success('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('Could not process your subscription. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-black p-8 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <MailIcon className="text-gradient-primary" size={24} />
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
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-gradient-primary hover:opacity-90 text-white font-medium py-3 px-6 rounded-md transition-opacity disabled:opacity-70"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default EmailSubscribe;
