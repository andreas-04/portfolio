import './Projects.css'

const projects = [
  {
    name: 'TerraCrate',
    period: 'August 2025 – May 2026',
    tag: 'Capstone Senior Design',
    description:
      'A self-hosted, zero-trust file-sharing platform with full-disk encryption, mTLS client verification, and a multi-service Docker Compose architecture.',
    bullets: [
      'Designed a Flask REST API with JWT session management and attribute-based access control for file management, user administration, and system configuration.',
      'Engineered an mTLS authentication layer using a self-signed CA, nginx reverse proxy, and automated X.509/PKCS#12 certificate delivery via SMTP.',
      'Implemented full-disk encryption on a Raspberry Pi using LUKS with custom systemd service orchestration for secure startup sequencing.',
      'Deployed a multi-service architecture via Docker Compose with persistent volumes, custom DNS configuration, and admin-controlled invite system with domain allowlisting.',
      'Built a React/TypeScript frontend with role-aware UI rendering and a real-time admin dashboard for user, group, and system management.',
    ],
    tags: ['Python', 'Flask', 'React', 'TypeScript', 'Docker', 'LUKS', 'nginx', 'mTLS'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="proj-list">
        {projects.map((p, i) => (
          <div key={i}>
            <div className="proj-header">
              <div>
                <h3 className="proj-name">{p.name}</h3>
                <span className="proj-tag">{p.tag}</span>
              </div>
              <span className="proj-period">{p.period}</span>
            </div>
            <p className="proj-desc">{p.description}</p>
            <ul className="proj-bullets">
              {p.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="proj-tech">
              {p.tags.map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
