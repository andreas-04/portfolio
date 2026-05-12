import './Extracurricular.css'

const activities = [
  {
    role: 'Chapter President',
    org: 'Association for Computing Machinery',
    sub: 'University of Idaho',
    period: 'January 2023 – December 2023',
    bullets: [
      'Led the University of Idaho ACM chapter, organizing events and initiatives that increased membership by 25% and improved community engagement.',
      'Hosted workshops on portfolio building and technical interview preparation, helping members strengthen their professional skill sets.',
    ],
  },
  {
    role: 'Member',
    org: 'Idaho Quantitative Traders',
    sub: '',
    period: 'August 2025 – Present',
    bullets: [
      'Contributed to the development of a Go-based strategy backtesting system, enabling simulation, performance analysis, and iteration on algorithmic trading logic.',
    ],
  },
]

export default function Extracurricular() {
  return (
    <section id="extracurricular">
      <h2 className="section-title">Extracurricular</h2>
      <div className="extra-list">
        {activities.map((a, i) => (
          <div key={i}>
            <div className="extra-header">
              <div>
                <h3 className="extra-role">{a.role}</h3>
                <p className="extra-org">{a.org}{a.sub && <span className="extra-sub"> — {a.sub}</span>}</p>
              </div>
              <span className="extra-period">{a.period}</span>
            </div>
            <ul className="extra-bullets">
              {a.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
