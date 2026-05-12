import './Experience.css'

const jobs = [
  {
    title: 'Associate Software Engineer',
    company: 'Schweitzer Engineering Laboratories',
    period: 'June 2025 – Present',
    bullets: [
      'Built an internal code generation tool that creates complete Go microservices directly from .proto files, reducing service bootstrap time from days to minutes and shipping as part of an internal SDK release.',
      'Applied hexagonal architecture patterns to generate clean, maintainable service layers across HTTP, gRPC, and WebSocket transports.',
      'Diagnosed recurring system instability in CI virtual machines and built a system readiness endpoint that automated pre-run health validation, unblocking a 15+ person development team and reducing failed pipeline runs.',
      'Partnered with engineers across multiple product groups to surface recurring workflow pain points and drive feature enhancements aligned with real development needs.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Schweitzer Engineering Laboratories',
    period: 'October 2024 – June 2025',
    bullets: [
      'Shipped production-ready frontend features for a containerized React microservice, using MobX to improve state consistency, responsiveness, and user workflow clarity.',
      'Developed and maintained Cypress end-to-end test suites, increasing test reliability and preventing regressions across high-traffic user flows.',
      'Implemented CI/CD pipeline caching for unit tests, reducing build times by up to 30% and speeding up iteration for the entire development team.',
      'Collaborated with senior engineers in an Agile environment through design discussions, code reviews, and cross-service integration work.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="exp-list">
        {jobs.map((job, i) => (
          <div key={i}>
            <div className="exp-header">
              <div>
                <h3 className="exp-title">{job.title}</h3>
                <p className="exp-company">{job.company}</p>
              </div>
              <span className="exp-period">{job.period}</span>
            </div>
            <ul className="exp-bullets">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
