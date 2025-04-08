import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600';
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AIFlow</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/blog" className={isActive('/blog')}>Blog</Link>
            <Link to="/services" className={isActive('/services')}>Services</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar