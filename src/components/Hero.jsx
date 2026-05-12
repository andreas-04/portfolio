import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-top">
        <div className="hero-text">
          <h1 className="hero-name">Andreas Neacsu</h1>
          <p className="hero-title">Software Engineer</p>
          <p className="hero-bio">
            I build reliable backend systems and developer tooling. Associate
            Software Engineer at{' '}
            <a href="https://selinc.com" target="_blank" rel="noreferrer">
              Schweitzer Engineering Laboratories
            </a>
            . B.S. Computer Science, University of Idaho, 2026.
          </p>
          <div className="hero-links">
            <a
              href="mailto:andreasneacsu@gmail.com"
              className="hero-btn hero-btn--primary"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/andreas-04"
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn--secondary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andreas-neacsu"
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn--secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <img src="/IMG_5115.jpg" alt="Andreas Neacsu" className="hero-photo" />
      </div>
    </section>
  )
}
