import './Skills.css'

const skills = [
  {
    category: 'Languages',
    items: ['Go', 'Python', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'Unix', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Flask', 'MobX', 'gRPC', 'Cypress'],
  },
  {
    category: 'Infrastructure',
    items: ['CI/CD', 'nginx', 'LUKS', 'mTLS', 'Docker Compose'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map(s => (
          <div key={s.category} className="skill-card">
            <h3 className="skill-category">{s.category}</h3>
            <div className="skill-items">
              {s.items.map(item => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
