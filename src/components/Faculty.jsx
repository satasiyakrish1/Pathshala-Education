import { useFadeUp } from '../hooks/useAnimations'
import styles from './Faculty.module.css'

const teachers = [
  {
    name: 'Binit Shah',
    role: 'Managing Director & Physics Mentor',
    qual: 'B.Tech in Mechanical Engineering',
    exp: '9+ Years Experience',
    subject: 'Physics',
    bio: 'Specialist in simplifying complex Newtonian mechanics and electrodynamics. Helping students secure top ranks in GSEB & CBSE.',
    icon: '⚡'
  },
  {
    name: 'Dr. Aarav Mehta',
    role: 'Senior Chemistry Faculty',
    qual: 'Ph.D. in Organic Chemistry',
    exp: '12+ Years Experience',
    subject: 'Chemistry',
    bio: 'Passionate educator focused on conceptual chemistry and laboratory analytics. Expert in board exam evaluation strategies.',
    icon: '🧪'
  },
  {
    name: 'Meera Patel',
    role: 'Mathematics Specialist',
    qual: 'M.Sc. in Applied Mathematics',
    exp: '7+ Years Experience',
    subject: 'Mathematics',
    bio: 'Dedicated to breaking down calculus and algebra equations. Specialises in fast calculations and analytical solving techniques.',
    icon: '📊'
  },
  {
    name: 'Rajesh Sharma',
    role: 'Biology Faculty Coordinator',
    qual: 'M.Sc. in Biotechnology',
    exp: '10+ Years Experience',
    subject: 'Biology',
    bio: 'Uses detailed smartboard illustrations and study diagrams to make genetic theory and human anatomy easy to learn.',
    icon: '🌱'
  }
]

export default function Faculty() {
  const refHeader = useFadeUp(0)

  return (
    <div className={styles.page}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header} ref={refHeader}>
          <span className="label">— MEET OUR EDUCATORS</span>
          <h1 className={styles.title}>Faculty Team</h1>
          <p className={styles.sub}>Learn from experienced, certified subject mentors dedicated to your academic growth and board preparation.</p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {teachers.map((t, i) => {
            const refCard = useFadeUp(i * 80)
            return (
              <div className={styles.card} key={t.name} ref={refCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>
                    <span>{t.icon}</span>
                  </div>
                  <div>
                    <span className="tag tag-yellow">{t.subject}</span>
                    <h3 className={styles.name}>{t.name}</h3>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </div>

                <div className={styles.metaList}>
                  <div className={styles.metaItem}>
                    <strong>QUALIFICATION</strong>
                    <p>{t.qual}</p>
                  </div>
                  <div className={styles.metaItem}>
                    <strong>EXPERIENCE</strong>
                    <p>{t.exp}</p>
                  </div>
                </div>

                <p className={styles.bio}>{t.bio}</p>

                <div className={styles.footer}>
                  <a href="#contact" className="btn btn-black btn-sm btn-full">
                    Book a Free Demo Class →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
