import { useFadeUp } from '../hooks/useAnimations'
import styles from './Branch.module.css'

const branches = [
  {
    name: 'Chanakyapuri Center',
    tag: 'PRIMARY WING',
    address: 'FF-120,123, Shypram Sky, behind IDP school, opp. Shlok Elysium, Vishwas City 1, Chanakyapuri, Ahmedabad, Gujarat 380061',
    phone: '+91 63521 34932',
    email: 'binitshah5@gmail.com',
    features: ['Modern GSEB Classroom', 'Dedicated Doubt Labs', 'Library & Study Zones', 'Parent Lounge'],
    mapUrl: 'https://share.google/E8DsBZNnwKS4tN2pr'
  },
  {
    name: 'Jagatpur Center',
    tag: 'ACADEMIC WING',
    address: 'Swarnim Heights, Malabar County Rd, Ahmedabad, Gujarat 382481',
    phone: '+91 63521 34932',
    email: 'binitshah5@gmail.com',
    features: ['CBSE Lab Facilities', 'CCTV Secured premises', 'Interactive smart-boards', 'AC Reading Hall'],
    mapUrl: 'https://share.google/WbRjXG8iPNRWz2gGN'
  }
]

export default function Branch() {
  const refHeader = useFadeUp(0)

  return (
    <div className={styles.page}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header} ref={refHeader}>
          <span className="label">— EXPLORE OUR LOCATIONS</span>
          <h1 className={styles.title}>Our Branches</h1>
          <p className={styles.sub}>Visit any of our state-of-the-art academic wings in Ahmedabad. Designed for focus, clarity, and excellence.</p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {branches.map((b, i) => {
            const refCard = useFadeUp(i * 100)
            return (
              <div className={styles.card} key={b.name} ref={refCard}>
                <div className={styles.cardHeader}>
                  <span className={`label ${styles.tag}`}>{b.tag}</span>
                  <h2 className={styles.branchName}>{b.name}</h2>
                </div>
                
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>📍</span>
                    <div>
                      <strong>ADDRESS</strong>
                      <p>{b.address}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>📞</span>
                    <div>
                      <strong>PHONE</strong>
                      <p><a href={`tel:${b.phone}`}>{b.phone}</a></p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>✉️</span>
                    <div>
                      <strong>EMAIL</strong>
                      <p><a href={`mailto:${b.email}`}>{b.email}</a></p>
                    </div>
                  </div>
                </div>

                <div className={styles.amenities}>
                  <span className="label">CAMPUS FACILITIES</span>
                  <ul className={styles.featureList}>
                    {b.features.map(f => (
                      <li key={f} className={styles.featureItem}>
                        <span className={styles.dot} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-black btn-full ${styles.mapBtn}`}>
                  Open in Google Maps ↗
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
