import styles from './Footer.module.css'

const links = [
  ['#/', 'Home'],
  ['/#about', 'About'],
  ['/#courses', 'Courses'],
  ['#/branch', 'Branches'],
  ['#/faculty', 'Faculty'],
  ['#/faq', 'FAQ'],
  ['/#contact', 'Contact']
]
const programs = ['Foundation Course','Advanced Course','Elite Course']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerFull}>

        {/* Brand */}
        <div className={styles.brand}>
          <a href="#/" className={styles.logo}>
            <img src="/Photos/logo.jpg" alt="Pathshaala Edu" className={styles.logoImg} onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <span className={styles.logoFallback}>
              <span className={styles.logoDot} />
              <span className={styles.logoText}>PATHSHAALA<span className={styles.logoEdu}>.EDU</span></span>
            </span>
          </a>
          <p className={styles.brandDesc}>A premier educational institution dedicated to high-quality learning for Grade 8–12 students in Ahmedabad.</p>
          <p className={styles.tagline}>"Learn. Grow. Succeed."</p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/pathshaala_edu/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              📸 Instagram
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.linkList}>
            {links.map(([h,l]) => <li key={h}><a href={h}>{l}</a></li>)}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className={styles.colTitle}>Programs</h4>
          <ul className={styles.linkList}>
            {programs.map(p => <li key={p}><a href="#courses">{p}</a></li>)}
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className={styles.colTitle}>Contact</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}><span className="label">LOCATION</span><p>Ahmedabad, Gujarat</p></div>
            <div className={styles.contactItem}><span className="label">PHONE</span><p><a href="tel:6352134932">+91 63521 34932</a></p></div>
            <div className={styles.contactItem}><span className="label">EMAIL</span><p><a href="mailto:binitshah5@gmail.com">binitshah5@gmail.com</a></p></div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomFull}>
        <div className={styles.bottomInner}>
          <span className="label" style={{fontSize:'.65rem'}}>© {new Date().getFullYear()} PATHSHAALA EDU · AHMEDABAD</span>
          <a href="https://krishsatasiya.netlify.app/" target="_blank" rel="noopener noreferrer" className={`label ${styles.devLink}`} style={{fontSize:'.65rem',color:'var(--navy)',fontWeight:'700'}}>Developed by Krish Satasiya</a>
          <span className="label" style={{fontSize:'.65rem'}}>CBSE &amp; GSEB CURRICULUM</span>
        </div>
      </div>
    </footer>
  )
}
