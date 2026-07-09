import { useFadeUp } from '../hooks/useAnimations'
import styles from './Linktree.module.css'

export default function Linktree() {
  const refHeader = useFadeUp(0)

  const links = [
    { label: 'Website Home', url: '#/', icon: '🌐', bg: 'var(--yellow)' },
    { label: 'Admission Enquiry', url: 'https://wa.me/916352134932', icon: '💬', bg: '#4ade80' },
    { label: 'View Our Courses', url: '/#courses', icon: '📚', bg: '#60a5fa' },
    { label: 'Chanakyapuri Location (Maps)', url: 'https://share.google/E8DsBZNnwKS4tN2pr', icon: '📍', bg: '#f87171' },
    { label: 'Jagatpur Location (Maps)', url: 'https://share.google/WbRjXG8iPNRWz2gGN', icon: '📍', bg: '#fb923c' },
    { label: 'Meet Our Faculty', url: '#/faculty', icon: '🎓', bg: '#c084fc' },
    { label: 'Common FAQs', url: '#/faq', icon: '❓', bg: '#2dd4bf' },
    { label: 'Call Us Now (+91 63521 34932)', url: 'tel:+916352134932', icon: '📞', bg: 'var(--white)' },
    { label: 'Alternate Contact (+91 75675 79699)', url: 'tel:+917567579699', icon: '☎️', bg: 'var(--white)' }
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={refHeader}>
        {/* Profile Card */}
        <div className={styles.profile}>
          <div className={styles.avatarWrapper}>
            <img src="/Photos/logo.jpg" alt="Pathshaala Edu Logo" className={styles.avatar} />
          </div>
          <h1 className={styles.name}>Pathshaala Edu</h1>
          <p className={styles.tagline}>Coaching Center · Grades 8-12 (CBSE & GSEB)</p>
          <p className={styles.desc}>
            A premier educational institution providing specialized training, guidance, and support to students to excel in exams and achieve academic goals.
          </p>
        </div>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="https://search.google.com/local/writereview?placeid=ChIJExFPyEiDXjkRShOufRw3SJ0" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Google Reviews">
            ⭐
          </a>
          <a href="https://www.instagram.com/pathshaala_edu/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Instagram">
            📸
          </a>
          <a href="https://wa.me/916352134932" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="WhatsApp">
            💬
          </a>
        </div>

        {/* Links List */}
        <div className={styles.linksGrid}>
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={styles.linkCard}
              style={{ '--btn-bg': link.bg }}
            >
              <span className={styles.linkIcon}>{link.icon}</span>
              <span className={styles.linkLabel}>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Branches Info */}
        <div className={styles.branchesSection}>
          <h3 className={styles.sectionTitle}>Our Branches</h3>
          
          <div className={styles.branchCard}>
            <div className={styles.branchHeader}>
              <span className={styles.branchName}>Chanakyapuri Center</span>
              <span className={styles.branchTag}>PRIMARY WING</span>
            </div>
            <p className={styles.branchAddress}>
              FF-120,123, Shypram Sky, behind IDP school, opp. Shlok Elysium, Vishwas City 1, Chanakyapuri, Ahmedabad, Gujarat 380061
            </p>
            <a href="https://share.google/E8DsBZNnwKS4tN2pr" target="_blank" rel="noopener noreferrer" className={styles.branchMapBtn}>
              📍 Get Directions
            </a>
          </div>

          <div className={styles.branchCard}>
            <div className={styles.branchHeader}>
              <span className={styles.branchName}>Jagatpur Center</span>
              <span className={styles.branchTag}>ACADEMIC WING</span>
            </div>
            <p className={styles.branchAddress}>
              Swarnim Heights, Malabar County Rd, Ahmedabad, Gujarat 382481
            </p>
            <a href="https://share.google/WbRjXG8iPNRWz2gGN" target="_blank" rel="noopener noreferrer" className={styles.branchMapBtn}>
              📍 Get Directions
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Pathshaala Education</p>
          <p className={styles.devBy}>
            Developed by <a href="https://krishsatasiya.netlify.app/" target="_blank" rel="noopener noreferrer">Krish Satasiya</a>
          </p>
        </footer>
      </div>
    </div>
  )
}
