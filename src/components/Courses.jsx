import { useFadeUp } from '../hooks/useAnimations'
import styles from './Courses.module.css'

const courses = [
  {
    tag: '01 / STARTER', title: 'Foundation Course',
    price: '₹25,000', mode: 'Online / Offline',
    desc: 'Build a strong academic foundation with 10 structured lessons covering core subjects for Grade 8–10.',
    feats: ['10 Structured Lessons', 'CBSE & GSEB Board', 'Doubt Support Sessions', 'Regular Progress Reports'],
    featured: false,
  },
  {
    tag: '02 / ADVANCED', title: 'Advanced Course',
    price: '₹50,000', mode: 'Online / Offline',
    desc: 'A comprehensive 20-lesson program with test series, personalised mentoring, and targeted exam strategy.',
    feats: ['20 In-depth Lessons', 'Full Test Series', '1-on-1 Mentoring', 'Board Exam Strategy'],
    featured: true,
  },
  {
    tag: '03 / PREMIUM', title: 'Elite Course',
    price: '₹75,000', mode: 'Online / Offline',
    desc: 'The complete Pathshaala experience — unlimited doubt sessions, career guidance, and premium support.',
    feats: ['20+ Lessons', 'Unlimited Doubt Sessions', 'Career Guidance', 'Priority Faculty Access'],
    featured: false,
  },
]

function CourseCard({ tag, title, desc, price, mode, feats, featured, delay }) {
  const ref = useFadeUp(delay)
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`} ref={ref}>
      <div className={styles.cardTop}>
        <span className={`label ${styles.cardTag}`}>{tag}</span>
        {featured && <span className={styles.popular}>MOST POPULAR</span>}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardMode}>{mode}</div>
      <p className={styles.cardDesc}>{desc}</p>
      <ul className={styles.feats}>
        {feats.map((f, i) => (
          <li key={i} className={styles.feat}>
            <span className={styles.featDot} />
            {f}
          </li>
        ))}
      </ul>
      <div className={styles.cardFooter}>
        <div>
          <span className={`label ${styles.fromLabel}`}>Starting from</span>
          <div className={styles.price}>{price}</div>
        </div>
        <a href="#contact" className={`btn ${featured ? 'btn-yellow' : 'btn-black'} btn-sm`}>Enrol Now →</a>
      </div>
    </div>
  )
}

export default function Courses() {
  const titleRef = useFadeUp(0)
  return (
    <section className="section" id="courses">
      <div className="container">
        <div className={styles.header} ref={titleRef}>
          <div className={styles.headerLeft}>
            <span className="label">— PROGRAMS</span>
            <h2 className={styles.title}>Our Courses</h2>
          </div>
          <a href="#contact" className={`btn btn-black ${styles.viewAll}`}>View All Programs →</a>
        </div>
        <div className={styles.grid}>
          {courses.map((c, i) => <CourseCard key={i} {...c} delay={i * 100} />)}
        </div>
      </div>
    </section>
  )
}
