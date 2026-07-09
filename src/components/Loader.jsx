import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styles from './Loader.module.css'

export default function Loader({ onComplete }) {
  const containerRef = useRef(null)
  const leftPanelRef = useRef(null)
  const rightPanelRef = useRef(null)
  const barRef = useRef(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide panels out in opposite directions
          gsap.timeline({ onComplete })
            .to(leftPanelRef.current, {
              xPercent: -100,
              duration: 1.0,
              ease: 'power3.inOut'
            }, 0)
            .to(rightPanelRef.current, {
              xPercent: 100,
              duration: 1.0,
              ease: 'power3.inOut'
            }, 0)
            .to(containerRef.current, {
              opacity: 0,
              duration: 0.5,
              delay: 0.5,
              pointerEvents: 'none'
            }, 0)
        }
      })

      const counter = { val: 0 }
      tl.to(counter, {
        val: 100,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: () => setPercent(Math.floor(counter.val))
      }, 0)

      tl.to(barRef.current, {
        width: '100%',
        duration: 2.2,
        ease: 'power2.out'
      }, 0)

      // Brief pause at 100%
      tl.to({}, { duration: 0.3 })
    })

    return () => ctx.revert()
  }, [onComplete])

  return (
    <div className={styles.loader} ref={containerRef}>
      
      {/* Left panel - Brand Info */}
      <div className={styles.panelLeft} ref={leftPanelRef}>
        <div className={styles.centerContent}>
          <div className={styles.logoWrap}>
            <img src="/Photos/logo.jpg" alt="Pathshaala Edu" className={styles.logoImg} onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
            <span className={styles.logoFallback}>
              <span className={styles.logoDot} />
              <span className={styles.logoText}>PATHSHAALA<span className={styles.logoEdu}>.EDU</span></span>
            </span>
          </div>
        </div>
      </div>

      {/* Right panel - Counter */}
      <div className={styles.panelRight} ref={rightPanelRef}>
        <div className={styles.counterWrap}>
          <span className={styles.bigNumber}>{String(percent).padStart(3, '0')}</span>
          <span className="label" style={{color:'var(--navy-dark)',letterSpacing:'.15em'}}>PREPARING SYSTEM</span>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className={styles.bottomBarWrap}>
        <div className={styles.bottomBar} ref={barRef} />
      </div>

    </div>
  )
}
