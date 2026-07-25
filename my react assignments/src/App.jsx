import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import Footer from './components/Footer';
import Form from './components/Form';
import BlogApp from './components/BlogApp';

export default function App() {
  const [val, setVal] = useState('');

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f6f9', minHeight: '100vh', padding: '1rem' }}>
      <Header title="My Web Engineering Showcase" />
      
      <main style={{ maxWidth: '600px', margin: '2rem auto', background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        {/* === ASSIGNMENT 1: PERSONAL PORTFOLIO SECTION === */}
        <div style={{ borderBottom: '2px solid #eee', paddingBottom: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: '#007bff', marginBottom: '1rem' }}>Assignment 1: Personal Portfolio</h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <h4>About Me</h4>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Hello! I am a passionate front-end developer focused on building clean, user-friendly, and interactive web application frameworks.
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4>Education</h4>
            <p style={{ margin: 0, color: '#333' }}><strong>B-Tech in Computer Science Engineering</strong></p>
            <p style={{ margin: '0.2rem 0 0', color: '#777', fontSize: '0.9rem' }}>NSS College of Engineering | 2024 - 2028</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4>Projects Showcase</h4>
            <ul style={{ paddingLeft: '1.2rem', color: '#555', margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Smart HFMS:</strong> Hospital Finder & Management System | Java, MySQL, JDBC (Group Project).
              </li>
              <li>
                <strong>MediTrack:</strong> Medicine Tracking System | JavaScript, Node.js, Express.js, MySQL (Group Project).
              </li>
            </ul>
          </div>

          <div>
            <h4>Certifications & Activities</h4>
            <ul style={{ paddingLeft: '1.2rem', color: '#555', margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                Completed <strong>AI Digital 101</strong> certification from Future Skills Prime.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                Earned certification in <strong>Virtual Reality</strong> through NPTEL.
              </li>
              <li>
                Engaged member of the <strong>ACM Student Chapter</strong> and <strong>College AI/ML Community</strong>.
              </li>
            </ul>
          </div>
        </div>

        {/* === ASSIGNMENT 2: REUSABLE COMPONENTS PRACTICE === */}
        <div style={{ borderBottom: '2px solid #eee', paddingBottom: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: '#007bff', marginBottom: '1rem' }}>Assignment 2: Component Showcase</h2>
          
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Button label="Primary Button" onClick={() => alert('Clicked!')} variant="primary" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Card title="React Component Card" content="This card tracks state independently." />
          </div>

          <div style={{ textAlign: 'center' }}>
            <Form onSubmit={(input) => setVal(input)} />
            {val && <p style={{ color: 'green', fontWeight: 'bold', marginTop: '0.5rem' }}>Submitted State Data: {val}</p>}
          </div>
        </div>

        {/* === ASSIGNMENT 3: MINI BLOG ENGINE === */}
        <div>
          <h2 style={{ color: '#007bff', marginBottom: '1rem' }}>Assignment 3: Blog UI Engine</h2>
          <BlogApp />
        </div>

      </main>

      <Footer year="2026" company="Developer Portfolio Systems Inc." />
    </div>
  );
}
