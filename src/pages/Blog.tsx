import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: "future-of-ai-in-business",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "The Future of AI in Business",
    excerpt: "Explore how artificial intelligence is transforming modern business operations and revolutionizing decision-making processes.",
    date: "Mar 10, 2025",
    category: "Business AI",
    content: `Artificial intelligence is revolutionizing the way businesses operate in the modern world. From automated customer service to predictive analytics, AI is becoming an integral part of business operations.

    Companies that embrace AI technologies are seeing significant improvements in efficiency, cost reduction, and customer satisfaction. Machine learning algorithms are helping businesses make better decisions by analyzing vast amounts of data and identifying patterns that humans might miss.

    The future of AI in business looks promising, with new applications and use cases emerging regularly. From small startups to large enterprises, organizations of all sizes are finding ways to leverage AI to gain a competitive advantage.`
  },
  {
    slug: "deep-learning-comprehensive-guide",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Deep Learning: A Comprehensive Guide",
    excerpt: "Understanding the fundamentals of deep learning and neural networks, from architecture to implementation.",
    date: "Mar 8, 2025",
    category: "Deep Learning",
    content: `Deep learning has transformed the field of artificial intelligence, enabling breakthrough advances in computer vision, natural language processing, and more.

    Neural networks, inspired by the human brain, are at the heart of deep learning. These sophisticated models can learn complex patterns and representations from data, making them incredibly powerful for a wide range of applications.

    This comprehensive guide explores the fundamental concepts, architectures, and best practices in deep learning, helping you understand how to leverage these technologies effectively.`
  },
  {
    slug: "rise-of-generative-ai",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "The Rise of Generative AI",
    excerpt: "Exploring the latest developments in generative AI and its impact on creative industries.",
    date: "Mar 6, 2025",
    category: "GenAI",
    content: `Generative AI is revolutionizing creative industries, enabling new forms of artistic expression and content creation.

    From text generation to image synthesis, generative models are pushing the boundaries of what's possible with artificial intelligence. These technologies are not just tools for automation, but partners in the creative process.

    As generative AI continues to evolve, we're seeing unprecedented applications in art, design, music, and literature. This article explores the current state of generative AI and its implications for the future of creative work.`
  },
  {
    slug: "understanding-large-language-models",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Understanding Large Language Models",
    excerpt: "A deep dive into LLMs, their architecture, capabilities, and real-world applications.",
    date: "Mar 4, 2025",
    category: "LLMs",
    content: `Large Language Models (LLMs) have emerged as one of the most significant developments in artificial intelligence.

    These sophisticated models can understand and generate human-like text, answer questions, and even write code. Their capabilities are transforming how we interact with computers and process information.

    This article explores the architecture behind LLMs, their current capabilities, and the exciting possibilities they offer for the future of human-computer interaction.`
  },
  {
    slug: "machine-learning-best-practices",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Machine Learning Best Practices",
    excerpt: "Essential guidelines and best practices for implementing successful machine learning projects.",
    date: "Mar 2, 2025",
    category: "Machine Learning",
    content: `Successful machine learning projects require careful planning, robust methodology, and attention to detail.

    From data preparation to model deployment, following best practices ensures better outcomes and more reliable results. This guide covers essential considerations for every stage of the machine learning lifecycle.

    Learn about data quality, feature engineering, model selection, and deployment strategies that will help you build more effective machine learning solutions.`
  },
  {
    slug: "ethics-in-ai-development",
    image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Ethics in AI Development",
    excerpt: "Understanding the importance of ethical considerations in AI development and deployment.",
    date: "Feb 28, 2025",
    category: "AI Ethics",
    content: `As AI becomes more prevalent in our lives, ethical considerations in AI development are more important than ever.

    From bias in training data to privacy concerns and algorithmic fairness, AI developers must navigate complex ethical challenges. This article explores key ethical considerations and provides frameworks for responsible AI development.

    Learn about best practices for ensuring fairness, transparency, and accountability in AI systems, and understand the role of ethics in shaping the future of artificial intelligence.`
  }
];

export { blogPosts };

function Blog() {
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
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
