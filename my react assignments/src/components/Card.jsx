import { useState } from 'react';

export default function Card({ title, content }) {
  const [liked, setLiked] = useState(false);

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', margin: '1rem 0', maxWidth: '300px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <button 
        onClick={() => setLiked(!liked)} 
        style={{ marginTop: '0.5rem', background: liked ? '#ff4757' : '#e4e4e4', color: liked ? '#fff' : '#000', border: 'none', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}
      >
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  );
}
