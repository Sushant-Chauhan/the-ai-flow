import React from 'react';

function Blog() {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "The Future of AI in Business",
      excerpt: "Explore how artificial intelligence is transforming modern business operations and revolutionizing decision-making processes.",
      date: "Mar 10, 2025",
      category: "Business AI"
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Deep Learning: A Comprehensive Guide",
      excerpt: "Understanding the fundamentals of deep learning and neural networks, from architecture to implementation.",
      date: "Mar 8, 2025",
      category: "Deep Learning"
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "The Rise of Generative AI",
      excerpt: "Exploring the latest developments in generative AI and its impact on creative industries.",
      date: "Mar 6, 2025",
      category: "GenAI"
    },
    {
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Understanding Large Language Models",
      excerpt: "A deep dive into LLMs, their architecture, capabilities, and real-world applications.",
      date: "Mar 4, 2025",
      category: "LLMs"
    },
    {
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Machine Learning Best Practices",
      excerpt: "Essential guidelines and best practices for implementing successful machine learning projects.",
      date: "Mar 2, 2025",
      category: "Machine Learning"
    },
    {
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Ethics in AI Development",
      excerpt: "Understanding the importance of ethical considerations in AI development and deployment.",
      date: "Feb 28, 2025",
      category: "AI Ethics"
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Latest AI Insights</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">Read More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog