import { useState } from 'react';
import postsData from '../posts.json';

export default function BlogApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = postsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginTop: '2rem' }}>
      <h3>Mini Project: React Blog UI</h3>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input 
          type="text" 
          placeholder="Search posts..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '0.5rem', flex: 1 }}
        />
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="All">All Categories</option>
          <option value="Tech">Tech</option>
          <option value="Design">Design</option>
        </select>
      </div>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} style={{ border: '1px solid #eee', padding: '0.8rem', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.75rem', background: '#e0e0e0', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>{post.category}</span>
              <h4 style={{ margin: '0.4rem 0 0.2rem' }}>{post.title}</h4>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>{post.summary}</p>
            </div>
          ))
        ) : (
          <p style={{ color: '#999' }}>No posts found matching search criteria.</p>
        )}
      </div>
    </div>
  );
}
