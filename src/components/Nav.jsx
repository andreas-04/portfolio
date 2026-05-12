import './Nav.css'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav-name">AN</a>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
