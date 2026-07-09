import { useState } from 'react'
import { useScrolled } from '../hooks/useAnimations'
import styles from './Navbar.module.css'

const links = [
  ['#/', 'Home'],
  ['/#about', 'About'],
  ['/#courses', 'Courses'],
  ['#/branch', 'Branches'],
  ['#/faculty', 'Faculty'],
  ['#/faq', 'FAQ'],
  ['/#contact', 'Contact'],
]

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.innerFull}>
        {/* Logo */}
        <a href="#/" className={styles.logo}>
          <img src="/Photos/logo.jpg" alt="Pathshaala Edu" onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
          <span className={styles.logoFallback}>
            <span className={styles.logoDot} />
            <span className={styles.logoText}>PATHSHAALA<span className={styles.logoEdu}>.EDU</span></span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          {links.map(([href, label]) => (
            <a key={href} href={href} className={styles.navLink}>{label}</a>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.navCta}>
          <a href="tel:6352134932" className={`btn btn-ghost ${styles.phone}`}>+91 63521 34932</a>
          <a href="#contact" className={`btn btn-black ${styles.enquiryBtn}`}>Enquire Now →</a>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.active : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className={styles.mobileMenu}>
          {links.map(([href, label]) => (
            <a key={href} href={href} className={styles.mobileLink} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contact" className={`btn btn-black`} onClick={() => setOpen(false)} style={{marginTop:8}}>Enquire Now →</a>
        </div>
      )}
    </header>
  )
}
