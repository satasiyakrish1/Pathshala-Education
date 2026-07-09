import { useRef, useState, useEffect } from 'react'
import { useCounter } from '../hooks/useAnimations'
import styles from './Stats.module.css'

const stats = [
  { target: 2000, plus: '+', label: 'STUDENTS TAUGHT' },
  { target: 500,  plus: '+', label: 'A1 GRADE ACHIEVERS' },
  { target: 100,  plus: '%', label: 'SATISFACTION RATE' },
  { target: 2,    plus: '',  label: 'CITY BRANCHES' },
]

function Cell({ target, plus, label, index }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const count = useCounter(target, started)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={styles.cell} ref={ref}>
      <div className={styles.bgText}>{target}</div>
      <div className={styles.cellInner}>
        <div>
          <span className={styles.num}>{count.toLocaleString()}</span>
          <span className={styles.plus}>{plus}</span>
        </div>
        <span className="label">{label}</span>
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className={styles.section}>
      {stats.map((s, i) => <Cell key={i} {...s} index={i} />)}
    </section>
  )
}
