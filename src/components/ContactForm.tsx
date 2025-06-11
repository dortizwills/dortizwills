
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Mail, User, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('subject', formData.subject || 'Reaching Out');
    form.append('message', formData.message);

    // Set hidden fields for FormSubmit
    form.append('_next', window.location.href);
    form.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/d4ddafc4feecd5d121fc719063293c2c', {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-black p-8 rounded-lg text-center">
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-bold">Message Sent</h3>
          <p className="text-gray-600">Thank you for reaching out!</p>
          <p className="text-gray-600">
            You can expect a message from me in the next 24 hours. I'm happy to explore 
            the vision you have for your next project.
          </p>
          <p className="text-gray-600 font-medium">Talk soon!</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-primary text-white font-medium py-3 px-6 rounded-md transition-opacity hover:opacity-90 mt-6"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-black p-8 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="text-gradient-primary" size={24} />
        <h3 className="font-display text-2xl">Contact Me</h3>
      </div>
      
      <p className="mb-6 text-gray-600">
        Interested in working with me or have a project in mind? I'd love to hear from you.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's this about?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell me about your project or what you'd like to discuss..."
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium py-3 px-6 rounded-md transition-opacity disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
