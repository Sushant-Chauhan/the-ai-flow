import React from 'react';
import { LineChart, MessageSquare, Cpu, Database, Search, Rocket, Bot, Brain } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <LineChart className="h-12 w-12 text-purple-600" />,
      title: 'Predictive Analytics',
      description: 'Leverage advanced algorithms to forecast trends and make data-driven decisions. Our predictive analytics solutions help you stay ahead of market changes and optimize your business operations.',
      features: ['Time series forecasting', 'Risk assessment', 'Customer behavior prediction']
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-purple-600" />,
      title: 'Natural Language Processing',
      description: 'Transform how you interact with customers through intelligent conversation systems. Implement chatbots, sentiment analysis, and text processing solutions.',
      features: ['Chatbot development', 'Sentiment analysis', 'Text classification']
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: 'Deep Learning Solutions',
      description: 'Implement cutting-edge deep learning models for complex pattern recognition and decision-making tasks.',
      features: ['Neural network design', 'Transfer learning', 'Model optimization']
    },
    {
      icon: <Bot className="h-12 w-12 text-purple-600" />,
      title: 'Generative AI',
      description: 'Harness the power of generative AI for content creation, design, and innovation in your products and services.',
      features: ['Text generation', 'Image synthesis', 'Creative content production']
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: 'Big Data Analytics',
      description: 'Process and analyze large datasets to uncover valuable insights. Our big data solutions help you make sense of complex data landscapes.',
      features: ['Data pipeline development', 'Real-time analytics', 'Data visualization']
    },
    {
      icon: <Rocket className="h-12 w-12 text-purple-600" />,
      title: 'AI Consulting',
      description: 'Get expert guidance on implementing AI solutions in your business. We help you identify opportunities and develop strategic AI initiatives.',
      features: ['Strategy development', 'Technology assessment', 'Implementation planning']
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive AI solutions for your business needs</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services