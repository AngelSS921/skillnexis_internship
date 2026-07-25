export default function Footer({ year, company }) {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', background: '#eee', marginTop: '2rem' }}>
      <p>&copy; {year} {company}. All rights reserved.</p>
    </footer>
  );
}
