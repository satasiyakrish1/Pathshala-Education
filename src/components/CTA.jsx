import { useFadeUp } from '../hooks/useAnimations'
import styles from './CTA.module.css'

export default function CTA() {
  const ref = useFadeUp(0)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card} ref={ref}>
          
          <span className="label">— READY TO START?</span>
          
          <h2 className={styles.heading}>
            Begin your<br />
            academic journey today.
          </h2>
          
          <p className={styles.sub}>
            Join 2000+ students who have chosen Pathshaala Edu in Ahmedabad.
            Enquire today — our counseling team responds within 24 hours.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className="btn btn-black btn-lg">
              Enquire Now →
            </a>
            <a href="tel:6352134932" className={`btn btn-white btn-lg ${styles.callBtn}`}>
              📞 +91 63521 34932
            </a>
          </div>

          <div className={styles.pills}>
            <span className={styles.pill}>✓ CBSE &amp; GSEB</span>
            <span className={styles.pill}>✓ Grade 8–12</span>
            <span className={styles.pill}>✓ Online &amp; Offline</span>
            <span className={styles.pill}>✓ Ahmedabad Centers</span>
          </div>

        </div>
      </div>
    </section>
  )
}
