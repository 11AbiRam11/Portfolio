import React from 'react'
import './App.css'
import ProjectCard from './components/ProjectCard'

function App() {
  const projects = [
    {
      id: 1,
      title: 'Aurora UI',
      description: 'A neon-styled component library with fluid animations.',
      tech: 'React, CSS',
      link: 'https://example.com/aurora',
    },
    {
      id: 2,
      title: 'Realtime Dashboard',
      description: 'Live data dashboard with WebSockets.',
      tech: 'React, Node.js',
      link: 'https://example.com/dashboard',
    },
    {
      id: 3,
      title: '3D Gallery',
      description: 'Interactive 3D gallery using WebGL.',
      tech: 'Three.js, WebGL',
      link: 'https://example.com/3d-gallery',
    },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="logo">YourName</div>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1>Stunning Black-Themed Portfolio</h1>
          <p>Building immersive UI experiences with React & animations.</p>
        </section>

        <section id="projects" className="projects">
          <h2>Selected Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="skills">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS & Animations</li>
            <li>HTML</li>
            <li>WebGL</li>
            <li>Node.js</li>
          </ul>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
          <p>GitHub: <a href="https://github.com/username" target="_blank" rel="noreferrer">@username</a></p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 YourName — Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App