import styles from './Marquee.module.css'

const items = [
  'CBSE CURRICULUM', 'GSEB CURRICULUM', 'GRADE 8–12',
  'PERSONALISED LEARNING', 'REGULAR TEST SERIES', 'ONLINE & OFFLINE',
  'AHMEDABAD', '2000+ STUDENTS', 'A1 GRADES',
  'CBSE CURRICULUM', 'GSEB CURRICULUM', 'GRADE 8–12',
  'PERSONALISED LEARNING', 'REGULAR TEST SERIES', 'ONLINE & OFFLINE',
  'AHMEDABAD', '2000+ STUDENTS', 'A1 GRADES',
]

export default function Marquee() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <div className={styles.item} key={i}>
            <span className={styles.dot}>★</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
