import { useFadeUp } from '../hooks/useAnimations'
import styles from './WhySection.module.css'

const items = [
  { icon: '↗', title: 'Regular Test Series',        desc: 'Structured offline test series that precisely benchmarks performance and prepares students rigorously for board exams.' },
  { icon: '◎', title: 'Personalised Learning',       desc: 'Our approach is tailored to the unique needs, strengths, and learning interests of each individual student.' },
  { icon: '▣', title: 'Latest Tech in Academics',    desc: 'Teaching with modern educational technology to make understanding faster, deeper, and more engaging.' },
]

function Card({ icon, title, desc, index }) {
  const ref = useFadeUp(index * 80)
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{icon}</span>
        <span className={`label ${styles.cardNum}`}>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  )
}

export default function WhySection() {
  const titleRef = useFadeUp(0)

  return (
    <section className={`section ${styles.section}`} id="about">
      <div className="container">

        <div className={styles.header} ref={titleRef}>
          <span className="label">— WHAT WE OFFER</span>
          <h2 className={styles.title}>
            Strategic Education<br />
            for Your Next Goal
          </h2>
          <p className={styles.sub}>High-impact academic solutions balancing quality, depth, and personalisation — without the corporate overhead.</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => <Card key={i} {...item} index={i} />)}
        </div>

      </div>
    </section>
  )
}
