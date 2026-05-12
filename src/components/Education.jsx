import './Education.css'

export default function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="edu-card">
        <div>
          <h3 className="edu-school">University of Idaho</h3>
          <p className="edu-degree">B.S. Computer Science</p>
          <p className="edu-gpa"><span className="gpa-label">GPA:</span><span className="gpa-value"> 3.57</span></p>
        </div>
        <div className="edu-meta">
          <span className="edu-location">Moscow, ID</span>
          <span className="edu-period">May 2026</span>
        </div>
      </div>
    </section>
  )
}
