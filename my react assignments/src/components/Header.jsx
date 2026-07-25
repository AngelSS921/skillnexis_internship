export default function Header({ title }) {
  return (
    <header style={{ padding: '1rem', background: '#222', color: '#fff', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
}
