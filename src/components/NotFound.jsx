import { useFadeUp } from '../hooks/useAnimations'
import styles from './NotFound.module.css'

export default function NotFound() {
  const ref = useFadeUp(0)

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`} ref={ref}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Path Not Found</h1>
        <p className={styles.desc}>
          The link you followed does not exist. Double check the address or return home to explore our school programs.
        </p>
        <div className={styles.actions}>
          <a href="#/" className="btn btn-black btn-lg">
            Return to Homepage →
          </a>
        </div>
      </div>
    </div>
  )
}
