import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl font-bold text-white">AIFlow</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-purple-400">Home</Link>
            <Link to="/blog" className="text-gray-400 hover:text-purple-400">Blog</Link>
            <Link to="/services" className="text-gray-400 hover:text-purple-400">Services</Link>
            <Link to="/contact" className="text-gray-400 hover:text-purple-400">Contact</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex justify-center space-x-6">
            <a href="mailto:sushantchauhan941@gmail.com" className="text-gray-400 hover:text-purple-400 flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              sushantchauhan941@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sushant-c-2017711b3/" className="text-gray-400 hover:text-purple-400 flex items-center">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-center text-gray-400">© 2025 AIFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
