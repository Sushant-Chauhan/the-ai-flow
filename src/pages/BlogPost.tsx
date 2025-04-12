import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-purple-600 hover:text-purple-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="text-purple-600 hover:text-purple-700 mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <div className="mb-4">
              <span className="text-sm text-purple-600">{post.category}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="prose max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
