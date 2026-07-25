export default function Button({ label, onClick, variant = 'primary' }) {
  const buttonStyle = {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    margin: '0.5rem'
  };

  return <button style={buttonStyle} onClick={onClick}>{label}</button>;
}
