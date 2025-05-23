import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Phone, MessageSquare } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a production environment, you would want to send this to your backend
    // For now, we'll just show a success message
    alert('Thank you! Your message has been sent.');
    
    // Optional: Send an email notification
    const mailtoLink = `mailto:sushantchauhan941@gmail.com?subject=New Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    
    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Have questions about our AI solutions? We're here to help!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:sushantchauhan941@gmail.com" className="text-gray-900 hover:text-purple-600">
                    sushantchauhan941@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sushant-c-2017711b3/" target="_blank" className="text-gray-900 hover:text-purple-600">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <a 
                    href="https://wa.me/918377897610" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-900 hover:text-purple-600"
                  >
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
