import { useState } from 'react';

export default function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter text..." 
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem' }}>Submit</button>
    </form>
  );
}
