import React from 'react';
import { LineChart, MessageSquare, Cpu, Database, Search, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business</span>
              <span className="block text-purple-200">With Artificial Intelligence</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover the power of AI and machine learning solutions that drive innovation and growth.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our AI Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Cutting-edge AI technologies to power your success
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <LineChart className="h-8 w-8 text-purple-600" />,
                  title: 'Predictive Analytics',
                  description: 'Leverage advanced algorithms to forecast trends and make data-driven decisions.'
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
                  title: 'Natural Language Processing',
                  description: 'Transform how you interact with customers through intelligent conversation systems.'
                },
                {
                  icon: <Cpu className="h-8 w-8 text-purple-600" />,
                  title: 'Machine Learning',
                  description: 'Automate complex tasks and discover patterns in your data.'
                },
                {
                  icon: <Database className="h-8 w-8 text-purple-600" />,
                  title: 'Big Data Analytics',
                  description: 'Process and analyze large datasets to uncover valuable insights.'
                },
                {
                  icon: <Search className="h-8 w-8 text-purple-600" />,
                  title: 'Computer Vision',
                  description: 'Implement visual recognition systems for enhanced automation.'
                },
                {
                  icon: <Rocket className="h-8 w-8 text-purple-600" />,
                  title: 'AI Consulting',
                  description: 'Expert guidance to implement AI solutions in your business.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  {feature.icon}
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home